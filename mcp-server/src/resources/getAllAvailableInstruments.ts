import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { Trading212Client } from "../services/trading212-client.js";
import { z } from "zod";
import { Instrument } from "../types";

/**
 * Registers the getAllAvailableInstruments tool with the MCP server.
 */
export function registerGetAllAvailableInstruments(server: McpServer, client: Trading212Client) {
    server.registerTool(
        'get_all_available_instruments',
        {
            title: 'Get all available instruments',
            description: 'Retrieves all accessible instruments. Data is refreshed every 10 minutes. Supports optional filtering by ticker or name.',
            annotations: {
                readOnlyHint: true,
                destructiveHint: false,
                idempotentHint: true,
                openWorldHint: true,
            },
            inputSchema: z.object({
                query: z.string().describe('Search query for ticker or name (e.g. "AAPL" or "Apple")'),
            }),
        },
        async ({query}) => {
            try {
                let instruments = await client.getAllAvailableInstruments();
                
                if (query) {
                    const lowerQuery = query.toLowerCase();
                    instruments = instruments.filter((i: Instrument) => 
                        i.ticker.toLowerCase().includes(lowerQuery) || 
                        i.name.toLowerCase().includes(lowerQuery) ||
                        i.shortName.toLowerCase().includes(lowerQuery)
                    );
                }

                return {
                    content: [{
                        type: "text",
                        text: JSON.stringify(instruments)
                    }]
                }
            } catch (error) {
                console.error('Error fetching all available instruments:', error);
                return {
                    content: [{
                        type: "text",
                        text: "Error fetching all available instruments: " + (error as Error).message
                    }]
                }
            }
        }
    );
}