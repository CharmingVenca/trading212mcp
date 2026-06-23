import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { Trading212Client} from "../services/trading212-client";
import { z } from "zod";

/**
 * Registers the placeStopOrder tool with the MCP server.
 */
export function registerPlaceStopOrder(server: McpServer, client: Trading212Client) {
    server.registerTool(
        'place_stop_order',
        {
            title: 'Place a Stop Order',
            description: 'Creates a new Stop order, which places a Market order once the stopPrice is reached.\n' +
                'To place a buy stop order, use a positive quantity.\n' +
                'To place a sell stop order (commonly a \'stop-loss\'), use a negative quantity.\n' +
                'The stopPrice is triggered by the instrument\'s Last Traded Price (LTP).',
            annotations: {
                readOnlyHint: false,
                destructiveHint: true,
                idempotentHint: false,
                openWorldHint: true,
            },
            inputSchema: z.object({
                quantity: z.number().describe('Example: 0.1'),
                stopPrice: z.number().describe('Example: 100.23'),
                ticker: z.string().describe('Example: AAPL_US_EQ'),
                timeValidity: z.enum(['DAY', 'GOOD_TILL_CANCEL']).describe('Specifies how long the order remains active:\n' +
                    'DAY: The order will automatically expire if not executed by midnight in the time zone of the instrument\'s exchange.\n' +
                    'GOOD_TILL_CANCEL: The order remains active indefinitely until it is either filled or explicitly cancelled by you.')
            })
        },
        async ({quantity, stopPrice, ticker, timeValidity}) => {
            try {
                const order = await client.placeStopOrder({quantity, stopPrice, ticker, timeValidity})
                return {
                    content: [{
                        type: "text",
                        text: JSON.stringify(order),
                    }]
                };
            } catch (error) {
                console.error('Error placing stop order:', error);
                return {
                    content: [{
                        type: "text",
                        text: "Error fetching account summary: " + (error as Error).message
                    }]
                }
            }
        }
    )
}