import { Avatar } from '@arco-design/web-react';

export const CreatorCard = () => {
  return (
    <div
      className="rounded-lg bg-cover bg-center  w-full h-52 flex"
      style={{
        backgroundImage:
          'url(https://static.zaobao.com/s3fs-public/2022-10/2022-09-14t034221z_1576905416_rc2qgw9s33ob_rtrmadp_3_apple-tsmc_0.jpg?VersionId=cxs1lVGq_JYIB87nXE06oLfRL0OJduD8)',
      }}
    >
      <Avatar className="mx-auto my-auto shadow-lg" size={150}>张</Avatar>
    </div>
  );
};
