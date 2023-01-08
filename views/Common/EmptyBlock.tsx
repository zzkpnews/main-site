import { ImFilesEmpty } from "react-icons/im";

export const EmptyBlock = () => {
  return (
    <div className="flex justify-center w-full h-96 py-10">
      <div className="flex flex-col justify-center">
        <ImFilesEmpty className="mx-auto" size="150px" />
        <h2 className="text-center text-3xl my-2 font-bold">
          <div className="my-2">{"这里空空如也"}</div>
        </h2>
      </div>
    </div>
  );
};
