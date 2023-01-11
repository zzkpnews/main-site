import { GroupItem, NewsItem } from "@/models/data";
import { Divider, List } from "@arco-design/web-react";

export const GroupIndexList = (props: {
  initialData?: {
    group: GroupItem;
    article_list: NewsItem[];
    video_list: NewsItem[];
  }[];
}) => {
  return (
    <div>
      {props.initialData?.map((item, index) => (
        <div key={`groups-${index}`}>
          <div className="flex justify-between">
            <h3 className="text-xl font-bold text-red-700">
              {item.group.title}
            </h3>
            <a className="text-lg mx-5" href={`/group/${item.group.group_id}`}>
              {"更多"}
            </a>
          </div>
          <div className="xl:flex">
            <div className="basis-1/2 my-auto">
              <List
                bordered={false}
                grid={{ md: 12, lg: 12, gutter: 0 }}
                dataSource={item.article_list}
                render={(item, index) => (
                  <List.Item key={index}>
                    <a
                      className="cursor-pointer hover:text-red-700"
                      href={`/article/${item.news_id}`}
                      rel="noreferrer"
                      target={"_blank"}
                    >
                      <h3 className="text-lg ">{item.title}</h3>
                      {item.subtitle && (
                        <h4 className="text-sm my-1 text-gray-600">
                          {item.subtitle}
                        </h4>
                      )}
                    </a>
                  </List.Item>
                )}
              />
            </div>
            <div className="basis-1/2 my-auto">
              <List
                bordered={false}
                grid={{ sm: 24, md: 12, lg: 8, gutter: 0 }}
                dataSource={item.video_list}
                render={(item, index) => (
                  <List.Item key={index}>
                    <a
                      className="cursor-pointer hover:text-red-700"
                      href={`/video/${item.news_id}`}
                      rel="noreferrer"
                      target={"_blank"}
                    >
                      <img src={item.bgimg} alt={item.citation} />
                      <h3 className="text-md font-bold">{item.title}</h3>
                    </a>
                  </List.Item>
                )}
              />
            </div>
          </div>
          <Divider />
        </div>
      ))}
    </div>
  );
};
