[**@vaclavklimes/trading212mcp**](../README.md)

***

[@vaclavklimes/trading212mcp](../README.md) / TransactionItem

# Interface: TransactionItem

Defined in: [types/account.ts:108](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L108)

Deposit, withdrawal, or fee transaction

## Properties

### amount

> **amount**: `number`

Defined in: [types/account.ts:109](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L109)

amount of the transaction

***

### currency

> **currency**: `string`

Defined in: [types/account.ts:110](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L110)

currency of the transaction

***

### dateTime

> **dateTime**: `string`

Defined in: [types/account.ts:111](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L111)

date and time of the transaction

***

### reference

> **reference**: `string`

Defined in: [types/account.ts:112](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L112)

A reference string for the transaction

***

### type

> **type**: `"WITHDRAW"` \| `"DEPOSIT"` \| `"FEE"` \| `"TRANSFER"`

Defined in: [types/account.ts:113](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L113)

type of the transaction
