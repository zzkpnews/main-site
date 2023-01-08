import { Button } from "@arco-design/web-react";
import { ImCrying } from "react-icons/im";

export const ServerError = () => {
  const backToLastPage = () => {
    window.history.back();
  };
  return (
    <div className="flex justify-center w-full h-96 py-10">
      <div className="flex flex-col justify-center">
        <ImCrying className="mx-auto" size="180px" />
        <h2 className="text-center my-2">
          <div className="text-3xl font-bold">{"服务器发生严重错误"}</div>
          <div className="text-lg">
            {"我们已经收到有关报告，请去别处看看吧！"}
          </div>
        </h2>
        <Button
          type="primary"
          size="large"
          className="mx-auto my-3"
          onClick={backToLastPage}
        >
          {"返回上一页"}
        </Button>
      </div>
    </div>
  );
};
