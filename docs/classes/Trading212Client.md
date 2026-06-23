[**@vaclavklimes/trading212mcp**](../README.md)

***

[@vaclavklimes/trading212mcp](../README.md) / Trading212Client

# Class: Trading212Client

Defined in: [services/trading212-client.ts:22](https://github.com/CharmingVenca/trading212mcp/blob/350c907373d7f425526c369053826499fd6c443a/mcp-server/src/services/trading212-client.ts#L22)

Trading212 MCP Server and Library

This file serves as the library entry point, exporting the Trading212 client
and all associated types for programmatic use.

## Constructors

### Constructor

> **new Trading212Client**(`baseUrl`, `apiKey`, `apiSecret`): `Trading212Client`

Defined in: [services/trading212-client.ts:29](https://github.com/CharmingVenca/trading212mcp/blob/350c907373d7f425526c369053826499fd6c443a/mcp-server/src/services/trading212-client.ts#L29)

#### Parameters

##### baseUrl

`string`

##### apiKey

`string`

##### apiSecret

`string`

#### Returns

`Trading212Client`

## Methods

### cancelPendingOrder()

> **cancelPendingOrder**(`orderId`): `Promise`\<`void`\>

Defined in: [services/trading212-client.ts:221](https://github.com/CharmingVenca/trading212mcp/blob/350c907373d7f425526c369053826499fd6c443a/mcp-server/src/services/trading212-client.ts#L221)

Cancels a specific pending order.

#### Parameters

##### orderId

`string`

#### Returns

`Promise`\<`void`\>

***

### fetchAllOpenPositions()

> **fetchAllOpenPositions**(`ticker?`): `Promise`\<[`Positions`](../type-aliases/Positions.md)\>

Defined in: [services/trading212-client.ts:179](https://github.com/CharmingVenca/trading212mcp/blob/350c907373d7f425526c369053826499fd6c443a/mcp-server/src/services/trading212-client.ts#L179)

Fetches all open positions across all pages.

#### Parameters

##### ticker?

`string`

#### Returns

`Promise`\<[`Positions`](../type-aliases/Positions.md)\>

***

### getAccountSummary()

> **getAccountSummary**(): `Promise`\<[`AccountSummary`](../interfaces/AccountSummary.md)\>

Defined in: [services/trading212-client.ts:83](https://github.com/CharmingVenca/trading212mcp/blob/350c907373d7f425526c369053826499fd6c443a/mcp-server/src/services/trading212-client.ts#L83)

#### Returns

`Promise`\<[`AccountSummary`](../interfaces/AccountSummary.md)\>

***

### getAllAvailableInstruments()

> **getAllAvailableInstruments**(): `Promise`\<[`Instruments`](../type-aliases/Instruments.md)\>

Defined in: [services/trading212-client.ts:87](https://github.com/CharmingVenca/trading212mcp/blob/350c907373d7f425526c369053826499fd6c443a/mcp-server/src/services/trading212-client.ts#L87)

#### Returns

`Promise`\<[`Instruments`](../type-aliases/Instruments.md)\>

***

### getAllPendingOrders()

> **getAllPendingOrders**(): `Promise`\<[`PendingOrders`](../type-aliases/PendingOrders.md)\>

Defined in: [services/trading212-client.ts:79](https://github.com/CharmingVenca/trading212mcp/blob/350c907373d7f425526c369053826499fd6c443a/mcp-server/src/services/trading212-client.ts#L79)

#### Returns

`Promise`\<[`PendingOrders`](../type-aliases/PendingOrders.md)\>

***

### getDividends()

> **getDividends**(`cursor?`, `ticker?`, `limit?`): `Promise`\<[`PaginatedResponse`](../interfaces/PaginatedResponse.md)\<[`DividendItem`](../interfaces/DividendItem.md)\>\>

Defined in: [services/trading212-client.ts:126](https://github.com/CharmingVenca/trading212mcp/blob/350c907373d7f425526c369053826499fd6c443a/mcp-server/src/services/trading212-client.ts#L126)

Retrieves a paginated list of paid-out dividends.

#### Parameters

##### cursor?

`number`

##### ticker?

`string`

##### limit?

`number`

#### Returns

`Promise`\<[`PaginatedResponse`](../interfaces/PaginatedResponse.md)\<[`DividendItem`](../interfaces/DividendItem.md)\>\>

***

### getExchangesMetadata()

> **getExchangesMetadata**(): `Promise`\<[`Exchanges`](../type-aliases/Exchanges.md)\>

Defined in: [services/trading212-client.ts:103](https://github.com/CharmingVenca/trading212mcp/blob/350c907373d7f425526c369053826499fd6c443a/mcp-server/src/services/trading212-client.ts#L103)

Retrieves all exchange metadata with caching.

#### Returns

`Promise`\<[`Exchanges`](../type-aliases/Exchanges.md)\>

***

### getHistoricalOrders()

> **getHistoricalOrders**(`cursor?`, `ticker?`, `limit?`): `Promise`\<[`PaginatedResponse`](../interfaces/PaginatedResponse.md)\<[`HistoricalOrder`](../interfaces/HistoricalOrder.md)\>\>

Defined in: [services/trading212-client.ts:139](https://github.com/CharmingVenca/trading212mcp/blob/350c907373d7f425526c369053826499fd6c443a/mcp-server/src/services/trading212-client.ts#L139)

Retrieves a paginated list of historical orders.

#### Parameters

##### cursor?

`number`

##### ticker?

`string`

##### limit?

`number`

#### Returns

`Promise`\<[`PaginatedResponse`](../interfaces/PaginatedResponse.md)\<[`HistoricalOrder`](../interfaces/HistoricalOrder.md)\>\>

***

### getPendingOrderById()

> **getPendingOrderById**(`orderId`): `Promise`\<[`Order`](../interfaces/Order.md)\>

Defined in: [services/trading212-client.ts:119](https://github.com/CharmingVenca/trading212mcp/blob/350c907373d7f425526c369053826499fd6c443a/mcp-server/src/services/trading212-client.ts#L119)

Retrieves a specific pending order by ID.

#### Parameters

##### orderId

`string`

#### Returns

`Promise`\<[`Order`](../interfaces/Order.md)\>

***

### getTransactions()

> **getTransactions**(`cursor?`, `time?`, `limit?`): `Promise`\<[`PaginatedResponse`](../interfaces/PaginatedResponse.md)\<`any`\>\>

Defined in: [services/trading212-client.ts:152](https://github.com/CharmingVenca/trading212mcp/blob/350c907373d7f425526c369053826499fd6c443a/mcp-server/src/services/trading212-client.ts#L152)

Retrieves a paginated list of account transactions.

#### Parameters

##### cursor?

`string`

##### time?

`string`

##### limit?

`number`

#### Returns

`Promise`\<[`PaginatedResponse`](../interfaces/PaginatedResponse.md)\<`any`\>\>

***

### listReports()

> **listReports**(): `Promise`\<[`ReportResponse`](../interfaces/ReportResponse.md)[]\>

Defined in: [services/trading212-client.ts:165](https://github.com/CharmingVenca/trading212mcp/blob/350c907373d7f425526c369053826499fd6c443a/mcp-server/src/services/trading212-client.ts#L165)

Lists all available account reports.

#### Returns

`Promise`\<[`ReportResponse`](../interfaces/ReportResponse.md)[]\>

***

### placeLimitOrder()

> **placeLimitOrder**(`order`): `Promise`\<[`Order`](../interfaces/Order.md)\>

Defined in: [services/trading212-client.ts:191](https://github.com/CharmingVenca/trading212mcp/blob/350c907373d7f425526c369053826499fd6c443a/mcp-server/src/services/trading212-client.ts#L191)

Places a new limit order.

#### Parameters

##### order

[`LimitOrderRequest`](../interfaces/LimitOrderRequest.md)

#### Returns

`Promise`\<[`Order`](../interfaces/Order.md)\>

***

### placeMarketOrder()

> **placeMarketOrder**(`order`): `Promise`\<[`Order`](../interfaces/Order.md)\>

Defined in: [services/trading212-client.ts:198](https://github.com/CharmingVenca/trading212mcp/blob/350c907373d7f425526c369053826499fd6c443a/mcp-server/src/services/trading212-client.ts#L198)

Places a new market order.

#### Parameters

##### order

[`MarketOrderRequest`](../interfaces/MarketOrderRequest.md)

#### Returns

`Promise`\<[`Order`](../interfaces/Order.md)\>

***

### placeStopLimitOrder()

> **placeStopLimitOrder**(`order`): `Promise`\<[`Order`](../interfaces/Order.md)\>

Defined in: [services/trading212-client.ts:212](https://github.com/CharmingVenca/trading212mcp/blob/350c907373d7f425526c369053826499fd6c443a/mcp-server/src/services/trading212-client.ts#L212)

Places a new stop-limit order.

#### Parameters

##### order

[`StopLimitOrderRequest`](../interfaces/StopLimitOrderRequest.md)

#### Returns

`Promise`\<[`Order`](../interfaces/Order.md)\>

***

### placeStopOrder()

> **placeStopOrder**(`order`): `Promise`\<[`Order`](../interfaces/Order.md)\>

Defined in: [services/trading212-client.ts:205](https://github.com/CharmingVenca/trading212mcp/blob/350c907373d7f425526c369053826499fd6c443a/mcp-server/src/services/trading212-client.ts#L205)

Places a new stop order.

#### Parameters

##### order

[`StopOrderRequest`](../interfaces/StopOrderRequest.md)

#### Returns

`Promise`\<[`Order`](../interfaces/Order.md)\>

***

### requestReport()

> **requestReport**(`report`): `Promise`\<[`RequestReportResponse`](../interfaces/RequestReportResponse.md)\>

Defined in: [services/trading212-client.ts:172](https://github.com/CharmingVenca/trading212mcp/blob/350c907373d7f425526c369053826499fd6c443a/mcp-server/src/services/trading212-client.ts#L172)

Requests the generation of a new account report.

#### Parameters

##### report

[`ReportRequest`](../interfaces/ReportRequest.md)

#### Returns

`Promise`\<[`RequestReportResponse`](../interfaces/RequestReportResponse.md)\>
