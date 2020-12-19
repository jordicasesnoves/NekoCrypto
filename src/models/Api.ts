interface ApiBodyResponse {
  status: string;
}

export interface ApiSuccessResponse extends ApiBodyResponse {
  data: any;
}

export interface ApiErrorResponse extends ApiBodyResponse {
  code: string;
  message: string;
}

export type ApiResponse = ApiSuccessResponse | ApiErrorResponse;

export type ApiHookResponse = {
  data: ApiResponse;
  error: Error;
  isLoading: boolean;
  isError: boolean;
};
