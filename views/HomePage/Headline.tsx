import { HeadlineData } from "@/models/data";

export const Headline = (props: { initialData: HeadlineData }) => {
  return (
    <a target={"_blank"} rel="noreferrer" href={props.initialData.url}>
      <div className="text-center my-8">
        {props.initialData.lead_title && (
          <h3 className="text-md font-bold text-gray-500">
            {props.initialData.lead_title}
          </h3>
        )}
        {props.initialData.title && (
          <h2
            className={
              "text-3xl font-bold my-2 hover:text-red-700 cursor-pointer"
            }
          >
            {props.initialData.title}
          </h2>
        )}
        {props.initialData.subtitle && (
          <h3 className="text-lg font-bold">{props.initialData.subtitle}</h3>
        )}
      </div>
    </a>
  );
};
