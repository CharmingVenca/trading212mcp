import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { Trading212Client} from "../services/trading212-client";
import { z } from "zod";

/**
 * Registers the placeStopLimitOrder tool with the MCP server.
 */
export function registerPlaceStopLimitOrder(server: McpServer, client: Trading212Client) {
    server.registerTool(
        'place_stop_limit_order',
        {
            title: 'Place a Stop Limit Order',
            description: 'Creates a new Stop-Limit order, combining features of a Stop and a Limit order. The direction of the trade (buy/sell) is determined by the sign of the quantity field.\n' +
                'Execution Logic:\n' +
                'When the instrument\'s Last Traded Price (LTP) reaches the specified stopPrice, the order is triggered.\n' +
                'A Limit order is then automatically placed at the specified limitPrice.\n' +
                'This two-step process helps protect against price slippage that can occur with a standard Stop order.',
            annotations: {
                readOnlyHint: false,
                destructiveHint: true,
                idempotentHint: false,
                openWorldHint: true,
            },
            inputSchema: z.object({
                limitPrice: z.number().describe('Example: 100.23'),
                quantity: z.number().describe('Example: 0.1'),
                stopPrice: z.number().describe('Example: 100.23'),
                ticker: z.string().describe('Example: AAPL_US_EQ'),
                timeValidity: z.enum(['DAY', 'GOOD_TILL_CANCEL']).describe('Specifies how long the order remains active:\n' +
                    'DAY: The order will automatically expire if not executed by midnight in the time zone of the instrument\'s exchange.\n' +
                    'GOOD_TILL_CANCEL: The order remains active indefinitely until it is either filled or explicitly cancelled by you.'),
            }),
        },
        async ({limitPrice, quantity, stopPrice, ticker, timeValidity}) => {
            try {
                const order = await client.placeStopLimitOrder({limitPrice, quantity, stopPrice, ticker, timeValidity});
                return {
                    content: [{
                        type: "text",
                        text: JSON.stringify(order),
                    }]
                };
            } catch (error) {
                console.error('Error placing stop limit order:', error);
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