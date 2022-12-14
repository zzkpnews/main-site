import { NewsItem } from "@/models/data";
import { timestampToTime } from "@/utils/time";
import { List, Tag, Pagination } from "@arco-design/web-react";

export const CreatorVideoList = (props: { initialData?: NewsItem[] }) => {
  return (
    <>
      {" "}
      <List
        bordered={false}
        className="w-full"
        size="small"
        dataSource={props.initialData}
        render={(item, index) => (
          <List.Item
            key={index}
            className="hover:bg-slate-50 active:bg-slate-100 cursor-pointer"
          >
            <a href={`/video/${item.news_id}`}>
              <div className="lg:flex justify-center">
                <div className="basis-2/5 my-2">
                  <img
                    className="rounded-md"
                    src={item.bgimg}
                    alt={item.citation}
                  />
                </div>
                <div className="mx-2 my-2 basis-3/5 flex flex-col justify-center">
                  <div className="mx-auto text-md font-bold">
                    {item.lead_title}
                  </div>
                  <h3 className="mx-auto text-xl font-bold">{item.title}</h3>
                  <div className="mx-auto text-md font-bold">
                    {item.subtitle}
                  </div>
                  <p>{item.citation}</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="text-md">
                  {timestampToTime(item.time_stamp)}
                </div>
                <div className="text-md">
                  <Tag color="gray">{item.column_title}</Tag>
                </div>
              </div>
            </a>
          </List.Item>
        )}
      />
      <div className="flex justify-center my-5">
        <Pagination simple total={50} size="small" />
      </div>
    </>
  );
};
