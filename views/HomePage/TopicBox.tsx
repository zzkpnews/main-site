import { List } from '@arco-design/web-react';

export const TopicBox = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-red-700 text-xl font-bold px-4 my-2">{'话题'}</h3>
        <a
          className="hover:text-red-700 text-lg px-4 my-auto cursor-pointer"
          href="/topic"
          target="_blank"
          rel="noreferrer"
        >
          {'更多'}
        </a>
      </div>
      <List
        bordered={false}
        grid={{ column: 3, gutter: 0, span: 8, justify: 'space-around' }}
        dataSource={new Array(5).fill({
          title: 'Beijing Bytedance Technology Co., Ltd.',
          description: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
        })}
        render={(item, index) => (
          <List.Item key={index}>
            <img src="https://pic3.zhimg.com/v2-22a8cbe795199d72ff83e37860663b71_xl.jpg?source=32738c0c" alt="" />
            sssssss
          </List.Item>
        )}
      />
    </div>
  );
};
