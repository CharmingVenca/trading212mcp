import {McpServer} from "@modelcontextprotocol/sdk/server/mcp.js"
import {Trading212Client} from "../services/trading212-client";
import {z} from "zod";

/**
 * Registers the getHistoricalOrders tool with the MCP server.
 */
export function registerGetHistoricalOrders(server: McpServer, client: Trading212Client) {
    server.registerTool(
        'get_historical_orders',
        {
            title: 'Get Historical Orders',
            description: 'Retrieves historical order data for your account. Supports pagination and filtering by ticker.',
            annotations: {
                readOnlyHint: true,
                destructiveHint: false,
                idempotentHint: true,
                openWorldHint: true,
            },
            inputSchema: z.object({
                cursor: z.number().int().optional().describe('Pagination cursor'),
                tickerFilter: z.string().optional().describe('Ticker filter'),
                limit: z.number().int().min(1).max(50).optional().describe('Max items: 50, Default 20, Example: 21'),
            }),
        },
        async ({cursor, tickerFilter, limit}) => {
            try {
                const orders = await client.getHistoricalOrders(cursor, tickerFilter, limit);
                return {
                    content: [{
                        type: "text",
                        text: JSON.stringify(orders),
                    }]
                }
            } catch (error) {
                console.error('Error fetching historical orders:', error);
                return {
                    content: [{
                        type: "text",
                        text: "Error fetching historical orders: " + (error as Error).message
                    }]
                }
            }
        }
    )
}
