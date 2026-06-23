import {McpServer} from "@modelcontextprotocol/sdk/server/mcp.js"
import {Trading212Client} from "../services/trading212-client";
import {z} from "zod";

/**
 * Registers the fetchAllOpenPositions tool with the MCP server.
 */
export function registerFetchAllOpenPositions(server: McpServer, client: Trading212Client) {
    server.registerTool(
        'fetch_all_open_positions',
        {
            title: 'Fetch all open positions',
            description: 'Fetch all open positions for your account\n',
            annotations: {
                readOnlyHint: true,
                destructiveHint: false,
                idempotentHint: true,
                openWorldHint: true,
            },
            inputSchema: z.object({
                ticker: z.string().optional().describe('Example: AAPL_US_EQ'),
            }),
        },
        async ({ticker}) => {
            try {
                const positions = await client.fetchAllOpenPositions(ticker);
                return {
                    content: [{
                        type: "text",
                        text: JSON.stringify(positions),
                    }]
                };
            } catch (error) {
                console.error('Error fetching open positions:', error);
                return {
                    content: [{
                        type: "text",
                        text: "Error fetching open positions: " + (error as Error).message
                    }]
                }
            }
        }
    )
}