import { BookItem } from "@/models/data";
import { timestampToTime } from "@/utils/time";
import { List, Pagination } from "@arco-design/web-react";

export const CreatorBooksList = (props: { initialData: BookItem[] }) => {
  const scrollToPageTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <div className="m-1 p-2 rounded-lg">
        <List
          bordered={false}
          dataSource={props.initialData}
          render={(item) => (
            <List.Item>
              <a
                className="cursor-pointer hover:text-red-700"
                href={`/book/${item.book_id}`}
                rel="noreferrer"
                target={"_blank"}
              >
                <div className="my-auto mx-1 py-2 md:flex">
                  <img
                    className="my-auto mx-auto rounded-md object-cover h-32 w-24"
                    src={item.img_url}
                    alt={item.citation}
                  />
                  <div className="mx-2 my-3">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-md text-gray-600">{item.citation}</p>
                    <div className="flex justify-end">
                      <div className="text-md">
                        {timestampToTime(item.time_stamp)}
                      </div>
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
