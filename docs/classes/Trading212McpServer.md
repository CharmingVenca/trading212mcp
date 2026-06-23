[**@vaclavklimes/trading212mcp**](../README.md)

***

[@vaclavklimes/trading212mcp](../README.md) / Trading212McpServer

# Class: Trading212McpServer

Defined in: [server.ts:35](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/server.ts#L35)

Encapsulates the Trading212 MCP server logic

## Constructors

### Constructor

> **new Trading212McpServer**(`options`): `Trading212McpServer`

Defined in: [server.ts:50](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/server.ts#L50)

Initializes a new instance of the Trading212McpServer

#### Parameters

##### options

[`Trading212McpServerOptions`](../interfaces/Trading212McpServerOptions.md)

Configuration options for the server, including the Trading212Client instance

#### Returns

`Trading212McpServer`

## Methods

### startHttp()

> **startHttp**(`port?`, `host?`): `Promise`\<`void`\>

Defined in: [server.ts:105](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/server.ts#L105)

Starts the server using HTTP transport
Binds the server to a specified port and host, handling incoming HTTP requests

#### Parameters

##### port?

`number` = `3000`

Port to listen on, defaults to 3000

##### host?

`string` = `"127.0.0.1"`

Host to bind to, defaults to 127.0.0.1

#### Returns

`Promise`\<`void`\>

A promise that resolves when the HTTP server is listening

***

### startStdio()

> **startStdio**(): `Promise`\<`StdioServerTransport`\>

Defined in: [server.ts:92](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/server.ts#L92)

Starts the server using stdio transport
Establishes a connection to the MCP server with I/O streams

#### Returns

`Promise`\<`StdioServerTransport`\>

A promise that resolves with the StdioServerTransport instance

***

### stop()

> **stop**(): `Promise`\<`void`\>

Defined in: [server.ts:179](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/server.ts#L179)

Shuts down the server and all active sessions

#### Returns

`Promise`\<`void`\>

A promise that resolves when all shutdown operations are complete
