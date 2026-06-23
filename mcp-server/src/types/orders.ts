import { InstrumentInfo, Side, TimeInForce, InitiatedFrom, Strategy } from "./common.js";

/**
 * Supported order execution types.
 */
export type OrderType = "LIMIT" | "STOP" | "MARKET" | "STOP_LIMIT";

/**
 * Current state of an order in the lifecycle.
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
 * Full details of an order.
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
 * Request body for placing a limit order.
 */
export interface LimitOrderRequest {
    limitPrice: number;
    quantity: number;
    ticker: string;
    timeValidity: TimeInForce;
}

/**
 * Request body for placing a market order.
 */
export interface MarketOrderRequest {
    extendedHours: boolean;
    quantity: number;
    ticker: string;
}

/**
 * Request body for placing a stop order.
 */
export interface StopOrderRequest {
    quantity: number;
    stopPrice: number;
    ticker: string;
    timeValidity: TimeInForce;
}

/**
 * Request body for placing a stop-limit order.
 */
export interface StopLimitOrderRequest {
    limitPrice: number;
    quantity: number;
    stopPrice: number;
    ticker: string;
    timeValidity: TimeInForce;
}

export type PendingOrders = Order[];
