import { Button, List, Tag } from '@arco-design/web-react';
import classNames from 'classnames';
import { APIResponse } from '../../api';
import { NewsListItem } from '../../models/data';

const NewsList = (props: {
  list: APIResponse<NewsListItem[]>;
  loadable: boolean;
  loading: boolean;
  bordered: boolean;
  loadHandler: () => void;
}): JSX.Element => {
  return (
    <div className={`tw-bg-white ${props.bordered ? 'tw-border' : ''} tw-rounded-lg`}>
      <List
        bordered={false}
        size={'default'}
        dataSource={props.list.data}
        render={(item, index) => (
          <List.Item className="hover:tw-bg-gray-200 active:tw-bg-gray-300 tw-cursor-pointer" key={index}>
            <a href={`/columns/${item.column_id}/${item.type}/${item.news_id}`} target={'_blank'}>
              <div className="tw-flex tw-flex-col md:tw-flex-row">
                {item.bgimg ? (
                  <div className="md:tw-w-1/3 tw-my-auto">
                    <img
                      className=" tw-h-44  tw-object-cover tw-flex  tw-w-full tw-rounded-lg"
                      src={item.bgimg}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ) : null}
                <div
                  className={classNames(
                    { 'md:tw-w-2/3': item.bgimg },
                    'tw-mx-5 tw-my-3 tw-flex tw-flex-col tw-justify-center'
                  )}
                >
                  <span className="tw-font-bold tw-text-gray-600 tw-text-md">{item.lead_title}</span>
                  <h2 className="tw-text-lg tw-font-bold tw-my-1">{item.title}</h2>
                  <h3 className=" tw-text-gray-800 tw-font-bold">{item.subtitle}</h3>
                  <p className="tw-my-2 tw-indent-8">{item.citation}</p>
                </div>
              </div>
              <div className="tw-flex tw-mt-2 tw-justify-between">
                <span className="tw-text-gray-500">
                  {((time_stamp) => {
                    const time = new Date(time_stamp * 1000);
                    return `${time.getFullYear()}年${time.getMonth()}月${time.getDay()}日`;
                  })(item.time_stamp)}
                </span>
                <Tag color="red" defaultChecked>
                  {item.column_title}
                </Tag>
              </div>
            </a>
          </List.Item>
        )}
      />
      <div className="tw-flex tw-justify-center">
        <Button
          className={'tw-my-3'}
          disabled={!props.loadable}
          size="large"
          loading={props.loading}
          type="primary"
          onClick={props.loadHandler}
        >
          {'加载更多'}
        </Button>
      </div>
    </div>
  );
};

NewsList.defaultProps = {
  list: [],
  loading: false,
  loadable: true,
  bordered: true,
};

export { NewsList };
