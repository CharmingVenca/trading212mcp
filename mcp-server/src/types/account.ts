import { InstrumentInfo } from "./common.js";
import { Order } from "./orders.js";
import { DividendType } from "./dividends.js";

/**
 * Available tax types for transactions.
 */
export type TaxName =
    | "COMMISSION_TURNOVER"
    | "CURRENCY_CONVERSION_FEE"
    | "FINRA_FEE"
    | "FRENCH_TRANSACTION_TAX"
    | "PTM_LEVY"
    | "STAMP_DUTY"
    | "STAMP_DUTY_RESERVE_TAX"
    | "TRANSACTION_FEE";

/**
 * Types of order fills.
 */
export type FillType =
    | "TRADE"
    | "STOCK_SPLIT"
    | "STOCK_DISTRIBUTION"
    | "FOP"
    | "FOP_CORRECTION"
    | "CUSTOM_STOCK_DISTRIBUTION"
    | "EQUITY_RIGHTS"
    | "SCRIP_STOCK_DIVIDENDS"
    | "STOCK_DIVIDENDS"
    | "STOCK_ACQUISITION"
    | "CASH_AND_STOCK_ACQUISITION"
    | "SPIN_OFF";

export type TradingMethod = "TOTV" | "OTC";

/**
 * Tax information for a transaction.
 */
export interface Tax {
    chargedAt: string;
    currency: string;
    name: TaxName;
    quantity: number;
}

/**
 * Impact of a transaction on the wallet balance.
 */
export interface WalletImpact {
    currency: string;
    fxRate: number;
    netValue: number;
    realisedProfitLoss: number;
    taxes: Tax[];
}

/**
 * Details of a filled order.
 */
export interface Fill {
    filledAt: string;
    id: number;
    price: number;
    quantity: number;
    tradingMethod: TradingMethod;
    type: FillType;
    walletImpact: WalletImpact;
}

/**
 * Combined historical order and fill data.
 */
export interface HistoricalOrder {
    fill: Fill;
    order: Order;
}

/**
 * Deposit, withdrawal, or fee transaction.
 */
export interface TransactionItem {
    amount: number;
    currency: string;
    dateTime: string;
    reference: string;
    type: "WITHDRAW" | "DEPOSIT" | "FEE" | "TRANSFER";
}

/**
 * Dividend payment details.
 */
export interface DividendItem {
    amount: number;
    amountInEuro: number;
    currency: string;
    grossAmountPerShare: number;
    instrument: InstrumentInfo;
    paidOn: string;
    quantity: number;
    reference: string;
    ticker: string;
    tickerCurrency: string;
    type: DividendType;
}

/**
 * Open investment position details.
 */
export interface Position {
    averagePricePaid: number;
    createdAt: string;
    currentPrice: number;
    instrument: InstrumentInfo;
    quantity: number;
    quantityAvailableForTrading: number;
    quantityInPies: number;
    walletImpact: {
        currency: string;
        currentValue: number;
        fxImpact: number;
        totalCost: number;
        unrealizedProfitLoss: number;
    };
}

/**
 * Overall account financial summary.
 */
export interface AccountSummary {
    cash: {
        availableToTrade: number;
        inPies: number;
        reservedForOrders: number;
    };
    currency: string;
    id: number;
    investments: {
        currentValue: number;
        realizedProfitLoss: number;
        totalCost: number;
        unrealizedProfitLoss: number;
    };
    totalValue: number;
}

export type Positions = Position[];
