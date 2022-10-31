import { Avatar, Divider, List } from '@arco-design/web-react';
import { useId } from 'react';

export default function GroupPageNewsList() {
  return (
    <div>
      {Array(6).fill(
        <div key={useId()}>
          <div className="flex justify-between">
            <h3 className="text-xl font-bold text-red-700">河南看点</h3>
            <a className="text-lg mx-5">更多</a>
          </div>
          <div className="xl:flex">
            <div className="basis-1/2 my-auto">
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
            <div className="basis-1/2 my-auto">
              <List
                bordered={false}
                grid={{ sm: 24, md: 12, lg: 8, gutter: 0 }}
                dataSource={new Array(9).fill({
                  title: 'Beijing Bytedance Technology Co., Ltd.',
                  description: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
                  href: '/video/test',
                })}
                render={(item, index) => (
                  <List.Item key={index}>
                    <a
                      className="cursor-pointer hover:text-red-700"
                      href={item.href}
                      rel="noreferrer"
                      target={'_blank'}
                    >
                      <img
                        className=""
                        src="https://oss-alpha-static-zaobao.oss-cn-hongkong.aliyuncs.com/s3fs-public/styles/article_large_crop/public/2022-10/ZB_1030_CJ_doc7ncuxlsoltk11saozcrd_29183017_chngmj.jpg?2778524"
                        alt=""
                      />
                      <h3 className="text-md font-bold">视频标题视频标题视频标题视频标题视频标题视频标题</h3>
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
}
