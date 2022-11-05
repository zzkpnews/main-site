import { Spin } from '@arco-design/web-react';

export const LoadingBlock = () => {
  return (
    <div className="flex flex-col justify-center w-full h-full">
      <Spin className=" my-2 mx-auto" dot />
      <h3 className="text-lg font-bold mx-auto">{'资源正在加载中'}</h3>
    </div>
  );
};
