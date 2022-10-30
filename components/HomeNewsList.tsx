import { Avatar, List, Tabs, Tag } from '@arco-design/web-react';
import { Collapse, Divider } from '@arco-design/web-react';
const CollapseItem = Collapse.Item;

export const NewsList = () => {
  return (
    <div className="">
      <Tabs defaultActiveTab="1">
        <Tabs.TabPane key="1" title={<h3 className="text-red-700 text-xl font-bold mx-1 my-2">最新</h3>}>
          <List
            bordered={false}
            className="w-full"
            size="small"
            dataSource={[
              'Beijing Bytedance Technology Co., Ltd.',
              'Bytedance Technology Co., Ltd.',
              'Beijing Toutiao Technology Co., Ltd.',
              'Beijing Volcengine Technology Co., Ltd.',
              'Beijing Bytedance Technology Co., Ltd.',
              'Bytedance Technology Co., Ltd.',
              'Beijing Toutiao Technology Co., Ltd.',
              'Beijing Volcengine Technology Co., Ltd.',
              'Beijing Bytedance Technology Co., Ltd.',
              'Bytedance Technology Co., Ltd.',
              'Beijing Toutiao Technology Co., Ltd.',
              'Beijing Volcengine Technology Co., Ltd.',
              'Beijing Bytedance Technology Co., Ltd.',
              'Bytedance Technology Co., Ltd.',
              'Beijing Toutiao Technology Co., Ltd.',
              'Beijing Volcengine Technology Co., Ltd.',
              'Beijing Bytedance Technology Co., Ltd.',
              'Bytedance Technology Co., Ltd.',
              'Beijing Toutiao Technology Co., Ltd.',
              'Beijing Volcengine Technology Co., Ltd.',
            ]}
            render={(item, index) => (
              <List.Item key={index} className="hover:bg-slate-50 active:bg-slate-100 cursor-pointer">
                <a href="http://www.baidu.com">
                  <div className="lg:flex justify-center">
                    <div className="basis-2/5 my-2">
                      <img
                        className="rounded-md"
                        src="http://cpc.people.com.cn/NMediaFile/2022/1025/MAIN202210250016363698160563703.jpg"
                        alt=""
                      />
                    </div>
                    <div className="mx-2 my-2 basis-3/5 flex flex-col justify-center">
                      <div className="mx-auto text-md font-bold">新闻标题引题引题引题引题</div>
                      <h3 className="mx-auto text-xl font-bold">新闻标题标题标题标题标题</h3>
                      <div className="mx-auto text-md font-bold">新闻标题引题引题引题引题</div>
                      <p>
                        引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-md">2022年09月19日</div>
                    <div className="text-md">
                      <Tag color="gray">Github</Tag>
                    </div>
                  </div>
                </a>
              </List.Item>
            )}
          />
        </Tabs.TabPane>
        <Tabs.TabPane key="2" title={<h3 className="text-red-700 text-xl font-bold mx-1 my-2">专栏</h3>}>
          <div>
            <div className="flex justify-between">
              <h3 className="text-lg font-bold">河南看点</h3>
              <a className="text-lg mx-5">更多</a>
            </div>
            <div className="lg:flex">
              <div className="basis-1/2">
                <List
                  bordered={false}
                  dataSource={new Array(4).fill({
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
              <div className="basis-1/2">
                <List
                  bordered={false}
                  grid={{ span: 12, gutter: 0 }}
                  dataSource={new Array(3).fill({
                    title: 'Beijing Bytedance Technology Co., Ltd.',
                    description: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
                  })}
                  render={(item, index) => (
                    <List.Item key={index}>
                      <div>
                        <img
                          className=""
                          src="https://oss-alpha-static-zaobao.oss-cn-hongkong.aliyuncs.com/s3fs-public/styles/article_large_crop/public/2022-10/ZB_1030_CJ_doc7ncuxlsoltk11saozcrd_29183017_chngmj.jpg?2778524"
                          alt=""
                        />
                        <h3 className="text-md font-bold">视频标题视频标题视频标题视频标题视频标题视频标题</h3>
                      </div>
                    </List.Item>
                  )}
                />
              </div>
            </div>
            <Divider />
          </div>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};
