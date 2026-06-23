[**@vaclavklimes/trading212mcp**](../README.md)

***

[@vaclavklimes/trading212mcp](../README.md) / ReportRequest

# Interface: ReportRequest

Defined in: [types/reports.ts:26](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/reports.ts#L26)

Parameters for requesting a new report

## Properties

### dataIncluded

> **dataIncluded**: [`ReportDataIncluded`](ReportDataIncluded.md)

Defined in: [types/reports.ts:27](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/reports.ts#L27)

Specifies which data categories to include in the report

***

### timeFrom

> **timeFrom**: `string`

Defined in: [types/reports.ts:28](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/reports.ts#L28)

start time for the report data in ISO 8601 format

***

### timeTo

> **timeTo**: `string`

Defined in: [types/reports.ts:29](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/reports.ts#L29)

end time for the report data in ISO 8601 format
