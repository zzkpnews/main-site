import { BiErrorCircle } from 'react-icons/bi';
const ErrorBlock = (props: { message?: string }) => {
  return (
    <div
      className="tw-flex tw-justify-center tw-my-auto tw-rounded-lg tw-bg-white tw-mx-2 tw-mb-2"
      style={{ height: '100px' }}
    >
      <div className="tw-my-auto tw-text-red-600">
        <BiErrorCircle size={'4em'} className="tw-mx-auto" />
        <span className="tw-w-full tw-block tw-text-center tw-text-lg tw-font-bold">
          {props.message ?? '模块加载失败'}
        </span>
      </div>
    </div>
  );
};

export { ErrorBlock };
