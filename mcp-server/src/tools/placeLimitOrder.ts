import {McpServer} from "@modelcontextprotocol/sdk/server/mcp.js"
import {Trading212Client} from "../services/trading212-client";
import {z} from "zod";

/**
 * Registers the placeLimitOrder tool with the MCP server.
 */
export function registerPlaceLimitOrder(server: McpServer, client: Trading212Client) {
    server.registerTool(
        'place_limit_order',
        {
            title: 'Place a Limit Order',
            description: 'Creates a new Limit order, which executes at a specified price or better.\n' +
                'To place a buy order, use a positive quantity. The order will fill at the limitPrice or lower.\n' +
                'To place a sell order, use a negative quantity. The order will fill at the limitPrice or higher.',
            annotations: {
                readOnlyHint: false,
                destructiveHint: true,
                idempotentHint: false,
                openWorldHint: true,
            },
            inputSchema: z.object({
                limitPrice: z.number().describe('Example: 100.23'),
                quantity: z.number().describe('Example: 0.1'),
                ticker: z.string().describe('Example: AAPL_US_EQ'),
                timeValidity: z.enum(['DAY', 'GOOD_TILL_CANCEL']).describe('Specifies how long the order remains active:\n' +
                    'DAY: The order will automatically expire if not executed by midnight in the time zone of the instrument\'s exchange.\n' +
                    'GOOD_TILL_CANCEL: The order remains active indefinitely until it is either filled or explicitly cancelled by you.'),
            })
        },
        async ({limitPrice, quantity, ticker, timeValidity}) => {
            try {
                const order = await client.placeLimitOrder({limitPrice, quantity, ticker, timeValidity});
                return {
                    content: [{
                        type: "text",
                        text: JSON.stringify(order),
                    }]
                };
            } catch (error) {
                console.error('Error placing limit order:', error);
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