import { HeadLine } from '../models/Headline';

export default function HomeHeadline(props: { data: HeadLine }): JSX.Element {
  return (
    <div className=" tw-mt-5 tw-mb-5 md:tw-flex tw-justify-center">
      <img src="./headline-icon.png" className="tw-mx-auto md:tw-mx-5 tw-h-24 tw-w-24 tw-my-auto" alt="headline" />
      <div className="tw-flex tw-flex-col tw-justify-center">
        <span className="tw-text-center tw-block tw-text-lg tw-font-bold tw-text-gray-600">{props.data.leadTitle}</span>
        <a href={props.data.href}>
          <h2 className="tw-text-center tw-cursor-pointer tw-block tw-text-4xl tw-font-bold tw-my-1 hover:tw-text-red-700">
            {props.data.title}
          </h2>
        </a>
        <span className="tw-text-center tw-block tw-text-lg tw-text-gray-600">{props.data.subtitle}</span>
      </div>
    </div>
  );
}
