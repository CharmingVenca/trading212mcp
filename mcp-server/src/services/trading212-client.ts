import {
    AccountSummary,
    DividendItem,
    Exchanges,
    HistoricalOrder,
    Instruments,
    LimitOrderRequest,
    MarketOrderRequest,
    Order,
    PaginatedResponse,
    PendingOrders,
    Positions,
    ReportRequest,
    ReportResponse,
    RequestReportResponse,
    StopLimitOrderRequest,
    StopOrderRequest
} from "../types";
import { RateLimiter } from "./rate-limiter.js";

type httpMethod = 'GET' | 'POST' | 'DELETE';

/**
 * Client for interacting with the Trading212 API
 * Provides methods to fetch account information, manage orders, and retrieve historical data
 */
export class Trading212Client {
    private instrumentsCache: Promise<Instruments> | null = null;
    private instrumentsTimestamp: number = 0;
    private exchangesCache: Promise<Exchanges> | null = null;
    private exchangesTimestamp: number = 0;
    private readonly CACHE_TTL = 10 * 60 * 1000;
    private readonly rateLimiter: RateLimiter;

    /**
     * @param baseUrl base URL for the API
     * @param apiKey API key for authentication
     * @param apiSecret API secret for authentication
     * @param disableRateLimiting Optional, if true -> disables API rate limiting. Defaults to false.
     * @param debug Optional, if true -> enables debug logging. Defaults to false.
     */
    constructor(
        private readonly baseUrl: string,
        private readonly apiKey: string,
        private readonly apiSecret: string,
        disableRateLimiting: boolean = false,
        private readonly debug: boolean = false,
    ) {
        this.rateLimiter = new RateLimiter(disableRateLimiting, this.debug);
    }

    /**
     * Makes an HTTP request to the API
     * @param method The HTTP method (GET, POST, DELETE)
     * @param path API endpoint path
     * @param body Optional, request body
     * @returns A promise that resolves with API response data
     */
    private async request<T>(method: httpMethod, path: string, body?: unknown): Promise<T> {
        if (this.debug) {
            console.error(`[Trading212Client] Request: ${method} ${path} Body: ${body ? JSON.stringify(body) : 'N/A'}`);
        }

        await this.rateLimiter.awaitPermission();

        const url = `${this.baseUrl}${path}`;
        const encoded = Buffer.from(`${this.apiKey}:${this.apiSecret}`).toString("base64");

        const response = await fetch(url, {
            method,
            headers: {
                "Authorization": `Basic ${encoded}`,
                ...(body ? {"Content-Type": "application/json"} : {}),
            },
            body: body ? JSON.stringify(body) : undefined,
        });

        if (this.debug) {
            console.error(`[Trading212Client] Response: ${response.status} ${response.statusText} Headers: ${JSON.stringify(Object.fromEntries(response.headers.entries()))}`);
        }

        this.rateLimiter.updateLimits(response.headers);

        if (!response.ok) {
            const errorText = await response.text();
            if (this.debug) {
                console.error(`[Trading212Client] Error Response Body: ${errorText}`);
            }
            throw new Error(`T212 API error ${response.status}: ${errorText}`);
        }

        const text = await response.text();
        return (text ? JSON.parse(text) : undefined) as T;
    }

    /**
     * Handles paginated API requests, fetching all pages of a resource
     * @param path Initial API endpoint path
     * @param delayMs Optional, the delay in milliseconds between page requests, defaults to 300ms
     * @returns A promise that resolves with an array of all fetched items
     */
    private async requestAllPages<T>(path: string, delayMs = 300): Promise<T[]> {
        const all: T[] = [];
        let nextPath: string | null = path;

        while (nextPath !== null) {
            const page: PaginatedResponse<T> | T[] = await this.request<PaginatedResponse<T> | T[]>('GET', nextPath);
            if (Array.isArray(page)) {
                all.push(...page);
                break;
            }
            all.push(...page.items);
            nextPath = page.nextPagePath;
            if (nextPath !== null) {
                await new Promise(resolve => setTimeout(resolve, delayMs));
            }
        }

        return all;
    }

    // GET requests
    /**
     * Retrieves all pending orders for the account
     * @returns A promise that resolves with an array of pending orders
     */
    async getAllPendingOrders(): Promise<PendingOrders> {
        return this.request('GET', '/equity/orders');
    }

    /**
     * Retrieves the summary of the trading account
     * @returns A promise that resolves with the account summary
     */
    async getAccountSummary(): Promise<AccountSummary> {
        return this.request('GET', '/equity/account/summary');
    }

    /**
     * Retrieves all available instruments with caching
     * @returns A promise that resolves with an array of available instruments
     */
    async getAllAvailableInstruments(): Promise<Instruments> {
        if (this.instrumentsCache && (Date.now() - this.instrumentsTimestamp) < this.CACHE_TTL) {
            return this.instrumentsCache;
        }
        this.instrumentsTimestamp = Date.now();
        this.instrumentsCache = this.requestAllPages<any>('/equity/metadata/instruments', 50_000).catch(err => {
            this.instrumentsCache = null;
            this.instrumentsTimestamp = 0;
            throw err;
        });
        return this.instrumentsCache;
    }

    /**
     * Retrieves all exchange metadata
     * @returns A promise that resolves with an object containing exchange metadata
     */
    async getExchangesMetadata(): Promise<Exchanges> {
        if (this.exchangesCache && (Date.now() - this.exchangesTimestamp) < this.CACHE_TTL) {
            return this.exchangesCache;
        }
        this.exchangesTimestamp = Date.now();
        this.exchangesCache = this.request<Exchanges>('GET', '/equity/metadata/exchanges').catch(err => {
            this.exchangesCache = null;
            this.exchangesTimestamp = 0;
            throw err;
        });
        return this.exchangesCache;
    }

    /**
     * Retrieves a specific pending order by ID
     * @param orderId The ID of the order to retrieve
     * @returns A promise that resolves with the order details
     */
    async getPendingOrderById(orderId: string): Promise<Order> {
        return this.request('GET', `/equity/orders/${orderId}`);
    }

    /**
     * Retrieves a paginated list of paid-out dividends
     * @param cursor Optional, used for pagination to indicate where to start fetching
     * @param ticker Optional, filters dividends by a ticker
     * @param limit Optional, the maximum number of dividends to return. Defaults to a server-side value if not specified
     * @returns A promise that resolves with a paginated response containing dividend items
     */
    async getDividends(cursor?: number, ticker?: string, limit?: number): Promise<PaginatedResponse<DividendItem>> {
        const params = new URLSearchParams();
        if (cursor !== undefined) params.set('cursor', cursor.toString());
        if (ticker) params.set('ticker', ticker);
        if (limit !== undefined) params.set('limit', limit.toString());
        
        const path = `/equity/history/dividends${params.toString() ? `?${params.toString()}` : ''}`;
        return this.request<PaginatedResponse<DividendItem>>('GET', path);
    }

    /**
     * Retrieves a paginated list of historical orders
     * @param cursor Optional, used for pagination to indicate where to start fetching
     * @param ticker Optional, filters historical orders by a specific ticker symbol
     * @param limit Optional, the maximum number of historical orders to return. Defaults to a server-side value if not specified
     * @returns A promise that resolves with a paginated response containing historical order items
     */
    async getHistoricalOrders(cursor?: number, ticker?: string, limit?: number): Promise<PaginatedResponse<HistoricalOrder>> {
        const params = new URLSearchParams();
        if (cursor !== undefined) params.set('cursor', cursor.toString());
        if (ticker) params.set('ticker', ticker);
        if (limit !== undefined) params.set('limit', limit.toString());

        const path = `/equity/history/orders${params.toString() ? `?${params.toString()}` : ''}`;
        return this.request<PaginatedResponse<HistoricalOrder>>('GET', path);
    }

    /**
     * Retrieves a paginated list of account transactions
     * @param cursor Optional, used for pagination to indicate where to start fetching
     * @param time Optional, filters transactions by time
     * @param limit Optional, the maximum number of transactions to return. Defaults to a server-side value if not specified
     * @returns A promise that resolves with a paginated response containing transaction items
     */
    async getTransactions(cursor?: string, time?: string, limit?: number): Promise<PaginatedResponse<any>> {
        const params = new URLSearchParams();
        if (cursor) params.set('cursor', cursor);
        if (time) params.set('time', time);
        if (limit !== undefined) params.set('limit', limit.toString());

        const path = `/equity/history/transactions${params.toString() ? `?${params.toString()}` : ''}`;
        return this.request<PaginatedResponse<any>>('GET', path);
    }

    /**
     * Lists all available account reports
     * @returns A promise that resolves with an array of report responses
     */
    async listReports(): Promise<ReportResponse[]> {
        return this.request<ReportResponse[]>('GET', '/equity/history/exports');
    }

    /**
     * Requests the generation of a new account report
     * @param report The report request details
     * @returns A promise that resolves with the report request response
     */
    async requestReport(report: ReportRequest): Promise<RequestReportResponse> {
        return this.request<RequestReportResponse>('POST', '/equity/history/exports', report);
    }

    /**
     * Fetches all open positions across all pages
     * @param ticker Optional. Filters positions by a specific ticker symbol
     * @returns A promise that resolves with an array of open positions
     */
    async fetchAllOpenPositions(ticker?: string): Promise<Positions> {
        const path = ticker
            ? `/equity/positions?${new URLSearchParams({ticker}).toString()}`
            : '/equity/positions';
        return this.requestAllPages(path);
    }

    // POST requests

    /**
     * Places a new limit order
     * @param order The limit order request details
     * @returns A promise that resolves with the details of the placed order
     */
    async placeLimitOrder(order: LimitOrderRequest): Promise<Order> {
        return this.request('POST', '/equity/orders/limit', order);
    }

    /**
     * Places a new market order
     * @param order The market order request details
     * @returns A promise that resolves with the details of the placed order
     */
    async placeMarketOrder(order: MarketOrderRequest): Promise<Order> {
        return this.request('POST', '/equity/orders/market', order);
    }

    /**
     * Places a new stop order
     * @param order The stop order request details
     * @returns A promise that resolves with the details of the placed order
     */
    async placeStopOrder(order: StopOrderRequest): Promise<Order> {
        return this.request('POST', '/equity/orders/stop', order);
    }

    /**
     * Places a new stop-limit order
     * @param order The stop-limit order request details
     * @returns A promise that resolves with the details of the placed order
     */
    async placeStopLimitOrder(order: StopLimitOrderRequest): Promise<Order> {
        return this.request('POST', '/equity/orders/stop_limit', order);
    }

    // DELETE requests

    /**
     * Cancels a specific pending order
     * @param orderId The ID of the order to cancel
     * @returns A promise that resolves when the order has been successfully canceled
     */
    async cancelPendingOrder(orderId: string): Promise<void> {
        return this.request('DELETE', `/equity/orders/${orderId}`);
    }
}