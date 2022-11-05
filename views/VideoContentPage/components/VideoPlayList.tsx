import { Avatar, List } from '@arco-design/web-react';

export const VideoPlayList = () => {
  return (
    <div className="bg-slate-50 rounded-sm px-2 pb-3 my-5 border-t-7 border-red-800">
      <List
        bordered={false}
        dataSource={new Array(5).fill({
          title: 'Beijing Bytedance Technology Co., Ltd.',
          description: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
        })}
        render={(item, index) => (
          <List.Item className="hover:bg-slate-100 hover:text-red-700 cursor-pointer" key={index}>
            <a href="https://www.baidu.com" target="_blank" rel="noreferrer">
              <div className="lg:flex">
                <div className="basis-2/5 flex m-2 justify-center rounded-lg">
                  <img
                    className="my-auto mx-auto w-full object-cover max-h-44 lg:max-h-28 rounded-lg"
                    src={'https://www.zzkpnews.com/d/file/p/2022/09-26/52de5733852a22ca6920fd5f18c84e76.jpg'}
                  />
                </div>
                <div className="basis-3/5">
                  <h3 className="text-lg">标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</h3>
                  <h4 className="text-black">副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题</h4>
                </div>
              </div>
            </a>
          </List.Item>
        )}
      />
    </div>
  );
};
