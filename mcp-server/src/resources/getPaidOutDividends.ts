import {McpServer} from "@modelcontextprotocol/sdk/server/mcp.js"
import {Trading212Client} from "../services/trading212-client";
import {z} from "zod";

/**
 * Registers the getPaidOutDividends tool with the MCP server.
 */
export function registerGetPaidOutDividends(server: McpServer, client: Trading212Client) {
    server.registerTool(
        'get_paid_out_dividends',
        {
            title: 'Get Paid Out Dividends',
            description: 'Retrieves dividends paid out to your account. Supports pagination and filtering by ticker.',
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
                const dividends = await client.getDividends(cursor, tickerFilter, limit);
                return {
                    content: [{
                        type: "text",
                        text: JSON.stringify(dividends),
                    }]
                }
            } catch (error) {
                console.error('Error fetching paid out dividends:', error);
                return {
                    content: [{
                        type: "text",
                        text: "Error fetching paid out dividends: " + (error as Error).message
                    }]
                }
            }
        }
    )
}