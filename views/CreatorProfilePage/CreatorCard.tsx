import { Avatar, Button } from "@arco-design/web-react";

export const CreatorCard = () => {
  return (
    <div className="my-2 py-10">
      <div className="md:flex">
        <div className="flex justify-center shrink-0 mx-auto my-auto">
          <Avatar className="" size={80}>
            中
          </Avatar>
        </div>
        <div className="my-auto mx-5">
          <h3 className="text-lg font-bold">中原科技网</h3>
          <p className="my-2">
            介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍
          </p>
          <div>
            <div className="flex flex-wrap justify-between">
              <div className="my-2">
                <div className="mr-3 my-auto">电话：15617613081</div>
                <div className="mr-3 my-auto">邮箱：prinorange@outlook.com</div>
              </div>
              <Button type="primary" className="my-auto">
                访问官网
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
