#!/usr/bin/env node
import { Trading212Client } from './services/trading212-client.js';
import { Trading212McpServer } from './server.js';
import pkg from '../package.json' with { type: 'json' };


/**
 * Main entry point to start the MCP server over stdio and HTTP.
 */
async function main() {
    const apiKeyArg = process.argv.find(arg => arg.startsWith('--t212-api-key='));
    const secretKeyArg = process.argv.find(arg => arg.startsWith('--t212-secret-key='));
    const baseUrlArg = process.argv.find(arg => arg.startsWith('--t212-base-url='));

    console.error('\[mcp\] Starting Trading212 MCP Server v' + pkg.version);

    const apiKey = apiKeyArg?.split('=')[1] ?? process.env.TRADING212_API_KEY ?? process.env.T212_API_KEY_ID;
    const secretKey = secretKeyArg?.split('=')[1] ?? process.env.TRADING212_SECRET_KEY ?? process.env.T212_SECRET_KEY;
    const baseUrl = baseUrlArg?.split('=')[1] ?? process.env.TRADING212_BASE_URL;

    if (!apiKey) {
        throw new Error('Trading212 API Key is required (e.g., via --t212-api-key=YOUR_API_KEY or TRADING212_API_KEY env var)');
    }
    if (!secretKey) {
        throw new Error('Trading212 Secret Key is required (e.g., via --t212-secret-key=YOUR_SECRET_KEY or TRADING212_SECRET_KEY env var)');
    }
    if (!baseUrl) {
        throw new Error('Trading212 Base URL is required (e.g., via --t212-base-url=YOUR_BASE_URL or TRADING212_BASE_URL env var)');
    }

    console.error('\[mcp\] Base URL: ' + baseUrl);

    const client = new Trading212Client(baseUrl, apiKey, secretKey);
    const mcpServer = new Trading212McpServer({
        name: pkg.name,
        version: pkg.version,
        client
    });

    // Start Stdio
    console.error('\[mcp\] Connecting over stdio...');
    await mcpServer.startStdio();
    console.error('\[mcp\] stdio ready');

    // Start HTTP
    const portArg = process.argv.find(arg => arg.startsWith('--port='));
    const port = parseInt(portArg?.split('=')[1] ?? process.env.PORT ?? '3000', 10);

    console.error('\[mcp\] Starting HTTP server on port ' + port + '...');
    await mcpServer.startHttp(port);
    console.error('\[mcp\] HTTP listening on http://127.0.0.1:' + port + '/mcp');

    // Graceful Shutdown
    const shutdown = async (signal: string) => {
        console.error(`[mcp] Received ${signal}. Starting shutdown...`);
        await mcpServer.stop();
        console.error(`[mcp] Shutdown complete. Exiting.`);
        process.exit(0);
    };

    process.on('SIGINT', () => shutdown('SIGINT'));
    process.on('SIGTERM', () => shutdown('SIGTERM'));
}

main().catch(err => {
    console.error('\[mcp\] Fatal:', err);
    process.exit(1);
});
