# Trading212 MCP Server & Library

An MCP server for the Trading212 API. It can be used both as a standalone server (via npx) or as a TypeScript library.

## Features

- **MCP Server**: Integrated resources and tools for account summaries, instruments, orders, and positions.
- **Library**: Exported `Trading212Client` and type definitions.
- **Transports**: Supports both Stdio and HTTP transports.
- **Rate Limiting**: Manages API request rate limiting using HTTP response headers.
- **Debug Logging**: Provides detailed logging for troubleshooting.
- **Health Endpoint**: HTTP `/health` endpoint to check the server's status.
- **CORS Support**: Configured for HTTP to allow cross-origin requests.
- **Shutdown**: Handles `SIGINT` and `SIGTERM` signals for server shutdown.

## Installation

```bash
npm install "@vaclavklimes/trading212mcp"
```

## CLI Usage

Run the server using `npx`:

```bash
npx trading212mcp --t212-api-key=YOUR_API_KEY --t212-secret-key=YOUR_SECRET_KEY --t212-base-url=YOUR_BASE_URL
```

### Command Line Options

- `--t212-api-key`: Your Trading212 API key.
- `--t212-secret-key`: Your Trading212 secret key.
- `--t212-base-url`: The API base URL (e.g., `https://demo.trading212.com/api/v0` or `https://live.trading212.com/api/v0`).
- `--disable-rate-limiting`: Disables rate limiting for API requests.
- `--debug`: Enables debug logging for detailed output.
- `--port`: HTTP port (defaults to 3000).

### Environment Variables

Alternatively, you can configure the server using environment variables:

- `TRADING212_API_KEY` or `T212_API_KEY_ID`: Your Trading212 API key.
- `TRADING212_SECRET_KEY` or `T212_SECRET_KEY`: Your Trading212 secret key.
- `TRADING212_BASE_URL`: The API base URL.
- `PORT`: HTTP port (defaults to 3000).

### Available Resources

The MCP server exposes the following resources:

- `getAccountSummary`: Fetches the current account summary.
- `getAllAvailableInstruments`: Retrieves a list of all available instruments.
- `getExchangesMetadata`: Gets metadata for exchanges.
- `getAllPendingOrders`: Lists all pending orders.
- `getPaidOutDividends`: Retrieves information about paid-out dividends.
- `getHistoricalOrders`: Fetches historical order data.
- `getTransactions`: Gets transaction history.
- `getPendingOrderById`: Retrieves a specific pending order by ID.
- `fetchAllOpenPositions`: Fetches all currently open positions.

### Available Tools

The MCP server provides the following tools:

- `placeLimitOrder`: Places a new limit order.
- `placeMarketOrder`: Places a new market order.
- `placeStopOrder`: Places a new stop order.
- `placeStopLimitOrder`: Places a new stop-limit order.
- `cancelPendingOrder`: Cancels a pending order.



## Library Usage

### Using the Trading212Client directly

```typescript
import { Trading212Client } from '@vaclavklimes/trading212mcp';

const client = new Trading212Client(
  'YOUR_BASE_URL',
  'your-api-key',
  'your-secret-key'
);

const summary = await client.getAccountSummary();
console.log(summary);
```

### Hosting the MCP Server programmatically

```typescript
import { Trading212Client, Trading212McpServer } from '@vaclavklimes/trading212mcp';

const client = new Trading212Client(baseUrl, apiKey, secretKey);
const mcpServer = new Trading212McpServer({
    client
});

// Start over stdio
await mcpServer.startStdio();

// OR start over HTTP
await mcpServer.startHttp(3000);
```

## Documentation

For detailed API documentation please refer to the [Detailed API Documentation](docs/README.md).

## License

MIT
