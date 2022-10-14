import React from 'react';
import { APIReply } from '../../api/ajax';
import { TopicItem } from '../../models';

const TopicList = React.memo(
  (props: { Topics: APIReply<TopicItem[]> }): JSX.Element => {
    return (
      <div className="tw-rounded-lg tw-p-4 tw-mx-2">
        <h2 className="tw-font-bold tw-text-lg tw-text-red-700 tw-my-2">{'热点话题'}</h2>
        <div className="tw-grid tw-grid-cols-3 ">
          {props.Topics.data?.map((item) => (
            <div className="tw-mx-auto tw-p-3 tw-m-1 tw-rounded-lg hover:tw-cursor-pointer" key={item.topic_id}>
              <img className="tw-h-24 tw-w-24 tw-rounded-lg hover:tw-shadow-md" src={item.logo_url} />
              <span className="tw-font-bold tw-block tw-mt-2 tw-text-center">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return prevProps === nextProps;
  }
);

export { TopicList };
