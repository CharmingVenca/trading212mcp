[**@vaclavklimes/trading212mcp**](../README.md)

***

[@vaclavklimes/trading212mcp](../README.md) / DividendItem

# Interface: DividendItem

Defined in: [types/account.ts:130](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L130)

Dividend payment details

## Properties

### amount

> **amount**: `number`

Defined in: [types/account.ts:131](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L131)

net amount of the dividend

***

### amountInEuro

> **amountInEuro**: `number`

Defined in: [types/account.ts:132](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L132)

amount of the dividend in Euro

***

### currency

> **currency**: `string`

Defined in: [types/account.ts:133](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L133)

currency of the dividend

***

### grossAmountPerShare

> **grossAmountPerShare**: `number`

Defined in: [types/account.ts:134](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L134)

gross amount per share

***

### instrument

> **instrument**: [`InstrumentInfo`](InstrumentInfo.md)

Defined in: [types/account.ts:135](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L135)

Information about the instrument the dividend is from

***

### paidOn

> **paidOn**: `string`

Defined in: [types/account.ts:136](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L136)

date the dividend was paid

***

### quantity

> **quantity**: `number`

Defined in: [types/account.ts:137](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L137)

quantity of shares that received the dividend

***

### reference

> **reference**: `string`

Defined in: [types/account.ts:138](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L138)

a reference for the dividend payment

***

### ticker

> **ticker**: `string`

Defined in: [types/account.ts:139](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L139)

ticker symbol of the instrument

***

### tickerCurrency

> **tickerCurrency**: `string`

Defined in: [types/account.ts:140](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L140)

currency of the ticker

***

### type

> **type**: [`DividendType`](../type-aliases/DividendType.md)

Defined in: [types/account.ts:141](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L141)

type of dividend
