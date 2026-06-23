import { InstrumentInfo } from "./common.js";
import { Order } from "./orders.js";
import { DividendType } from "./dividends.js";

/**
 * Available tax types for transactions
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
 * Types of order fills
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

/**
 * Specifies the trading method for an order fill
 */
export type TradingMethod = "TOTV" | "OTC";

/**
 * Tax information for a transaction
 * @property chargedAt - timestamp when the tax was charged
 * @property currency - currency of the tax
 * @property name - name or type of the tax
 * @property quantity - quantity related to the tax
 */
export interface Tax {
    chargedAt: string;
    currency: string;
    name: TaxName;
    quantity: number;
}

/**
 * Impact of a transaction on the wallet balance
 * @property currency - currency of the wallet impact
 * @property fxRate - foreign exchange rate at the time of impact
 * @property netValue - net value of the impact
 * @property realisedProfitLoss - realised profit or loss from the impact
 * @property taxes - An array of taxes applied to the impact
 */
export interface WalletImpact {
    currency: string;
    fxRate: number;
    netValue: number;
    realisedProfitLoss: number;
    taxes: Tax[];
}

/**
 * Details of a filled order
 * @property filledAt - timestamp when the order was filled
 * @property id - unique identifier of the fill
 * @property price - price at which the order was filled
 * @property quantity - quantity filled
 * @property tradingMethod - trading method used for the fill
 * @property type - type of the fill
 * @property walletImpact - impact of this fill on the wallet
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
 * Combined historical order and fill data
 * @property fill - Details of the fill for the order
 * @property order - Details of the historical order
 */
export interface HistoricalOrder {
    fill: Fill;
    order: Order;
}

/**
 * Deposit, withdrawal, or fee transaction
 * @property amount - amount of the transaction
 * @property currency - currency of the transaction
 * @property dateTime - date and time of the transaction
 * @property reference - A reference string for the transaction
 * @property type - type of the transaction
 */
export interface TransactionItem {
    amount: number;
    currency: string;
    dateTime: string;
    reference: string;
    type: "WITHDRAW" | "DEPOSIT" | "FEE" | "TRANSFER";
}

/**
 * Dividend payment details
 * @property amount - net amount of the dividend
 * @property amountInEuro - amount of the dividend in Euro
 * @property currency - currency of the dividend
 * @property grossAmountPerShare - gross amount per share
 * @property instrument - Information about the instrument the dividend is from
 * @property paidOn - date the dividend was paid
 * @property quantity - quantity of shares that received the dividend
 * @property reference - a reference for the dividend payment
 * @property ticker - ticker symbol of the instrument
 * @property tickerCurrency - currency of the ticker
 * @property type - type of dividend
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
 * Open investment position details
 * @property averagePricePaid - average price paid for the position
 * @property createdAt - timestamp when the position was created
 * @property currentPrice - current price of the instrument
 * @property instrument - Information about the instrument in the position
 * @property quantity - total quantity of the instrument held
 * @property quantityAvailableForTrading - quantity of the instrument available for further trading
 * @property quantityInPies - quantity of the instrument held in pies
 * @property walletImpact - financial impact of this position
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
 * Overall account financial summary
 * @property cash - Details about the cash in the account
 * @property currency - currency of the account
 * @property id - unique identifier of the account
 * @property investments - Details about the investments in the account
 * @property totalValue - total value of the account
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

/**
 * Represents an array of open investment positions
 */
export type Positions = Position[];
