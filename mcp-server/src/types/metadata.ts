/**
 * Asset class type.
 */
export type Type =
    | "CRYPTOCURRENCY"
    | "ETF"
    | "FOREX"
    | "FUTURES"
    | "INDEX"
    | "STOCK"
    | "WARRANT"
    | "CRYPTO"
    | "CVR"
    | "CORPACT";

/**
 * Market session event types.
 */
export type TimeEventType =
    | "OPEN"
    | "CLOSE"
    | "BREAK_START"
    | "BREAK_END"
    | "PRE_MARKET_OPEN"
    | "AFTER_HOURS_OPEN"
    | "AFTER_HOURS_CLOSE"
    | "OVERNIGHT_OPEN";

/**
 * Detailed instrument metadata.
 */
export interface Instrument {
    addedOn: string;
    currencyCode: string;
    extendedHours: boolean;
    isin: string;
    maxOpenQuantity: number;
    name: string;
    shortName: string;
    ticker: string;
    type: Type;
    workingScheduleId: number;
}

/**
 * Specific market timing event.
 */
export interface TimeEvent {
    date: string;
    type: TimeEventType;
}

/**
 * Market schedule for a specific day/period.
 */
export interface WorkingSchedule {
    id: number;
    timeEvents: TimeEvent[];
}

/**
 * Exchange metadata and operating schedule.
 */
export interface Exchange {
    id: number;
    name: string;
    workingSchedules: WorkingSchedule[];
}

export type Instruments = Instrument[];
export type Exchanges = Exchange[];
