[**@vaclavklimes/trading212mcp**](../README.md)

***

[@vaclavklimes/trading212mcp](../README.md) / MarketOrderRequest

# Interface: MarketOrderRequest

Defined in: [types/orders.ts:86](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L86)

Request body for placing a market order

## Properties

### extendedHours

> **extendedHours**: `boolean`

Defined in: [types/orders.ts:87](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L87)

Boolean indicating whether the order can execute during extended hours

***

### quantity

> **quantity**: `number`

Defined in: [types/orders.ts:88](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L88)

number of shares or units to buy/sell

***

### ticker

> **ticker**: `string`

Defined in: [types/orders.ts:89](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L89)

ticker symbol of the instrument
