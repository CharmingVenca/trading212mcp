/**
 * Status of an export report request.
 */
export type ExportStatus = "Queued" | "Processing" | "Running" | "Canceled" | "Failed" | "Finished";

/**
 * Flags for data categories to include in a report.
 */
export interface ReportDataIncluded {
    includeDividends: boolean;
    includeInterest: boolean;
    includeOrders: boolean;
    includeTransactions: boolean;
}

/**
 * Parameters for requesting a new report.
 */
export interface ReportRequest {
    dataIncluded: ReportDataIncluded;
    timeFrom: string;
    timeTo: string;
}

/**
 * Metadata for a generated or pending report.
 */
export interface ReportResponse {
    dataIncluded: ReportDataIncluded;
    downloadLink?: string;
    reportId: number;
    status: ExportStatus;
    timeFrom: string;
    timeTo: string;
}

/**
 * Response received after requesting a report.
 */
export interface RequestReportResponse {
    reportId: number;
}
