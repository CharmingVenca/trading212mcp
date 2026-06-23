import {McpServer} from "@modelcontextprotocol/sdk/server/mcp.js"
import {Trading212Client} from "../services/trading212-client";
import {z} from "zod";

/**
 * Registers the 'cancel_pending_order' tool with the MCP server
 * @param server McpServer instance to register the tool with
 * @param client Trading212Client instance used to interact with the API
 */
export function registerCancelPendingOrder(server: McpServer, client: Trading212Client) {
    server.registerTool(
        'cancel_pending_order',
        {
            title: 'Cancel a Pending Order',
            description: 'Attempts to cancel an active, unfilled order by its unique ID. Cancellation is not guaranteed if the order is already in the process of being filled. A successful response indicates the cancellation request was accepted.',
            annotations: {
                readOnlyHint: false,
                destructiveHint: true,
                idempotentHint: false,
                openWorldHint: true,
            },
            inputSchema: z.object({
                orderId: z.string().describe('Example: 49800953507'),
            })
        },
        async ({orderId}) => {
            try {
                await client.cancelPendingOrder(orderId);
                return {
                    content: [{
                        type: "text",
                        text: `Order ${orderId} cancelled successfully.`,
                    }]
                };
            } catch (error) {
                console.error('Error canceling pending order:', error);
                return {
                    content: [{
                        type: "text",
                        text: "Error canceling pending order: " + (error as Error).message
                    }]
                }
            }
        }
    )
}