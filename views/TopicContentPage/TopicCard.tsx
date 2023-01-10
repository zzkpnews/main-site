import { TopicItem } from "@/models/data";

export const TopicCard = (props: { initialData?: TopicItem }) => {
  if (props.initialData == null) return null;
  return (
    <div className="flex justify-center border rounded-lg p-3">
      <img
        src={props.initialData.logo_url}
        className=" aspect-square h-28 m-3 rounded-lg my-auto"
        alt={props.initialData.topic_describe}
      />
      <div className="flex flex-col justify-center">
        <h3 className="text-2xl font-bold my-2">{`# ${props.initialData.title}`}</h3>
        <p>{props.initialData.topic_describe}</p>
      </div>
    </div>
  );
};
