import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { NodeStreamableHTTPServerTransport } from "@modelcontextprotocol/node";
import { createServer, Server as HttpServer } from "node:http";
import { randomUUID } from "node:crypto";
import { Trading212Client } from "./services/trading212-client.js";
import pkg from "../package.json" with { type: "json" };
import { registerGetAccountSummary } from "./resources/getAccountSummary.js";
import { registerGetAllAvailableInstruments } from "./resources/getAllAvailableInstruments.js";
import { registerGetExchangesMetadata } from "./resources/getExchangesMetadata.js";
import { registerGetAllPendingOrders } from "./resources/getAllPendingOrders.js";
import { registerGetPaidOutDividends } from "./resources/getPaidOutDividends.js";
import { registerGetHistoricalOrders } from "./resources/getHistoricalOrders.js";
import { registerGetTransactions } from "./resources/getTransactions.js";
import { registerPlaceLimitOrder } from "./tools/placeLimitOrder.js";
import { registerPlaceMarketOrder } from "./tools/placeMarketOrder.js";
import { registerPlaceStopOrder } from "./tools/placeStopOrder.js";
import { registerPlaceStopLimitOrder } from "./tools/placeStopLimitOrder.js";
import { registerCancelPendingOrder } from "./tools/cancelPendingOrder.js";
import { registerGetPendingOrderById } from "./resources/getPendingOrderById.js";
import { registerFetchAllOpenPositions } from "./resources/fetchAllOpenPositions.js";

export interface Trading212McpServerOptions {
    /** The name of the server. Defaults to package.json name if not provided */
    name?: string;
    /** The version of the server. Defaults to package.json version if not provided */
    version?: string;
    /** The Trading212Client instance to use for API interactions */
    client: Trading212Client;
}

/**
 * Encapsulates the Trading212 MCP server logic
 */
export class Trading212McpServer {
    private readonly server: McpServer;
    private readonly client: Trading212Client;
    private readonly name: string;
    private readonly version: string;
    private httpServer: HttpServer | null = null;
    private sessions = new Map<string, {
        server: McpServer;
        transport: NodeStreamableHTTPServerTransport;
    }>();

    /**
     * Initializes a new instance of the Trading212McpServer
     * @param options Configuration options for the server, including the Trading212Client instance
     */
    constructor(options: Trading212McpServerOptions) {
        this.client = options.client;
        this.name = options.name ?? pkg.name;
        this.version = options.version ?? pkg.version;
        this.server = this.createMcpInstance(this.name, this.version);
    }

    /**
     * Creates and configures a new McpServer instance, registering all the Trading212 resources and tools
     * @param name Name of the MCP server
     * @param version Version of the MCP server
     * @returns A configured McpServer instance
     */
    private createMcpInstance(name: string, version: string): McpServer {
        const server = new McpServer({ name, version });
        
        // Register Resources
        registerGetAccountSummary(server, this.client);
        registerGetAllAvailableInstruments(server, this.client);
        registerGetExchangesMetadata(server, this.client);
        registerGetAllPendingOrders(server, this.client);
        registerGetPaidOutDividends(server, this.client);
        registerGetHistoricalOrders(server, this.client);
        registerGetTransactions(server, this.client);
        registerGetPendingOrderById(server, this.client);
        registerFetchAllOpenPositions(server, this.client);

        // Register Tools
        registerPlaceLimitOrder(server, this.client);
        registerPlaceMarketOrder(server, this.client);
        registerPlaceStopOrder(server, this.client);
        registerPlaceStopLimitOrder(server, this.client);
        registerCancelPendingOrder(server, this.client);

        return server;
    }

    /**
     * Starts the server using stdio transport
     * Establishes a connection to the MCP server with I/O streams
     * @returns A promise that resolves with the StdioServerTransport instance
     */
    async startStdio() {
        const transport = new StdioServerTransport();
        await this.server.connect(transport);
        return transport;
    }

    /**
     * Starts the server using HTTP transport
     * Binds the server to a specified port and host, handling incoming HTTP requests
     * @param port Port to listen on, defaults to 3000
     * @param host Host to bind to, defaults to 127.0.0.1
     * @returns A promise that resolves when the HTTP server is listening
     */
    async startHttp(port: number = 3000, host: string = "127.0.0.1") {
        this.httpServer = createServer(async (req, res) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Headers", "Content-Type, Mcp-Session-Id");
            res.setHeader("Access-Control-Allow-Methods", "POST, GET, DELETE, OPTIONS");

            if (req.method === "OPTIONS") {
                res.writeHead(204);
                res.end();
                return;
            }

            if (req.url === "/health" && req.method === "GET") {
                res.writeHead(200, {"Content-Type": "application/json"});
                res.end(JSON.stringify({status: "ok"}));
                return;
            }

            if (req.url === "/mcp") {
                const sessionId = req.headers["mcp-session-id"] as string | undefined;
                let entry = sessionId ? this.sessions.get(sessionId) : undefined;

                if (req.method === "GET" && sessionId && entry) {
                    await entry.transport.handleRequest(req, res);
                    return;
                }

                if (req.method === "POST") {
                    if (!entry) {
                        const server = this.createMcpInstance(this.name, this.version);
                        const transport = new NodeStreamableHTTPServerTransport({
                            sessionIdGenerator: () => randomUUID(),
                        });

                        transport.onclose = () => {
                            if (transport.sessionId) {
                                this.sessions.delete(transport.sessionId);
                            }
                            server.close().catch(() => {});
                        };

                        await server.connect(transport);
                        await transport.handleRequest(req, res);

                        if (transport.sessionId) {
                            this.sessions.set(transport.sessionId, {server, transport});
                        }
                    } else {
                        await entry.transport.handleRequest(req, res);
                    }
                    return;
                }

                if (req.method === "DELETE" && entry) {
                    await entry.transport.handleRequest(req, res);
                    return;
                }
            }

            res.writeHead(404);
            res.end("Not found");
        });

        return new Promise<void>((resolve) => {
            this.httpServer?.listen(port, host, () => {
                resolve();
            });
        });
    }

    /**
     * Shuts down the server and all active sessions
     * @returns A promise that resolves when all shutdown operations are complete
     */
    async stop() {
        const closePromises: Promise<any>[] = [];

        Array.from(this.sessions.values()).forEach(async ({ transport }) => {
            try {
                closePromises.push(transport.close());
            } catch (err) {
                console.error(`[mcp] Error closing session ${transport.sessionId}:`, err);
            }
        });

        closePromises.push(this.server.close().catch(err => {
            console.error(`[mcp] Error closing main server:`, err);
        }));

        if (this.httpServer) {
            closePromises.push(new Promise<void>((resolve) => {
                this.httpServer?.close(() => resolve());
            }));
        }

        await Promise.all(closePromises);
        this.sessions.clear();
    }
}
