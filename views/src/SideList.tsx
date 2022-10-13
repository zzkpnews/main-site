import { List } from '@arco-design/web-react';
import { NewsItem } from '../../models';

const SideList = (props: { title: string; data: NewsItem[] }): JSX.Element => {
  return (
    <div className="tw-border tw-rounded-lg tw-p-4 tw-mx-2 tw-my-3 tw-bg-white">
      <h2 className="tw-font-bold tw-text-lg tw-text-red-700">{props.title}</h2>
      <List
        size="small"
        bordered={false}
        dataSource={props.data}
        render={(item, index) => (
          <List.Item className="hover:tw-bg-gray-200" key={index}>
            <a href={`/columns/${item.column_id}/${item.type}/${item.news_id}`} target={'_blank'}>
              <div className="tw-flex tw-cursor-pointer tw-p-0">
                <div className="tw-basis-1/3 tw-flex tw-flex-col tw-justify-center tw-m-0">
                  <img
                    src={item.bgimg!}
                    referrerPolicy="no-referrer"
                    className="tw-rounded-md tw-object-cover tw-h-20 tw-m-0"
                  />
                </div>
                <div className=" tw-basis-2/3 tw-px-2 tw-flex tw-justify-center tw-flex-col">
                  <span className="tw-font-bold tw-text-sm">{item.title}</span>
                  <p
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                    className="tw-text-sm"
                  >
                    {item.citation}
                  </p>
                </div>
              </div>
            </a>
          </List.Item>
        )}
      />
    </div>
  );
};

export { SideList };
