[**@vaclavklimes/trading212mcp**](../README.md)

***

[@vaclavklimes/trading212mcp](../README.md) / StopLimitOrderRequest

# Interface: StopLimitOrderRequest

Defined in: [types/orders.ts:114](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L114)

Request body for placing a stop-limit order

## Properties

### limitPrice

> **limitPrice**: `number`

Defined in: [types/orders.ts:115](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L115)

limit price for the order once the stop price is triggered

***

### quantity

> **quantity**: `number`

Defined in: [types/orders.ts:116](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L116)

number of shares or units to buy/sell

***

### stopPrice

> **stopPrice**: `number`

Defined in: [types/orders.ts:117](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L117)

price at which the stop-limit order is activated

***

### ticker

> **ticker**: `string`

Defined in: [types/orders.ts:118](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L118)

ticker symbol of the instrument

***

### timeValidity

> **timeValidity**: [`TimeInForce`](../type-aliases/TimeInForce.md)

Defined in: [types/orders.ts:119](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L119)

time in force policy for the order
