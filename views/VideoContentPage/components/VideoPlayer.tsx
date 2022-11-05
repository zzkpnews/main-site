/* eslint-disable react/display-name */
import { Avatar, Button } from '@arco-design/web-react';
import React from 'react';

export const VideoPlayer = React.memo(
  () => {
    return (
      <div className="lg:flex flex-col">
        <div className="my-2">
          <h3 className="text-lg font-bold">副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题</h3>
          <h2 className="text-2xl font-bold my-1">标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</h2>
          <h3 className="text-xl">副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题</h3>
        </div>
        <iframe
          className="aspect-video w-full rounded-lg border"
          src="//player.bilibili.com/player.html?aid=901312046&bvid=BV1MN4y1A78t&cid=856053011&page=1"
          allowFullScreen={true}
        />
        <div className="my-2 p-2 border rounded-lg">
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
      </div>
    );
  },
  (prevProps, nextProps) => {
    return true;
  }
);
