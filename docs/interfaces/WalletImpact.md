[**@vaclavklimes/trading212mcp**](../README.md)

***

[@vaclavklimes/trading212mcp](../README.md) / WalletImpact

# Interface: WalletImpact

Defined in: [types/account.ts:62](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L62)

Impact of a transaction on the wallet balance

## Properties

### currency

> **currency**: `string`

Defined in: [types/account.ts:63](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L63)

currency of the wallet impact

***

### fxRate

> **fxRate**: `number`

Defined in: [types/account.ts:64](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L64)

foreign exchange rate at the time of impact

***

### netValue

> **netValue**: `number`

Defined in: [types/account.ts:65](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L65)

net value of the impact

***

### realisedProfitLoss

> **realisedProfitLoss**: `number`

Defined in: [types/account.ts:66](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L66)

realised profit or loss from the impact

***

### taxes

> **taxes**: [`Tax`](Tax.md)[]

Defined in: [types/account.ts:67](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L67)

An array of taxes applied to the impact
