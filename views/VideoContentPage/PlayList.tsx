import type { APIData, VideoPlayList } from '@/models/data';
import { List } from '@arco-design/web-react';
import { ErrorBlock } from 'views/Common';

export const PlayList = (props: { data: APIData<VideoPlayList> }) => {
  if (props.data.code >= 400) return <ErrorBlock code={props.data.code} message={props.data.message} />;
  return (
    <div className="bg-slate-50 rounded-sm px-2 pb-3 my-5 border-t-7 border-red-800">
      <List
        bordered={false}
        dataSource={props.data.content}
        render={(item, index) => (
          <List.Item className="hover:bg-slate-100 hover:text-red-700 cursor-pointer" key={index}>
            <a href={`/video/${item.news_id}`} target="_blank" rel="noreferrer">
              <div className="lg:flex">
                <div className="basis-2/5 flex m-2 justify-center rounded-lg">
                  <img
                    className="my-auto mx-auto w-full object-cover max-h-44 lg:max-h-28 rounded-lg"
                    src={item.bgimg}
                    alt={item.title}
                  />
                </div>
                <div className="basis-3/5">
                  <h3 className="text-lg">{item.title}</h3>
                  <h4 className="text-black">{item.subtitle}</h4>
                </div>
              </div>
            </a>
          </List.Item>
        )}
      />
    </div>
  );
};
