[**@vaclavklimes/trading212mcp**](../README.md)

***

[@vaclavklimes/trading212mcp](../README.md) / AccountSummary

# Interface: AccountSummary

Defined in: [types/account.ts:180](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L180)

Overall account financial summary

## Properties

### cash

> **cash**: `object`

Defined in: [types/account.ts:181](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L181)

Details about the cash in the account

#### availableToTrade

> **availableToTrade**: `number`

#### inPies

> **inPies**: `number`

#### reservedForOrders

> **reservedForOrders**: `number`

***

### currency

> **currency**: `string`

Defined in: [types/account.ts:186](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L186)

currency of the account

***

### id

> **id**: `number`

Defined in: [types/account.ts:187](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L187)

unique identifier of the account

***

### investments

> **investments**: `object`

Defined in: [types/account.ts:188](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L188)

Details about the investments in the account

#### currentValue

> **currentValue**: `number`

#### realizedProfitLoss

> **realizedProfitLoss**: `number`

#### totalCost

> **totalCost**: `number`

#### unrealizedProfitLoss

> **unrealizedProfitLoss**: `number`

***

### totalValue

> **totalValue**: `number`

Defined in: [types/account.ts:194](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L194)

total value of the account
