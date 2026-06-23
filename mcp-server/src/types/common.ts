/**
 * Trade direction
 */
export type Side = "BUY" | "SELL";

/**
 * Order expiration strategy
 */
export type TimeInForce = "DAY" | "GOOD_TILL_CANCEL";

/**
 * Source of the order or action
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
 * Trading strategy
 */
export type Strategy = "QUANTITY" | "VALUE";

/**
 * Basic instrument identification
 * @property currency - trading currency of the instrument
 * @property isin - International Securities Identification Number of the instrument
 * @property name - name of the instrument
 * @property ticker - ticker symbol of the instrument
 */
export interface InstrumentInfo {
    currency: string;
    isin: string;
    name: string;
    ticker: string;
}

/**
 * Generic paginated API response
 * @property items - an array of items for the current page
 * @property nextPagePath - the path to the next page of results, or null if there are no more pages
 */
export interface PaginatedResponse<T> {
    items: T[];
    nextPagePath: string | null;
}
