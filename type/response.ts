export interface APIData<DataModel> {
  code: number;
  message?: string;
  content?: DataModel;
}