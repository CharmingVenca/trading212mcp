import {McpServer} from "@modelcontextprotocol/sdk/server/mcp.js"
import {Trading212Client} from "../services/trading212-client";
import { z} from "zod";

/**
 * Registers the getAllPendingOrders tool with the MCP server.
 */
export function registerGetAllPendingOrders(server: McpServer, client: Trading212Client) {
    server.registerTool(
        'get_all_pending_orders',
        {
            title: 'Get all pending orders',
            description: 'Retrieves all pending orders for the authenticated user.',
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
                const orders = await client.getAllPendingOrders();
                return {
                    content: [{
                        type: "text",
                        text: JSON.stringify(orders, null, 2)
                    }]
                }
            } catch (error) {
                console.error('Error fetching all pending orders:', error);
                return {
                    content: [{
                        type: "text",
                        text: "Error fetching all pending orders: " + (error as Error).message
                    }]
                }
            }
        })
}