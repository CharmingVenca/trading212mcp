[**@vaclavklimes/trading212mcp**](../README.md)

***

[@vaclavklimes/trading212mcp](../README.md) / Trading212McpServer

# Class: Trading212McpServer

Defined in: [server.ts:31](https://github.com/CharmingVenca/trading212mcp/blob/350c907373d7f425526c369053826499fd6c443a/mcp-server/src/server.ts#L31)

Encapsulates the Trading212 MCP server logic for both CLI and library use.

## Constructors

### Constructor

> **new Trading212McpServer**(`options`): `Trading212McpServer`

Defined in: [server.ts:42](https://github.com/CharmingVenca/trading212mcp/blob/350c907373d7f425526c369053826499fd6c443a/mcp-server/src/server.ts#L42)

#### Parameters

##### options

[`Trading212McpServerOptions`](../interfaces/Trading212McpServerOptions.md)

#### Returns

`Trading212McpServer`

## Methods

### startHttp()

> **startHttp**(`port?`, `host?`): `Promise`\<`void`\>

Defined in: [server.ts:87](https://github.com/CharmingVenca/trading212mcp/blob/350c907373d7f425526c369053826499fd6c443a/mcp-server/src/server.ts#L87)

Starts the server using HTTP transport.

#### Parameters

##### port?

`number` = `3000`

The port to listen on.

##### host?

`string` = `"127.0.0.1"`

The host to bind to.

#### Returns

`Promise`\<`void`\>

***

### startStdio()

> **startStdio**(): `Promise`\<`StdioServerTransport`\>

Defined in: [server.ts:76](https://github.com/CharmingVenca/trading212mcp/blob/350c907373d7f425526c369053826499fd6c443a/mcp-server/src/server.ts#L76)

Starts the server using stdio transport.

#### Returns

`Promise`\<`StdioServerTransport`\>

***

### stop()

> **stop**(): `Promise`\<`void`\>

Defined in: [server.ts:160](https://github.com/CharmingVenca/trading212mcp/blob/350c907373d7f425526c369053826499fd6c443a/mcp-server/src/server.ts#L160)

Shuts down the server and all active sessions.

#### Returns

`Promise`\<`void`\>
