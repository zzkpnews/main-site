import { NewsItem } from "@/models/data";
import { List } from "@arco-design/web-react";

export const GroupContentHotList = (props: {
  initialData?: NewsItem[];
}) => {
  return (
    <div>
      <h3 className="text-xl text-center font-bold text-gray-600">
        {"专栏组热点"}
      </h3>
      <List
        bordered={false}
        grid={{ md: 12, lg: 12, gutter: 0 }}
        dataSource={props.initialData}
        render={(item, index) => (
          <List.Item key={index}>
            <a
              className="cursor-pointer hover:text-red-700"
              href={`/${item.type}/${item.news_id}`}
              rel="noreferrer"
              target={"_blank"}
            >
              <div className="lg:flex">
                <div className="md:basis-1/3 my-auto mx-1">
                  <img
                    className="my-auto rounded-md"
                    src={item.bgimg}
                    alt={item.citation}
                  />
                </div>
                <div className="md:basis-2/3 mx-1">
                  <h3 className="text-lg ">{item.title}</h3>
                  {item.subtitle && (
                    <h4 className="text-sm my-1 text-gray-600">
                      {item.subtitle}
                    </h4>
                  )}
                </div>
              </div>
            </a>
          </List.Item>
        )}
      />
    </div>
  );
};
