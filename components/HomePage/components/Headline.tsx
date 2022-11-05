import { HeadlineData } from '../../models/data';

export const Headline = (props: {data:HeadlineData}) => {
  return (
    <a target={'_blank'} rel="noreferrer" href={props.data.href}>
      <div className="text-center">
        {props.data.lead_title && <h3 className="text-md font-bold text-gray-500">{props.data.lead_title}</h3>}
        {props.data.title && <h2 className={'text-3xl font-bold my-2 hover:text-red-700 cursor-pointer'}>{props.data.title}</h2>}
        {props.data.subtitle && <h3 className="text-lg font-bold">{props.data.subtitle}</h3>}
      </div>
    </a>
  );
};
