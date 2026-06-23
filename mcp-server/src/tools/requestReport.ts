import {McpServer} from "@modelcontextprotocol/sdk/server/mcp.js"
import {Trading212Client} from "../services/trading212-client.js";
import {z} from "zod";

/**
 * Registers the 'request_report' tool with the MCP server
 * @param server McpServer instance to register the tool with
 * @param client Trading212Client instance used to interact with the API
 */
export function registerRequestReport(server: McpServer, client: Trading212Client) {
    server.registerTool(
        'request_report',
        {
            title: 'Request a CSV Report',
            description: 'Initiates the generation of a CSV report containing historical account data. Returns a reportId to track status.',
            inputSchema: z.object({
                dataIncluded: z.object({
                    includeDividends: z.boolean().describe('Include dividend data'),
                    includeInterest: z.boolean().describe('Include interest data'),
                    includeOrders: z.boolean().describe('Include order data'),
                    includeTransactions: z.boolean().describe('Include transaction data'),
                }).describe('Specify which data to include in the report'),
                timeFrom: z.string().describe('Start time for the report data (ISO 8601)'),
                timeTo: z.string().describe('End time for the report data (ISO 8601)'),
            }),
        },
        async (args) => {
            try {
                const result = await client.requestReport(args);
                return {
                    content: [{
                        type: "text",
                        text: JSON.stringify(result),
                    }]
                }
            } catch (error) {
                console.error('Error requesting report:', error);
                return {
                    content: [{
                        type: "text",
                        text: "Error requesting report: " + (error as Error).message
                    }]
                }
            }
        }
    )
}
