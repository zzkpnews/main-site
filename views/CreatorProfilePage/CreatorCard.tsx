import { Avatar, Button } from "@arco-design/web-react";

export const CreatorCard = (props: {
  title: string;
  phone: string;
  email: string;
  url?: string;
  logo?: string;
  describe?: string;
}) => {
  return (
    <div className="my-2 py-10">
      <div className="flex justify-center shrink-0 mx-auto my-auto">
        <Avatar size={80}>
          {props.logo ? (
            <img src={props.logo} alt={props.title} />
          ) : (
            props.title.at(0)
          )}
        </Avatar>
      </div>
      <div className="my-auto mx-5">
        <h3 className="text-lg font-bold text-center my-3">{props.title}</h3>
        <div className="flex justify-center">
          <Button type="primary" className="my-auto" href={props.url}>
            {"访问官网"}
          </Button>
          {props.url ? (
            <Button type="primary" className="my-auto" href={props.url}>
              {"访问官网"}
            </Button>
          ) : null}
        </div>
        <p className="my-2">{props.describe}</p>
        <div className="flex flex-wrap justify-between">
          <div className="my-2">
            <div className="mr-3 my-auto">{`电话：${props.phone}`}</div>
            <div className="mr-3 my-auto">{`邮箱：${props.email}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
