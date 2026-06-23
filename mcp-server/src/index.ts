/**
 * Trading212 MCP Server and Library
 * 
 * This file serves as the library entry point, exporting the Trading212 client
 * and all associated types for programmatic use.
 */

export { Trading212Client } from "./services/trading212-client.js";
export { Trading212McpServer } from "./server.js";
export type { Trading212McpServerOptions } from "./server.js";
export * from "./types/index.js";
