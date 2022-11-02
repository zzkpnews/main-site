import { Button } from '@arco-design/web-react';
import { GiDeadWood } from 'react-icons/gi';
export const ResourceNotFound = () => {
  const backToLastPage = () => {
    window.history.back();
  };
  return (
    <div className="flex justify-center w-full h-96 py-10">
      <div className="flex flex-col justify-center">
        <GiDeadWood className="mx-auto" size="180px" />
        <h2 className="text-center text-3xl my-2 font-bold">
          <div>{'资源未找到'}</div>
          <div>{'404 NOT FOUND'}</div>
        </h2>
        <Button type="primary" size="large" className="mx-auto my-3" onClick={backToLastPage}>
          {"返回上一页"}
        </Button>
      </div>
    </div>
  );
};
