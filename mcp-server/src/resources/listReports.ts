import {McpServer} from "@modelcontextprotocol/sdk/server/mcp.js"
import {Trading212Client} from "../services/trading212-client";
import {z} from "zod";

/**
 * Registers the listReports tool with the MCP server.
 */
export function registerListReports(server: McpServer, client: Trading212Client) {
    server.registerTool(
        'list_reports',
        {
            title: 'List Generated Reports',
            description: 'Retrieves a list of all requested CSV reports and their current status.',
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
                const reports = await client.listReports();
                return {
                    content: [{
                        type: "text",
                        text: JSON.stringify(reports),
                    }]
                }
            } catch (error) {
                console.error('Error listing reports:', error);
                return {
                    content: [{
                        type: "text",
                        text: "Error listing reports: " + (error as Error).message
                    }]
                }
            }
        }
    )
}
