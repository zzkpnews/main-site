import { ArticleNews } from "@/models/data";
import { timestampToTime } from "@/utils/time";
import { Avatar, Button, Divider } from "@arco-design/web-react";

export const ArticleReader = (props: { initialData: ArticleNews }) => {
  const article_content: string = "";
  return (
    <div className="border rounded-lg">
      <img
        className="w-full max-h-96 object-cover rounded-t-lg"
        src={props.initialData.bgimg}
        alt={props.initialData.citation}
      />
      <div className="px-5 py-2">
        <h3 className="text-md">{props.initialData.lead_title}</h3>
        <h2 className="text-2xl font-bold">{props.initialData.title}</h2>
        <h2 className="text-xl">{props.initialData.subtitle}</h2>
        <div className="flex justify-between text-right my-2 flex-wrap">
          <div className="flex flex-wrap">
            <span className="mr-2">{`作者：${props.initialData.author}`}</span>
            <span>{`编辑：${props.initialData.editor}`}</span>
          </div>
          <div>{timestampToTime(props.initialData.time_stamp)}</div>
        </div>
      </div>
      <Divider />
      <div className="flex justify-between mx-5 my-2">
        <div className="flex">
          <Avatar className="mr-2 shrink-0">
            {props.initialData.creator_logo ? (
              <img
                src={props.initialData.creator_logo}
                alt={props.initialData.creator_describe}
              />
            ) : (
              props.initialData.creator_id.at(0)
            )}
          </Avatar>
          <div className="mr-2 my-auto">{props.initialData.creator_title}</div>
        </div>
        <Button
          type="primary"
          className="my-auto"
          href={`/creator/${props.initialData.creator_id}`}
          target="blank"
        >
          {"主页"}
        </Button>
      </div>
      <div className="p-5">
        <div
          dangerouslySetInnerHTML={{
            __html: article_content,
          }}
        />
      </div>
    </div>
  );
};
