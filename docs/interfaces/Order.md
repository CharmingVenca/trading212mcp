[**@vaclavklimes/trading212mcp**](../README.md)

***

[@vaclavklimes/trading212mcp](../README.md) / Order

# Interface: Order

Defined in: [types/orders.ts:45](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L45)

Full details of an order

## Properties

### createdAt

> **createdAt**: `string`

Defined in: [types/orders.ts:46](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L46)

timestamp when the order was created

***

### currency

> **currency**: `string`

Defined in: [types/orders.ts:47](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L47)

currency of the order

***

### extendedHours

> **extendedHours**: `boolean`

Defined in: [types/orders.ts:48](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L48)

Indicates if the order was placed for extended hours trading

***

### filledQuantity

> **filledQuantity**: `number`

Defined in: [types/orders.ts:49](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L49)

quantity of the order that has been filled

***

### filledValue

> **filledValue**: `number`

Defined in: [types/orders.ts:50](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L50)

total value of the filled portion of the order

***

### id

> **id**: `number`

Defined in: [types/orders.ts:51](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L51)

unique identifier of the order

***

### initiatedFrom

> **initiatedFrom**: [`InitiatedFrom`](../type-aliases/InitiatedFrom.md)

Defined in: [types/orders.ts:52](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L52)

source from which the order was initiated

***

### instrument

> **instrument**: [`InstrumentInfo`](InstrumentInfo.md)

Defined in: [types/orders.ts:53](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L53)

information about the instrument of the order

***

### limitPrice

> **limitPrice**: `number`

Defined in: [types/orders.ts:54](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L54)

limit price for limit and stop-limit orders

***

### quantity

> **quantity**: `number`

Defined in: [types/orders.ts:55](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L55)

total quantity of the order

***

### side

> **side**: [`Side`](../type-aliases/Side.md)

Defined in: [types/orders.ts:56](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L56)

trade direction

***

### status

> **status**: [`OrderStatus`](../type-aliases/OrderStatus.md)

Defined in: [types/orders.ts:57](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L57)

current status of the order

***

### stopPrice

> **stopPrice**: `number`

Defined in: [types/orders.ts:58](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L58)

stop price for stop and stop-limit orders

***

### strategy

> **strategy**: [`Strategy`](../type-aliases/Strategy.md)

Defined in: [types/orders.ts:59](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L59)

trading strategy used

***

### ticker

> **ticker**: `string`

Defined in: [types/orders.ts:60](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L60)

ticker symbol of the instrument

***

### timeInForce

> **timeInForce**: [`TimeInForce`](../type-aliases/TimeInForce.md)

Defined in: [types/orders.ts:61](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L61)

time in force policy for the order

***

### type

> **type**: [`OrderType`](../type-aliases/OrderType.md)

Defined in: [types/orders.ts:62](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L62)

type of the order

***

### value

> **value**: `number`

Defined in: [types/orders.ts:63](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/orders.ts#L63)

total value of the order
