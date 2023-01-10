import { TopicItem } from "@/models/data";
import { List } from "@arco-design/web-react";

export const TopicBox = (props: { initialData?: TopicItem[] }) => {
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-red-700 text-xl font-bold px-4 my-2">{"话题"}</h3>
        <a
          className="hover:text-red-700 text-lg px-4 my-auto cursor-pointer"
          href="/topic"
          target="_blank"
          rel="noreferrer"
        >
          {"更多"}
        </a>
      </div>
      <List
        bordered={false}
        grid={{ column: 3, gutter: 0, span: 8, justify: "space-around" }}
        dataSource={props.initialData}
        render={(item, index) => (
          <a href={`/topic/${item.topic_id}`} key={index}>
            <List.Item>
              <img src={item.logo_url} alt={item.topic_describe} />
              {item.title}
            </List.Item>
          </a>
        )}
      />
    </div>
  );
};
