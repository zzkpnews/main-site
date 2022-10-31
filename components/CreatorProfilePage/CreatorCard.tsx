import { Avatar, Divider } from '@arco-design/web-react';

export const CreatorCard = () => {
  return (
    <div className="">
      <div className="md:flex">
        <div className="flex justify-center shrink-0 mx-auto my-auto">
          <Avatar className="" size={80}>
            中
          </Avatar>
        </div>
        <div className="my-auto mx-5">
          <h3 className="text-lg font-bold">中原科技网</h3>
          <p>
            介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍
          </p>
          <Divider />
          <div>
            <div className="flex">
              <div className="mr-3">电话：15617613081</div>
              <div className="mr-3">邮箱：prinorange@outlook.com</div>
              <a className="hover:text-red-700" href="http://www.baidu.com">
                官网链接
              </a>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
