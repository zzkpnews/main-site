import { NewsItem } from "@/models/data";

export const SpecialNewsBox = (props: { initialData: NewsItem }) => {
  return (
    <div className="bg-slate-50 rounded-sm px-4 pb-3 my-5 border-t-7 border-red-800">
      <h3 className="text-red-700 text-xl font-bold my-2">{"特别报道"}</h3>
      <img
        className="aspect-video mx-auto rounded-sm object-cover"
        src={props.initialData.bgimg}
        alt={props.initialData.title}
      />
      <div className="mx-2 my-3">
        {props.initialData.lead_title && (
          <div className="mx-auto text-md font-bold text-gray-500">
            {props.initialData.lead_title}
          </div>
        )}
        <a
          className="hover:text-red-700 cursor-pointer"
          href={`${props.initialData.type}/${props.initialData.news_id}`}
          rel="noreferrer"
          target="_blank"
        >
          <h3 className="mx-auto text-xl my-1 font-bold">
            {props.initialData.title}
          </h3>
        </a>
        {props.initialData.subtitle && (
          <div className="mx-auto text-xl">{props.initialData.subtitle}</div>
        )}
        {props.initialData.citation && (
          <p className="my-2">{props.initialData.citation}</p>
        )}
      </div>
    </div>
  );
};
