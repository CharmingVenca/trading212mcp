[**@vaclavklimes/trading212mcp**](../README.md)

***

[@vaclavklimes/trading212mcp](../README.md) / LimitOrderRequest

# Interface: LimitOrderRequest

Defined in: [types/orders.ts:73](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L73)

Request body for placing a limit order

## Properties

### limitPrice

> **limitPrice**: `number`

Defined in: [types/orders.ts:74](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L74)

price at which the order should be executed or better

***

### quantity

> **quantity**: `number`

Defined in: [types/orders.ts:75](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L75)

number of shares or units to buy/sell

***

### ticker

> **ticker**: `string`

Defined in: [types/orders.ts:76](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L76)

ticker symbol of the instrument

***

### timeValidity

> **timeValidity**: [`TimeInForce`](../type-aliases/TimeInForce.md)

Defined in: [types/orders.ts:77](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L77)

time in force policy for the order
