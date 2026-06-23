[**@vaclavklimes/trading212mcp**](../README.md)

***

[@vaclavklimes/trading212mcp](../README.md) / Trading212Client

# Class: Trading212Client

Defined in: [services/trading212-client.ts:27](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/services/trading212-client.ts#L27)

Client for interacting with the Trading212 API
Provides methods to fetch account information, manage orders, and retrieve historical data

## Constructors

### Constructor

> **new Trading212Client**(`baseUrl`, `apiKey`, `apiSecret`, `disableRateLimiting?`, `debug?`): `Trading212Client`

Defined in: [services/trading212-client.ts:42](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/services/trading212-client.ts#L42)

#### Parameters

##### baseUrl

`string`

base URL for the API

##### apiKey

`string`

API key for authentication

##### apiSecret

`string`

API secret for authentication

##### disableRateLimiting?

`boolean` = `false`

Optional, if true -> disables API rate limiting. Defaults to false.

##### debug?

`boolean` = `false`

Optional, if true -> enables debug logging. Defaults to false.

#### Returns

`Trading212Client`

## Methods

### cancelPendingOrder()

> **cancelPendingOrder**(`orderId`): `Promise`\<`void`\>

Defined in: [services/trading212-client.ts:307](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/services/trading212-client.ts#L307)

Cancels a specific pending order

#### Parameters

##### orderId

`string`

The ID of the order to cancel

#### Returns

`Promise`\<`void`\>

A promise that resolves when the order has been successfully canceled

***

### fetchAllOpenPositions()

> **fetchAllOpenPositions**(`ticker?`): `Promise`\<[`Positions`](../type-aliases/Positions.md)\>

Defined in: [services/trading212-client.ts:255](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/services/trading212-client.ts#L255)

Fetches all open positions across all pages

#### Parameters

##### ticker?

`string`

Optional. Filters positions by a specific ticker symbol

#### Returns

`Promise`\<[`Positions`](../type-aliases/Positions.md)\>

A promise that resolves with an array of open positions

***

### getAccountSummary()

> **getAccountSummary**(): `Promise`\<[`AccountSummary`](../interfaces/AccountSummary.md)\>

Defined in: [services/trading212-client.ts:135](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/services/trading212-client.ts#L135)

Retrieves the summary of the trading account

#### Returns

`Promise`\<[`AccountSummary`](../interfaces/AccountSummary.md)\>

A promise that resolves with the account summary

***

### getAllAvailableInstruments()

> **getAllAvailableInstruments**(): `Promise`\<[`Instruments`](../type-aliases/Instruments.md)\>

Defined in: [services/trading212-client.ts:143](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/services/trading212-client.ts#L143)

Retrieves all available instruments with caching

#### Returns

`Promise`\<[`Instruments`](../type-aliases/Instruments.md)\>

A promise that resolves with an array of available instruments

***

### getAllPendingOrders()

> **getAllPendingOrders**(): `Promise`\<[`PendingOrders`](../type-aliases/PendingOrders.md)\>

Defined in: [services/trading212-client.ts:127](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/services/trading212-client.ts#L127)

Retrieves all pending orders for the account

#### Returns

`Promise`\<[`PendingOrders`](../type-aliases/PendingOrders.md)\>

A promise that resolves with an array of pending orders

***

### getDividends()

> **getDividends**(`cursor?`, `ticker?`, `limit?`): `Promise`\<[`PaginatedResponse`](../interfaces/PaginatedResponse.md)\<[`DividendItem`](../interfaces/DividendItem.md)\>\>

Defined in: [services/trading212-client.ts:189](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/services/trading212-client.ts#L189)

Retrieves a paginated list of paid-out dividends

#### Parameters

##### cursor?

`number`

Optional, used for pagination to indicate where to start fetching

##### ticker?

`string`

Optional, filters dividends by a ticker

##### limit?

`number`

Optional, the maximum number of dividends to return. Defaults to a server-side value if not specified

#### Returns

`Promise`\<[`PaginatedResponse`](../interfaces/PaginatedResponse.md)\<[`DividendItem`](../interfaces/DividendItem.md)\>\>

A promise that resolves with a paginated response containing dividend items

***

### getExchangesMetadata()

> **getExchangesMetadata**(): `Promise`\<[`Exchanges`](../type-aliases/Exchanges.md)\>

Defined in: [services/trading212-client.ts:160](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/services/trading212-client.ts#L160)

Retrieves all exchange metadata

#### Returns

`Promise`\<[`Exchanges`](../type-aliases/Exchanges.md)\>

A promise that resolves with an object containing exchange metadata

***

### getHistoricalOrders()

> **getHistoricalOrders**(`cursor?`, `ticker?`, `limit?`): `Promise`\<[`PaginatedResponse`](../interfaces/PaginatedResponse.md)\<[`HistoricalOrder`](../interfaces/HistoricalOrder.md)\>\>

Defined in: [services/trading212-client.ts:206](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/services/trading212-client.ts#L206)

Retrieves a paginated list of historical orders

#### Parameters

##### cursor?

`number`

Optional, used for pagination to indicate where to start fetching

##### ticker?

`string`

Optional, filters historical orders by a specific ticker symbol

##### limit?

`number`

Optional, the maximum number of historical orders to return. Defaults to a server-side value if not specified

#### Returns

`Promise`\<[`PaginatedResponse`](../interfaces/PaginatedResponse.md)\<[`HistoricalOrder`](../interfaces/HistoricalOrder.md)\>\>

A promise that resolves with a paginated response containing historical order items

***

### getPendingOrderById()

> **getPendingOrderById**(`orderId`): `Promise`\<[`Order`](../interfaces/Order.md)\>

Defined in: [services/trading212-client.ts:178](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/services/trading212-client.ts#L178)

Retrieves a specific pending order by ID

#### Parameters

##### orderId

`string`

The ID of the order to retrieve

#### Returns

`Promise`\<[`Order`](../interfaces/Order.md)\>

A promise that resolves with the order details

***

### getTransactions()

> **getTransactions**(`cursor?`, `time?`, `limit?`): `Promise`\<[`PaginatedResponse`](../interfaces/PaginatedResponse.md)\<`any`\>\>

Defined in: [services/trading212-client.ts:223](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/services/trading212-client.ts#L223)

Retrieves a paginated list of account transactions

#### Parameters

##### cursor?

`string`

Optional, used for pagination to indicate where to start fetching

##### time?

`string`

Optional, filters transactions by time

##### limit?

`number`

Optional, the maximum number of transactions to return. Defaults to a server-side value if not specified

#### Returns

`Promise`\<[`PaginatedResponse`](../interfaces/PaginatedResponse.md)\<`any`\>\>

A promise that resolves with a paginated response containing transaction items

***

### listReports()

> **listReports**(): `Promise`\<[`ReportResponse`](../interfaces/ReportResponse.md)[]\>

Defined in: [services/trading212-client.ts:237](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/services/trading212-client.ts#L237)

Lists all available account reports

#### Returns

`Promise`\<[`ReportResponse`](../interfaces/ReportResponse.md)[]\>

A promise that resolves with an array of report responses

***

### placeLimitOrder()

> **placeLimitOrder**(`order`): `Promise`\<[`Order`](../interfaces/Order.md)\>

Defined in: [services/trading212-client.ts:269](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/services/trading212-client.ts#L269)

Places a new limit order

#### Parameters

##### order

[`LimitOrderRequest`](../interfaces/LimitOrderRequest.md)

The limit order request details

#### Returns

`Promise`\<[`Order`](../interfaces/Order.md)\>

A promise that resolves with the details of the placed order

***

### placeMarketOrder()

> **placeMarketOrder**(`order`): `Promise`\<[`Order`](../interfaces/Order.md)\>

Defined in: [services/trading212-client.ts:278](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/services/trading212-client.ts#L278)

Places a new market order

#### Parameters

##### order

[`MarketOrderRequest`](../interfaces/MarketOrderRequest.md)

The market order request details

#### Returns

`Promise`\<[`Order`](../interfaces/Order.md)\>

A promise that resolves with the details of the placed order

***

### placeStopLimitOrder()

> **placeStopLimitOrder**(`order`): `Promise`\<[`Order`](../interfaces/Order.md)\>

Defined in: [services/trading212-client.ts:296](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/services/trading212-client.ts#L296)

Places a new stop-limit order

#### Parameters

##### order

[`StopLimitOrderRequest`](../interfaces/StopLimitOrderRequest.md)

The stop-limit order request details

#### Returns

`Promise`\<[`Order`](../interfaces/Order.md)\>

A promise that resolves with the details of the placed order

***

### placeStopOrder()

> **placeStopOrder**(`order`): `Promise`\<[`Order`](../interfaces/Order.md)\>

Defined in: [services/trading212-client.ts:287](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/services/trading212-client.ts#L287)

Places a new stop order

#### Parameters

##### order

[`StopOrderRequest`](../interfaces/StopOrderRequest.md)

The stop order request details

#### Returns

`Promise`\<[`Order`](../interfaces/Order.md)\>

A promise that resolves with the details of the placed order

***

### requestReport()

> **requestReport**(`report`): `Promise`\<[`RequestReportResponse`](../interfaces/RequestReportResponse.md)\>

Defined in: [services/trading212-client.ts:246](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/services/trading212-client.ts#L246)

Requests the generation of a new account report

#### Parameters

##### report

[`ReportRequest`](../interfaces/ReportRequest.md)

The report request details

#### Returns

`Promise`\<[`RequestReportResponse`](../interfaces/RequestReportResponse.md)\>

A promise that resolves with the report request response
