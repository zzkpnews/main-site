import { Avatar, List } from '@arco-design/web-react';

export const VideoPlayList = () => {
  return (
    <div>
      <List
        dataSource={new Array(6).fill({
          title: 'Beijing Bytedance Technology Co., Ltd.',
          description: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
        })}
        render={(item, index) => (
          <List.Item key={index}>
            <List.Item.Meta
              avatar={<Avatar shape="square">A</Avatar>}
              title={item.title}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </div>
  );
};
