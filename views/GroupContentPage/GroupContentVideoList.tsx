import { NewsListItem } from "@/models/data";
import { List, Pagination } from "@arco-design/web-react";

export const GroupContentVideoList = (props: {
  initialData?: NewsListItem[];
}) => {
  return (
    <div>
      <h3 className="text-xl text-center font-bold text-gray-600">{"视频"}</h3>
      <List
        bordered={false}
        grid={{ md: 6, lg: 6, gutter: 0 }}
        dataSource={props.initialData}
        render={(item, index) => (
          <List.Item key={index}>
            <a
              className="cursor-pointer hover:text-red-700"
              href={`/video/${item.news_id}`}
              rel="noreferrer"
              target={"_blank"}
            >
              <div className="lg:flex">
                <div className="my-auto mx-1">
                  <img
                    className="my-auto rounded-md"
                    src={item.bgimg}
                    alt={item.citation}
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
