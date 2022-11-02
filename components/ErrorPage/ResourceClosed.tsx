import { Button } from '@arco-design/web-react';
import { FaEyeSlash } from 'react-icons/fa';

export const ResourceClosed = () => {
  const backToLastPage = () => {
    window.history.back();
  };
  return (
    <div className="flex justify-center w-full h-96 py-10">
      <div className="flex flex-col justify-center">
        <FaEyeSlash className="mx-auto" size="180px" />
        <h2 className="text-center my-2">
          <div className="text-3xl font-bold">{'您要查看的内容已关闭'}</div>
          <div className="text-lg">{'去别处看看吧'}</div>
        </h2>
        <Button type="primary" size="large" className="mx-auto my-3" onClick={backToLastPage}>
          {'返回上一页'}
        </Button>
      </div>
    </div>
  );
};
