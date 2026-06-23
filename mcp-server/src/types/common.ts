/**
 * Trade direction.
 */
export type Side = "BUY" | "SELL";

/**
 * Order expiration strategy.
 */
export type TimeInForce = "DAY" | "GOOD_TILL_CANCEL";

/**
 * Source of the order or action.
 */
export type InitiatedFrom =
    | "API"
    | "IOS"
    | "ANDROID"
    | "WEB"
    | "SYSTEM"
    | "AUTOINVEST"
    | "INSTRUMENT_AUTOINVEST";

/**
 * Trading strategy (by amount or shares).
 */
export type Strategy = "QUANTITY" | "VALUE";

/**
 * Basic instrument identification.
 */
export interface InstrumentInfo {
    currency: string;
    isin: string;
    name: string;
    ticker: string;
}

/**
 * Generic paginated API response.
 */
export interface PaginatedResponse<T> {
    items: T[];
    nextPagePath: string | null;
}
