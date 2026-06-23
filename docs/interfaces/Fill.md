[**@vaclavklimes/trading212mcp**](../README.md)

***

[@vaclavklimes/trading212mcp](../README.md) / Fill

# Interface: Fill

Defined in: [types/account.ts:80](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L80)

Details of a filled order

## Properties

### filledAt

> **filledAt**: `string`

Defined in: [types/account.ts:81](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L81)

timestamp when the order was filled

***

### id

> **id**: `number`

Defined in: [types/account.ts:82](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L82)

unique identifier of the fill

***

### price

> **price**: `number`

Defined in: [types/account.ts:83](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L83)

price at which the order was filled

***

### quantity

> **quantity**: `number`

Defined in: [types/account.ts:84](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L84)

quantity filled

***

### tradingMethod

> **tradingMethod**: [`TradingMethod`](../type-aliases/TradingMethod.md)

Defined in: [types/account.ts:85](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L85)

trading method used for the fill

***

### type

> **type**: [`FillType`](../type-aliases/FillType.md)

Defined in: [types/account.ts:86](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L86)

type of the fill

***

### walletImpact

> **walletImpact**: [`WalletImpact`](WalletImpact.md)

Defined in: [types/account.ts:87](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L87)

impact of this fill on the wallet
