/* eslint-disable react/display-name */
import React from 'react';

export const VideoPlayer = React.memo(
  () => {
    return (
      <div className="lg:flex flex-col">
        <div className="my-2">
          <h2 className="text-2xl font-bold my-3">标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</h2>
          <h3 className="text-xl">副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题</h3>
        </div>
        <iframe
          className="aspect-video w-full rounded-lg border"
          src="//player.bilibili.com/player.html?aid=901312046&bvid=BV1MN4y1A78t&cid=856053011&page=1"
          allowFullScreen={true}
        />
      </div>
    );
  },
  (prevProps, nextProps) => {
    return true;
  }
);
