import { InstrumentInfo, Side, TimeInForce, InitiatedFrom, Strategy } from "./common.js";

/**
 * Supported order execution types
 */
export type OrderType = "LIMIT" | "STOP" | "MARKET" | "STOP_LIMIT";

/**
 * Current state of an order in the lifecycle
 */
export type OrderStatus =
    | "LOCAL"
    | "UNCONFIRMED"
    | "CONFIRMED"
    | "NEW"
    | "CANCELLING"
    | "CANCELLED"
    | "PARTIALLY_FILLED"
    | "FILLED"
    | "REJECTED"
    | "REPLACING"
    | "REPLACED";

/**
 * Full details of an order
 * @property createdAt - timestamp when the order was created
 * @property currency - currency of the order
 * @property extendedHours - Indicates if the order was placed for extended hours trading
 * @property filledQuantity - quantity of the order that has been filled
 * @property filledValue - total value of the filled portion of the order
 * @property id - unique identifier of the order
 * @property initiatedFrom - source from which the order was initiated
 * @property instrument - information about the instrument of the order
 * @property limitPrice - limit price for limit and stop-limit orders
 * @property quantity - total quantity of the order
 * @property side - trade direction
 * @property status - current status of the order
 * @property stopPrice - stop price for stop and stop-limit orders
 * @property strategy - trading strategy used
 * @property ticker - ticker symbol of the instrument
 * @property timeInForce - time in force policy for the order
 * @property type - type of the order
 * @property value - total value of the order
 */
export interface Order {
    createdAt: string;
    currency: string;
    extendedHours: boolean;
    filledQuantity: number;
    filledValue: number;
    id: number;
    initiatedFrom: InitiatedFrom;
    instrument: InstrumentInfo;
    limitPrice: number;
    quantity: number;
    side: Side;
    status: OrderStatus;
    stopPrice: number;
    strategy: Strategy;
    ticker: string;
    timeInForce: TimeInForce;
    type: OrderType;
    value: number;
}

/**
 * Request body for placing a limit order
 * @property limitPrice - price at which the order should be executed or better
 * @property quantity - number of shares or units to buy/sell
 * @property ticker - ticker symbol of the instrument
 * @property timeValidity - time in force policy for the order
 */
export interface LimitOrderRequest {
    limitPrice: number;
    quantity: number;
    ticker: string;
    timeValidity: TimeInForce;
}

/**
 * Request body for placing a market order
 * @property extendedHours - Boolean indicating whether the order can execute during extended hours
 * @property quantity - number of shares or units to buy/sell
 * @property ticker - ticker symbol of the instrument
 */
export interface MarketOrderRequest {
    extendedHours: boolean;
    quantity: number;
    ticker: string;
}

/**
 * Request body for placing a stop order
 * @property quantity - number of shares or units to buy/sell
 * @property stopPrice - price at which the stop order becomes a market order
 * @property ticker - ticker symbol of the instrument
 * @property timeValidity - time in force policy for the order
 */
export interface StopOrderRequest {
    quantity: number;
    stopPrice: number;
    ticker: string;
    timeValidity: TimeInForce;
}

/**
 * Request body for placing a stop-limit order
 * @property limitPrice - limit price for the order once the stop price is triggered
 * @property quantity - number of shares or units to buy/sell
 * @property stopPrice - price at which the stop-limit order is activated
 * @property ticker - ticker symbol of the instrument
 * @property timeValidity - time in force policy for the order
 */
export interface StopLimitOrderRequest {
    limitPrice: number;
    quantity: number;
    stopPrice: number;
    ticker: string;
    timeValidity: TimeInForce;
}

/**
 * Represents an array of pending orders
 */
export type PendingOrders = Order[];
