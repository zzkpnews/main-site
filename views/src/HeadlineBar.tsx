import { APIResponse } from '../../api';
import { Headline } from '../../models/data';
import { print_api_error } from '../../utils/error';

const HeadlineBar = (props: { headline_response: APIResponse<Headline> }) => {
  if (props.headline_response.code !== 0) {
    print_api_error('headline', props.headline_response);
    return null;
  }

  return (
    <div className="tw-mt-5 tw-mb-5 md:tw-flex tw-justify-center">
      <img src="./headline-icon.png" className="tw-mx-auto md:tw-mx-5 tw-h-24 tw-w-24 tw-my-auto" alt="headline" />
      <div className="tw-flex tw-flex-col tw-justify-center">
        <span className="tw-text-center tw-block tw-text-lg tw-font-bold tw-text-gray-600">
          {props.headline_response.data?.lead_title}
        </span>
        <a href={props.headline_response.data?.href}>
          <h2 className="tw-text-center tw-cursor-pointer tw-block tw-text-4xl tw-font-bold tw-my-1 hover:tw-text-red-700">
            {props.headline_response.data?.title}
          </h2>
        </a>
        <span className="tw-text-center tw-block tw-text-lg tw-text-gray-600">
          {props.headline_response.data?.subtitle}
        </span>
      </div>
    </div>
  );
};

export { HeadlineBar };
