import { ColumnIndexItem } from "@/models/data";
import { Divider, List } from "@arco-design/web-react";
import { EmptyBlock } from "../Common";

export const ColumnNewsList = (props: { initialData?: ColumnIndexItem[] }) => {
  if (props.initialData === undefined || props.initialData.length === 0) {
    return <EmptyBlock />;
  }
  return (
    <div>
      {props.initialData?.map((column_index_item, index) => (
        <div key={`column-index-${index}`}>
          <div className="flex justify-between my-5">
            <h3 className="text-xl font-bold text-red-700">
              {column_index_item.title}
            </h3>
            <a
              className="text-lg mx-5 hover:text-red-700 cursor-pointer"
              href={`/column/${column_index_item.column_id}`}
            >
              {"更多"}
            </a>
          </div>
          <div className="xl:flex">
            <div className="basis-2/3 my-auto">
              <List
                bordered={false}
                grid={{ md: 12, lg: 12, gutter: 0 }}
                dataSource={column_index_item.recent_news}
                render={(recent_news_item) => (
                  <List.Item>
                    <a
                      className="cursor-pointer hover:text-red-700"
                      href={`/${recent_news_item.type}/${recent_news_item.news_id}`}
                      rel="noreferrer"
                      target={"_blank"}
                    >
                      <h3 className="text-lg ">{recent_news_item.title}</h3>
                      {recent_news_item.subtitle && (
                        <h4 className="text-sm my-1 text-gray-600">
                          {recent_news_item.subtitle}
                        </h4>
                      )}
                    </a>
                  </List.Item>
                )}
              />
            </div>
            <div className="basis-1/3 my-auto">
              <List
                className="p-2 bg-gray-50"
                bordered={false}
                grid={{ span: 24, gutter: 0 }}
                dataSource={column_index_item.hot_news}
                render={(hot_news_item, index) => (
                  <List.Item key={index}>
                    <a
                      className="cursor-pointer hover:text-red-700"
                      href={`/${hot_news_item.type}/${hot_news_item.news_id}`}
                      rel="noreferrer"
                      target={"_blank"}
                    >
                      <h3 className="text-lg ">{hot_news_item.title}</h3>
                      {hot_news_item.subtitle && (
                        <h4 className="text-sm my-1 text-gray-600">
                          {hot_news_item.subtitle}
                        </h4>
                      )}
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
