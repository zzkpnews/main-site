import { SpecialNewsBoxData } from '../models/data';

export const SpecialNewsBox = (props: { data: SpecialNewsBoxData }) => {
  return (
    <div className="bg-slate-50 rounded-sm px-2 pb-3 my-5 border-t-7 border-red-800">
      <h3 className="text-red-700 text-xl font-bold px-4 my-2">特别报道</h3>
      <img className="w-fit mx-auto rounded-md object-cover" src={props.data.img_url} alt={props.data.title} />
      <div className="mx-2 my-3">
        {props.data.lead_title && (
          <div className="mx-auto text-md font-bold text-gray-500">{props.data.lead_title}</div>
        )}
        <a className="hover:text-red-700 cursor-pointer" href={props.data.href} rel="noreferrer" target="_blank">
          <h3 className="mx-auto text-xl my-1 font-bold">{props.data.title}</h3>
        </a>
        {props.data.subtitle && <div className="mx-auto text-xl">{props.data.subtitle}</div>}
        {props.data.citation && <p className="my-2">{props.data.citation}</p>}
      </div>
    </div>
  );
};
