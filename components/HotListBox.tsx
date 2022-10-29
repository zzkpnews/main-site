import { List } from '@arco-design/web-react';

export const HotListBox = () => {
  return (
    <div className="bg-slate-50 rounded-md px-2 border-t-7 border-red-800">
      <h3 className="text-red-700 text-xl font-bold px-4 my-2">
        热点新闻
      </h3>
      <List
        bordered={false}
        dataSource={new Array(4).fill({
          title: 'Beijing Bytedance Technology Co., Ltd.',
          description: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
        })}
        render={(item, index) => (
          <List.Item key={index}>
            <List.Item.Meta title={item.title} description={item.description} />
          </List.Item>
        )}
      />
    </div>
  );
};
