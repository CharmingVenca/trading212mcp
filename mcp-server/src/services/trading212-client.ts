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

type httpMethod = 'GET' | 'POST' | 'DELETE';

export class Trading212Client {
    private instrumentsCache: Promise<Instruments> | null = null;
    private instrumentsTimestamp: number = 0;
    private exchangesCache: Promise<Exchanges> | null = null;
    private exchangesTimestamp: number = 0;
    private readonly CACHE_TTL = 10 * 60 * 1000; // 10 minutes

    constructor(
        private readonly baseUrl: string,
        private readonly apiKey: string,
        private readonly apiSecret: string,
    ) {
    }

    private async request<T>(method: httpMethod, path: string, body?: unknown): Promise<T> {
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

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`T212 API error ${response.status}: ${errorText}`);
        }

        const text = await response.text();
        return (text ? JSON.parse(text) : undefined) as T;
    }

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
    async getAllPendingOrders(): Promise<PendingOrders> {
        return this.request('GET', '/equity/orders');
    }

    async getAccountSummary(): Promise<AccountSummary> {
        return this.request('GET', '/equity/account/summary');
    }

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
     * Retrieves all exchange metadata with caching.
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
     * Retrieves a specific pending order by ID.
     */
    async getPendingOrderById(orderId: string): Promise<Order> {
        return this.request('GET', `/equity/orders/${orderId}`);
    }

    /**
     * Retrieves a paginated list of paid-out dividends.
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
     * Retrieves a paginated list of historical orders.
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
     * Retrieves a paginated list of account transactions.
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
     * Lists all available account reports.
     */
    async listReports(): Promise<ReportResponse[]> {
        return this.request<ReportResponse[]>('GET', '/equity/history/exports');
    }

    /**
     * Requests the generation of a new account report.
     */
    async requestReport(report: ReportRequest): Promise<RequestReportResponse> {
        return this.request<RequestReportResponse>('POST', '/equity/history/exports', report);
    }

    /**
     * Fetches all open positions across all pages.
     */
    async fetchAllOpenPositions(ticker?: string): Promise<Positions> {
        const path = ticker
            ? `/equity/positions?${new URLSearchParams({ticker}).toString()}`
            : '/equity/positions';
        return this.requestAllPages(path);
    }

    // POST requests

    /**
     * Places a new limit order.
     */
    async placeLimitOrder(order: LimitOrderRequest): Promise<Order> {
        return this.request('POST', '/equity/orders/limit', order);
    }

    /**
     * Places a new market order.
     */
    async placeMarketOrder(order: MarketOrderRequest): Promise<Order> {
        return this.request('POST', '/equity/orders/market', order);
    }

    /**
     * Places a new stop order.
     */
    async placeStopOrder(order: StopOrderRequest): Promise<Order> {
        return this.request('POST', '/equity/orders/stop', order);
    }

    /**
     * Places a new stop-limit order.
     */
    async placeStopLimitOrder(order: StopLimitOrderRequest): Promise<Order> {
        return this.request('POST', '/equity/orders/stop_limit', order);
    }

    // DELETE requests

    /**
     * Cancels a specific pending order.
     */
    async cancelPendingOrder(orderId: string): Promise<void> {
        return this.request('DELETE', `/equity/orders/${orderId}`);
    }
}