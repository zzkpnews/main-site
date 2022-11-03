export interface APIResponse<DataModel> {
  code: number;
  message?: string;
  data?: DataModel;
}