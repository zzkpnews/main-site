import { List } from '@arco-design/web-react';

export const NewsList = () => {
  return (
    <div className="p-2">
      <h3 className="text-red-700 text-3xl font-bold px-4 my-2">最新</h3>
      <List
        bordered={false}
        className="w-full"
        size="small"
        dataSource={[
          'Beijing Bytedance Technology Co., Ltd.',
          'Bytedance Technology Co., Ltd.',
          'Beijing Toutiao Technology Co., Ltd.',
          'Beijing Volcengine Technology Co., Ltd.',
          'China Beijing Bytedance Technology Co., Ltd.',
        ]}
        render={(item, index) => <List.Item key={index}>{item}</List.Item>}
      />
    </div>
  );
};
