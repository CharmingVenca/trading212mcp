# Trading212 MCP Server & Library

An MCP server for the Trading212 API. It can be used both as a standalone server (via npx) or as a TypeScript library.

## Features

- **MCP Server**: Integrated resources and tools for account summaries, instruments, orders, and positions.
- **Library**: Exported `Trading212Client` and type definitions for direct API integration.
- **Transports**: Supports both Stdio and HTTP transports.

## Installation

```bash
npm install "@vaclavklimes/trading212mcp"
```

## CLI Usage

Run the server using `npx`:

```bash
npx trading212mcp --t212-api-key=YOUR_API_KEY --t212-secret-key=YOUR_SECRET_KEY --t212-base-url=https://demo.trading212.com
```

### Command Line Options

- `--t212-api-key`: Your Trading212 API key.
- `--t212-secret-key`: Your Trading212 secret key.
- `--t212-base-url`: The API base URL (defaults to demo environment if configured).
- `--port`: HTTP port (defaults to 3000).

## Library Usage

### Using the Trading212Client directly

```typescript
import { Trading212Client } from '@vaclavklimes/trading212mcp';

const client = new Trading212Client(
  'https://demo.trading212.com',
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

## License

ISC
