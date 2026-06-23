/**
 * Asset class type
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
 * Market session event types
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
 * Detailed instrument metadata
 * @property addedOn - date the instrument was added
 * @property currencyCode - currency code of the instrument
 * @property extendedHours - Indicates if extended hours trading is available
 * @property isin - ISIN of the instrument
 * @property maxOpenQuantity - maximum quantity that can be open
 * @property name - full name of the instrument
 * @property shortName - short name of the instrument
 * @property ticker - ticker symbol of the instrument
 * @property type - asset class type of the instrument
 * @property workingScheduleId - ID of the working schedule for the instrument
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
 * Specific market timing event
 * @property date - date of the event
 * @property type - type of the time event (e.g., OPEN, CLOSE, BREAK_START)
 */
export interface TimeEvent {
    date: string;
    type: TimeEventType;
}

/**
 * Market schedule for a specific day/period
 * @property id - Unique identifier of the working schedule
 * @property timeEvents - An array of time events defining the schedule
 */
export interface WorkingSchedule {
    id: number;
    timeEvents: TimeEvent[];
}

/**
 * Exchange metadata and operating schedule
 * @property id - unique identifier of the exchange
 * @property name - name of the exchange
 * @property workingSchedules - an array of working schedules for the exchange
 */
export interface Exchange {
    id: number;
    name: string;
    workingSchedules: WorkingSchedule[];
}

/**
 * Represents an array of detailed instrument metadata
 */
export type Instruments = Instrument[];
/**
 * Represents an array of exchange metadata and operating schedules
 */
export type Exchanges = Exchange[];
