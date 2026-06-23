/**
 * Status of an export report request
 */
export type ExportStatus = "Queued" | "Processing" | "Running" | "Canceled" | "Failed" | "Finished";

/**
 * Flags for data categories to include in a report
 * @property includeDividends - whether to include dividend data in the report
 * @property includeInterest - whether to include interest data in the report
 * @property includeOrders - whether to include order data in the report
 * @property includeTransactions - whether to include transaction data in the report
 */
export interface ReportDataIncluded {
    includeDividends: boolean;
    includeInterest: boolean;
    includeOrders: boolean;
    includeTransactions: boolean;
}

/**
 * Parameters for requesting a new report
 * @property dataIncluded - Specifies which data categories to include in the report
 * @property timeFrom - start time for the report data in ISO 8601 format
 * @property timeTo - end time for the report data in ISO 8601 format
 */
export interface ReportRequest {
    dataIncluded: ReportDataIncluded;
    timeFrom: string;
    timeTo: string;
}

/**
 * Metadata for a generated or pending report
 * @property dataIncluded - the data categories included in the report
 * @property downloadLink - optional, the link to download the report if it's finished
 * @property reportId - unique identifier for the report
 * @property status - current status of the report generation
 * @property timeFrom - start time for the report data
 * @property timeTo - end time for the report data
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
 * Response received after requesting a report
 * @property reportId - unique identifier of the requested report
 */
export interface RequestReportResponse {
    reportId: number;
}
