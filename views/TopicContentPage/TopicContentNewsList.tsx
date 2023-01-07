import { Button, List, Tag } from '@arco-design/web-react';

export const TopicContentNewsList = () => {
  return (
    <div>
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
                <div className="mx-2 my-2 basis-4/5 flex flex-col justify-center">
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
      <div className="flex justify-center my-5">
        <Button type="primary" size="large">
          加载更多
        </Button>
      </div>
    </div>
  );
};
