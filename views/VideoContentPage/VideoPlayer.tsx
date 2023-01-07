/* eslint-disable react/display-name */
import { APIData, VideoNews } from '@/models/data';
import { Avatar, Button } from '@arco-design/web-react';
import React from 'react';

export const VideoPlayer = React.memo(
  (props: { data: APIData<VideoNews> }) => {
    return (
      <div className="lg:flex flex-col">
        <div className="my-2">
          <h3 className="text-lg font-bold">{props.data.content?.lead_title}</h3>
          <h2 className="text-2xl font-bold my-1">{props.data.content?.title}</h2>
          <h3 className="text-xl">{props.data.content?.subtitle}</h3>
        </div>
        <iframe
          className="aspect-video w-full rounded-lg border"
          src={props.data.content?.video_url}
          allowFullScreen={true}
        />
        <div className="my-2 p-2 border rounded-lg">
          <div className="flex flex-col">
            <div className="flex justify-between mx-2 my-2">
              <div className="flex">
                <Avatar className="mr-2 shrink-0">P</Avatar>
                <div className="mr-2 my-auto">{props.data.content?.creator_title}</div>
              </div>
              <Button
                type="primary"
                className="my-auto"
                href={`/creator/${props.data.content?.creator_id}`}
                target="blank"
              >
                {'主页'}
              </Button>
            </div>
            <div className="mx-2">
              <p>{props.data.content?.creator_introduction}</p>
            </div>
          </div>
          <div className="flex justify-between text-right my-2 flex-wrap px-2">
            <div className="flex flex-wrap">
              <span className="mr-2">{`作者：${props.data.content?.author}`}</span>
              <span className="mr-2">{`编辑：${props.data.content?.editor}`}</span>
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
