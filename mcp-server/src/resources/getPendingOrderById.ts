import {McpServer} from "@modelcontextprotocol/sdk/server/mcp.js"
import {Trading212Client} from "../services/trading212-client";
import {z} from "zod";

/**
 * Registers the getPendingOrderById tool with the MCP server.
 */
export function registerGetPendingOrderById(server: McpServer, client: Trading212Client) {
    server.registerTool(
        'get_pending_order_by_id',
        {
            title: 'Get Pending Order by ID',
            description: 'Retrieves a single pending order using its unique numerical ID. This is useful for checking the status of a specific order you have previously placed.\n',
            annotations: {
                readOnlyHint: true,
                destructiveHint: false,
                idempotentHint: true,
                openWorldHint: true,
            },
            inputSchema: z.object({
                orderId: z.string().describe('Example: 49800953507'),
            })
        },
        async ({orderId}) => {
            try {
                const order = await client.getPendingOrderById(orderId);
                return {
                    content: [{
                        type: "text",
                        text: JSON.stringify(order),
                    }]
                }
            } catch (error) {
                console.error('Error fetching pending order by ID:', error);
                return {
                    content: [{
                        type: "text",
                        text: "Error fetching pending order by ID: " + (error as Error).message
                    }]
                }
            }
        }
    )
}