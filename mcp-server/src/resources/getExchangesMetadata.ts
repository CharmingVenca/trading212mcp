import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { Trading212Client } from "../services/trading212-client.js";
import { z } from "zod";

/**
 * Registers the getExchangesMetadata tool with the MCP server.
 */
export function registerGetExchangesMetadata(server: McpServer, client: Trading212Client) {
    server.registerTool(
        'get_exchanges_metadata',
        {
            title: 'Get Exchanges Metadata',
            description: 'Retrieves all accessible exchanges and their corresponding working schedules. Data is refreshed every 10 minutes.',
            annotations: {
                readOnlyHint: true,
                destructiveHint: false,
                idempotentHint: true,
                openWorldHint: true,
            },
            inputSchema: z.object({}),
        },
        async () => {
            try {
                const metadata = await client.getExchangesMetadata();
                return {
                    content: [{
                        type: "text",
                        text: JSON.stringify(metadata, null, 2)
                    }]
                }
            } catch (error) {
                console.error('Error fetching exchanges metadata:', error);
                return {
                    content: [{
                        type: "text",
                        text: "Error fetching exchanges metadata: " + (error as Error).message
                    }]
                }
            }
        })
}