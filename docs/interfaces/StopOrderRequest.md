[**@vaclavklimes/trading212mcp**](../README.md)

***

[@vaclavklimes/trading212mcp](../README.md) / StopOrderRequest

# Interface: StopOrderRequest

Defined in: [types/orders.ts:99](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L99)

Request body for placing a stop order

## Properties

### quantity

> **quantity**: `number`

Defined in: [types/orders.ts:100](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L100)

number of shares or units to buy/sell

***

### stopPrice

> **stopPrice**: `number`

Defined in: [types/orders.ts:101](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L101)

price at which the stop order becomes a market order

***

### ticker

> **ticker**: `string`

Defined in: [types/orders.ts:102](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L102)

ticker symbol of the instrument

***

### timeValidity

> **timeValidity**: [`TimeInForce`](../type-aliases/TimeInForce.md)

Defined in: [types/orders.ts:103](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L103)

time in force policy for the order
