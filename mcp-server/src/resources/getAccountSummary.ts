import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { Trading212Client } from "../services/trading212-client.js";
import { z } from "zod";

/**
 * Registers the getAccountSummary tool with the MCP server.
 */
export function registerGetAccountSummary(server: McpServer, client: Trading212Client) {
    server.registerTool(
        'get_account_summary',
        {
            title: 'Get Account Summary',
            description: 'Provides a breakdown of your account\'s cash and investment metrics, including available funds, invested capital, and total account value.',
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
                const summary = await client.getAccountSummary();
                return {
                    content: [{
                        type: "text",
                        text: JSON.stringify(summary, null, 2)
                    }]
                }
            } catch (error) {
                console.error('Error fetching account summary:', error);
                return {
                    content: [{
                        type: "text",
                        text: "Error fetching account summary: " + (error as Error).message
                    }]
                }
            }
        }
    );
}