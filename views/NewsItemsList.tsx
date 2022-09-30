import { Button, List, Tag } from '@arco-design/web-react';
import classNames from 'classnames';
import { NewsListItem } from '../types/NewsItem';

/**
 * 新闻条目表组件，这是一个纯函数组件
 */
export default function NewsItemsList(props: {
  /**
   * 新闻数据列表
   */
  newsList: NewsListItem[];
  /**
   * 指示列表是否可加载
   */
  loadable: boolean;
  /**
   * 指示列表是否为正在加载状态
   */
  loading: boolean;
  /**
   * 是否显示列表边框
   */
  bordered: boolean;
  /**
   * 加载数据的方法。点击加载按钮后则执行这个方法
   */
  loadFunc: () => void;
}): JSX.Element {
  return (
    <div className="tw-bg-white">
      <List
        bordered={props.bordered}
        className=""
        size={'default'}
        dataSource={props.newsList}
        render={(item, index) => (
          <List.Item className="hover:tw-bg-gray-200 active:tw-bg-gray-300 tw-cursor-pointer" key={index}>
            <a href={`/columns/${item.columnId}/${item.type}/${item.itemId}`} target={'_blank'}>
              <div className="tw-flex tw-flex-col md:tw-flex-row">
                {item.bgimg ? (
                  <div className="md:tw-w-1/3 tw-my-auto">
                    <img className=" tw-h-44  tw-object-cover tw-flex  tw-w-full tw-rounded-lg" src={item.bgimg} />
                  </div>
                ) : null}
                <div
                  className={classNames(
                    { 'md:tw-w-2/3': item.bgimg },
                    'tw-mx-5 tw-my-3 tw-flex tw-flex-col tw-justify-center'
                  )}
                >
                  <span className="tw-font-bold tw-text-gray-600 tw-text-md">{item.leadTitle}</span>
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
                  })(item.timestamp)}
                </span>
                <Tag color="red" defaultChecked>
                  {item.columnName}
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
          onClick={props.loadFunc}
        >
          {'加载更多'}
        </Button>
      </div>
    </div>
  );
}

NewsItemsList.defaultProps = {
  newsList: [],
  loading: false,
  loadable: true,
  bordered: true,
};
