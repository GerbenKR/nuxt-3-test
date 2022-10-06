export interface statusAPIResponse {
    success: boolean;
    data: Data;
}

export interface Data {
    stat: string;
    pagination: Pagination;
    monitors: Monitor[];
}

export interface Monitor {
    id: number;
    friendly_name: string;
    url: string;
    type: number;
    sub_type: string;
    keyword_type: null;
    keyword_case_type: null;
    keyword_value: string;
    port: string;
    interval: number;
    timeout: number;
    status: number;
    create_datetime: number;
}

export interface Pagination {
    offset: number;
    limit: number;
    total: number;
}
