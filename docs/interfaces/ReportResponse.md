[**@vaclavklimes/trading212mcp**](../README.md)

***

[@vaclavklimes/trading212mcp](../README.md) / ReportResponse

# Interface: ReportResponse

Defined in: [types/reports.ts:41](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/reports.ts#L41)

Metadata for a generated or pending report

## Properties

### dataIncluded

> **dataIncluded**: [`ReportDataIncluded`](ReportDataIncluded.md)

Defined in: [types/reports.ts:42](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/reports.ts#L42)

the data categories included in the report

***

### downloadLink?

> `optional` **downloadLink?**: `string`

Defined in: [types/reports.ts:43](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/reports.ts#L43)

optional, the link to download the report if it's finished

***

### reportId

> **reportId**: `number`

Defined in: [types/reports.ts:44](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/reports.ts#L44)

unique identifier for the report

***

### status

> **status**: [`ExportStatus`](../type-aliases/ExportStatus.md)

Defined in: [types/reports.ts:45](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/reports.ts#L45)

current status of the report generation

***

### timeFrom

> **timeFrom**: `string`

Defined in: [types/reports.ts:46](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/reports.ts#L46)

start time for the report data

***

### timeTo

> **timeTo**: `string`

Defined in: [types/reports.ts:47](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/reports.ts#L47)

end time for the report data
