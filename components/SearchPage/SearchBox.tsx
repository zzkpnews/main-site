import { Avatar, Button, Input, List, Space } from '@arco-design/web-react';
const InputSearch = Input.Search;
export const SearchBox = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-center mx-5">
        <h2 className="mx-auto text-3xl font-bold my-5">站内内容搜索</h2>
        <InputSearch
          size="large"
          searchButton="搜索"
          className="mx-auto"
          allowClear
          placeholder="输入标题、引言等关键词"
        />
      </div>
      <div className="my-5" style={{ minHeight: '50vh' }}>
        <List
          bordered={false}
          dataSource={new Array(8).fill({
            title: 'Beijing Bytedance Technology Co., Ltd.',
            subtitle: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          })}
          render={(item, index) => (
            <List.Item key={index}>
              <a className="hover:text-red-700 cursor-pointer">
                <div className="flex flex-wrap">
                  <h3 className="text-lg mr-3">{item.title}</h3>
                  {item.subtitle && <h4 className="text-sm my-1 text-gray-600">{item.subtitle}</h4>}
                </div>
              </a>
            </List.Item>
          )}
        />
      </div>
      <div className="flex justify-center my-5">
        <Button type="primary" size="large">
          加载更多
        </Button>
      </div>
    </div>
  );
};
