import { Avatar, List } from '@arco-design/web-react';

export const VideoPlayList = () => {
  return (
    <div className="bg-slate-50 rounded-sm px-2 pb-3 my-5 border-t-7 border-red-800">
      <List
        bordered={false}
        dataSource={new Array(6).fill({
          title: 'Beijing Bytedance Technology Co., Ltd.',
          description: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
        })}
        render={(item, index) => (
          <List.Item className='hover:bg-slate-100 hover:text-red-700 cursor-pointer' key={index}>
            <div>
              <h3 className="text-lg">标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</h3>
              <h4 className='text-black'>副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题</h4>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};
