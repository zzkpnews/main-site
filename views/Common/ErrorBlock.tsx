import { MdErrorOutline } from 'react-icons/md';

export const ErrorBlock = (props: { code: number; message?: string }) => {
  return (
    <div className="flex flex-col justify-center w-full h-full">
      <MdErrorOutline className=" my-2 mx-auto" />
      <h3 className="text-md font-bold mx-auto">{`${props.code}:${props.message}`}</h3>
    </div>
  );
};
