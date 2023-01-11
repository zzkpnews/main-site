import { Divider, List } from '@arco-design/web-react';
import { useId } from 'react';

export const TopicIndexList = () => {
  return (
    <div>
      {Array(6).fill(
        <div key={useId()}>
          <div className="flex justify-between my-5">
            <h3 className="text-xl font-bold text-red-700">河南看点</h3>
            <a className="text-lg mx-5 hover:text-red-700 cursor-pointer">更多</a>
          </div>
          <div className="xl:flex">
            <div className="my-auto">
              <List
                bordered={false}
                grid={{ md: 12, lg: 12, gutter: 0 }}
                dataSource={new Array(8).fill({
                  title: 'Beijing Bytedance Technology Co., Ltd.',
                  subtitle: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
                  href: '/article/test',
                })}
                render={(item, index) => (
                  <List.Item key={index}>
                    <a
                      className="cursor-pointer hover:text-red-700"
                      href={item.href}
                      rel="noreferrer"
                      target={'_blank'}
                    >
                      <h3 className="text-lg ">{item.title}</h3>
                      {item.subtitle && <h4 className="text-sm my-1 text-gray-600">{item.subtitle}</h4>}
                    </a>
                  </List.Item>
                )}
              />
            </div>
          </div>
          <Divider />
        </div>
      )}
    </div>
  );
};
