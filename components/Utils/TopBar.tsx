import { Input } from '@arco-design/web-react';
import { IconSearch } from '@arco-design/web-react/icon';
import { FaWeibo } from 'react-icons/fa';
import { RiBilibiliFill, RiWechatFill } from 'react-icons/ri';
import { SiZhihu } from 'react-icons/si';
export const TopBar = () => {
  return (
    <div className="bg-red-700 w-full flex justify-between px-5 flex-wrap-reverse">
      <div className="my-auto py-2 mx-auto shrink-0">
        <Input size="mini" allowClear style={{ width: 300 }} suffix={<IconSearch />} placeholder="搜索内容" />
      </div>
      <div className="flex h-full py-2 mx-auto shrink-0">
        <FaWeibo className="mx-2 my-auto text-white cursor-pointer hover:text-gray-300 active:text-white" size="24px" />
        <RiBilibiliFill
          className="mx-2 my-auto text-white cursor-pointer hover:text-gray-300 active:text-white"
          size="24px"
        />
        <RiWechatFill
          className="mx-2 my-auto text-white cursor-pointer hover:text-gray-300 active:text-white"
          size="24px"
        />
        <SiZhihu className="mx-2 my-auto text-white cursor-pointer hover:text-gray-300 active:text-white" size="24px" />
      </div>
    </div>
  );
};
