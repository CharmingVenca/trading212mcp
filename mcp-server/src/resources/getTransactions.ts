import {McpServer} from "@modelcontextprotocol/sdk/server/mcp.js"
import {Trading212Client} from "../services/trading212-client";
import {z} from "zod";

/**
 * Registers the getTransactions tool with the MCP server.
 */
export function registerGetTransactions(server: McpServer, client: Trading212Client) {
    server.registerTool(
        'get_transactions',
        {
            title: 'Get Transactions',
            description: 'Fetch superficial information about movements to and from your account. Supports pagination and time filtering.',
            annotations: {
                readOnlyHint: true,
                destructiveHint: false,
                idempotentHint: true,
                openWorldHint: true,
            },
            inputSchema: z.object({
                cursor: z.string().optional().describe('Pagination cursor'),
                time: z.string().optional().describe('Retrieve transactions starting from the specified time (ISO 8601)'),
                limit: z.number().int().min(1).max(50).optional().describe('Max items: 50, Default 20, Example: 21'),
            }),
        },
        async ({cursor, time, limit}) => {
            try {
                const transactions = await client.getTransactions(cursor, time, limit);
                return {
                    content: [{
                        type: "text",
                        text: JSON.stringify(transactions),
                    }]
                }
            } catch (error) {
                console.error('Error fetching transactions:', error);
                return {
                    content: [{
                        type: "text",
                        text: "Error fetching transactions: " + (error as Error).message
                    }]
                }
            }
        }
    )
}
