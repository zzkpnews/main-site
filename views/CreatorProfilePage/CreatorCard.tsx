import { CreatorItem } from "@/models/data";
import { Avatar, Button } from "@arco-design/web-react";

export const CreatorCard = (props: { initialData?: CreatorItem }) => {
  return (
    <div className="my-2 py-10">
      <div className="flex justify-center shrink-0 mx-auto my-auto">
        <Avatar size={80}>
          {props.initialData?.logo_url ? (
            <img
              src={props.initialData.logo_url}
              alt={props.initialData.title}
            />
          ) : (
            props.initialData?.title.at(0)
          )}
        </Avatar>
      </div>
      <div className="my-auto mx-5">
        <h3 className="text-lg font-bold text-center my-3">
          {props.initialData?.title}
        </h3>
        <div className="flex justify-center">
          <Button
            type="primary"
            className="my-auto"
            href={props.initialData?.url}
          >
            {"访问官网"}
          </Button>
          {props.initialData?.url ? (
            <Button
              type="primary"
              className="my-auto"
              href={props.initialData?.url}
            >
              {"访问官网"}
            </Button>
          ) : null}
        </div>
        <p className="my-2">{props.initialData?.describe}</p>
        <div className="flex flex-wrap justify-between">
          <div className="my-2">
            <div className="mr-3 my-auto">{`电话：${props.initialData?.phone}`}</div>
            <div className="mr-3 my-auto">{`邮箱：${props.initialData?.email}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
