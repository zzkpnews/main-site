import { APIData } from "@/models/data";
import { useRequest } from "ahooks";
import axios, { AxiosStatic } from "axios";
import type { ArgumentTypes } from "types/utils";

type APIRequestMethod = "GET" | "POST";

const useAPI = <DataModel,>(
  api_path: string,
  method: APIRequestMethod,
  withToken: boolean,
  token: string
) => {
  let result_data: APIData<DataModel> = {
    code: 0,
  };
  const { data, error, loading, run } = useRequest<
    APIData<DataModel>,
    ArgumentTypes<AxiosStatic>
  >(axios, {
    defaultParams: [
      api_path,
      {
        method: method,
        headers: {
          token: withToken ? token : undefined,
        },
      },
    ],
    manual: true,
  });
  if (error) {
    (result_data.code = 500), (result_data.message = error.message);
  }
  if (data) {
    result_data = { ...data };
  }
  return [result_data, loading, run];
};

export default useAPI;
