import { Avatar, Button } from '@arco-design/web-react';

export const VideoIntroductionBox = () => {
  return (
    <div className="p-2 border rounded-lg">
      <div className="flex flex-col">
        <div className="flex justify-between mx-2 my-2">
          <div className="flex">
            <Avatar className="mr-2 shrink-0">P</Avatar>
            <div className="mr-2 my-auto">中原科技网</div>
          </div>
          <Button type="primary" className="my-auto" href="https://www.baidu.com" target="blank">
            主页
          </Button>
        </div>
        <div className="mx-2">
          <p>
            {
              '引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言'
            }
          </p>
        </div>
      </div>
      <div className="flex justify-between text-right my-2 flex-wrap px-2">
        <div className="flex flex-wrap">
          <span className="mr-2">作者：XXXXXXXXXXXXXXXXXXXX</span>
          <span className="">作者：XXXXXXXXXXXXX</span>
        </div>
        <div>{'2022年09月19日'}</div>
      </div>
    </div>
  );
};
