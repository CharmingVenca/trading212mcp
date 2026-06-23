[**@vaclavklimes/trading212mcp**](../README.md)

***

[@vaclavklimes/trading212mcp](../README.md) / Position

# Interface: Position

Defined in: [types/account.ts:155](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L155)

Open investment position details

## Properties

### averagePricePaid

> **averagePricePaid**: `number`

Defined in: [types/account.ts:156](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L156)

average price paid for the position

***

### createdAt

> **createdAt**: `string`

Defined in: [types/account.ts:157](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L157)

timestamp when the position was created

***

### currentPrice

> **currentPrice**: `number`

Defined in: [types/account.ts:158](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L158)

current price of the instrument

***

### instrument

> **instrument**: [`InstrumentInfo`](InstrumentInfo.md)

Defined in: [types/account.ts:159](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L159)

Information about the instrument in the position

***

### quantity

> **quantity**: `number`

Defined in: [types/account.ts:160](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L160)

total quantity of the instrument held

***

### quantityAvailableForTrading

> **quantityAvailableForTrading**: `number`

Defined in: [types/account.ts:161](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L161)

quantity of the instrument available for further trading

***

### quantityInPies

> **quantityInPies**: `number`

Defined in: [types/account.ts:162](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L162)

quantity of the instrument held in pies

***

### walletImpact

> **walletImpact**: `object`

Defined in: [types/account.ts:163](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/account.ts#L163)

financial impact of this position

#### currency

> **currency**: `string`

#### currentValue

> **currentValue**: `number`

#### fxImpact

> **fxImpact**: `number`

#### totalCost

> **totalCost**: `number`

#### unrealizedProfitLoss

> **unrealizedProfitLoss**: `number`
