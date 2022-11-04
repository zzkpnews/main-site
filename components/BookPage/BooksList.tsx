import { List, Pagination } from '@arco-design/web-react';

export const BooksList = () => {
  const scrollToPageTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div>
      <div className="m-1 p-2 rounded-lg">
        <List
          grid={{ sm: 24, md: 24, lg: 12, gutter: 0 }}
          bordered={false}
          dataSource={new Array(12).fill({
            title: 'Beijing Bytedance Technology Co., Ltd.',
            subtitle: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
            href: '/video/test',
          })}
          render={(item, index) => (
            <List.Item key={index}>
              <a className="cursor-pointer hover:text-red-700" href={item.href} rel="noreferrer" target={'_blank'}>
                <div className=" my-auto mx-1 py-2 md:flex">
                  <img
                    className="my-auto mx-auto rounded-md object-cover h-56 w-40"
                    src="https://oss-alpha-static-zaobao.oss-cn-hongkong.aliyuncs.com/s3fs-public/styles/article_large_crop/public/2022-10/ZB_1030_CJ_doc7ncuxlsoltk11saozcrd_29183017_chngmj.jpg?2778524"
                    alt=""
                  />
                  <div className="mx-2 my-3">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-md text-gray-600">
                      {
                        'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.Beijing ByteDance Technology Co.'
                      }
                    </p>
                    <div className="flex justify-end">
                      <div className="text-md">2022年09月19日</div>
                    </div>
                  </div>
                </div>
              </a>
            </List.Item>
          )}
        />
        {/* <LoadingBlock /> */}
      </div>
      <div className="flex justify-center my-2">
        <Pagination simple total={50} size="small" onChange={scrollToPageTop} />
      </div>
    </div>
  );
};
