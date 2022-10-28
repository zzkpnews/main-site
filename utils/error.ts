import { APIResponse } from '../api';

export const print_api_error = (from: string, api_response: APIResponse<any>) => {
  console.log(`From ${from} throw an Error:${api_response.code}:${api_response.message}`);
};
