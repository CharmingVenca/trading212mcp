[**@vaclavklimes/trading212mcp**](../README.md)

***

[@vaclavklimes/trading212mcp](../README.md) / PaginatedResponse

# Interface: PaginatedResponse\<T\>

Defined in: [types/common.ts:47](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/common.ts#L47)

Generic paginated API response

## Type Parameters

### T

`T`

## Properties

### items

> **items**: `T`[]

Defined in: [types/common.ts:48](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/common.ts#L48)

an array of items for the current page

***

### nextPagePath

> **nextPagePath**: `string` \| `null`

Defined in: [types/common.ts:49](https://github.com/CharmingVenca/trading212mcp/blob/c394390ce8a88b5bea513cdb31b012f64b6fd930/mcp-server/src/types/common.ts#L49)

the path to the next page of results, or null if there are no more pages
