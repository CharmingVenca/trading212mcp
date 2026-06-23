import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { Trading212Client} from "../services/trading212-client";
import { z } from "zod";

/**
 * Registers the placeMarketOrder tool with the MCP server.
 */
export function registerPlaceMarketOrder(server: McpServer, client: Trading212Client) {
    server.registerTool(
        'place_market_order',
        {
            title: 'Place a Market Order',
            description: 'Creates a new Market order, which is an instruction to trade a security immediately at the next available price.\n' +
                'To place a buy order, use a positive quantity.\n' +
                'To place a sell order, use a negative quantity.\n' +
                'extendedHours: Set to true to allow the order to be filled outside of the standard trading session.\n' +
                'If placed when the market is closed, the order will be queued to execute when the market next opens.\n',
            annotations: {
                readOnlyHint: false,
                destructiveHint: true,
                idempotentHint: false,
                openWorldHint: true,
            },
            inputSchema: z.object({
                extendedHours: z.boolean().optional().default(false),
                quantity: z.number().describe('Example: 0.1'),
                ticker: z.string().describe('Example: AAPL_US_EQ'),
            })
        },
        async ({extendedHours, quantity, ticker}) => {
            try {
                const order = await client.placeMarketOrder({extendedHours: extendedHours, quantity, ticker});
                return {
                    content: [{
                        type: "text",
                        text: JSON.stringify(order),
                    }]
                };
            } catch (error) {
                console.error('Error placing market order:', error);
                return {
                    content: [{
                        type: "text",
                        text: "Error placing market order: " + (error as Error).message
                    }]
                }
            }
        }
    );
}
