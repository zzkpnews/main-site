import { List, Pagination } from '@arco-design/web-react';

export const ColumnContentVideoList = () => {
  return (
    <div>
      <h3 className="text-xl font-bold text-gray-600">{"视频"}</h3>
      <List
        bordered={false}
        grid={{ md: 6, lg: 6, gutter: 0 }}
        dataSource={new Array(8).fill({
          title: 'Beijing Bytedance Technology Co., Ltd.',
          subtitle: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          href:"/video/test"
        })}
        render={(item, index) => (
          <List.Item key={index}>
            <a className="cursor-pointer hover:text-red-700" href={item.href} rel="noreferrer" target={'_blank'}>
              <div className="lg:flex">
                <div className="my-auto mx-1">
                  <img
                    className="my-auto rounded-md"
                    src="https://oss-alpha-static-zaobao.oss-cn-hongkong.aliyuncs.com/s3fs-public/styles/article_large_crop/public/2022-10/ZB_1030_CJ_doc7ncuxlsoltk11saozcrd_29183017_chngmj.jpg?2778524"
                    alt=""
                  />
                  <h3 className="text-lg ">{item.title}</h3>
                </div>
              </div>
            </a>
          </List.Item>
        )}
      />
      <div className="flex justify-center my-2">
        <Pagination simple total={50} size="small" />
      </div>
    </div>
  );
};
