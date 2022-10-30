import { List } from '@arco-design/web-react';

export const SpecialNewsBox = () => {
  return (
    <div className="bg-slate-50 rounded-md px-2 pb-3 my-5 border-t-7 border-red-800">
      <h3 className="text-red-700 text-xl font-bold px-4 my-2">特别报道</h3>
      <img
        className="w-fit mx-auto rounded-md object-cover"
        src="https://oss-alpha-static-zaobao.oss-cn-hongkong.aliyuncs.com/s3fs-public/styles/article_large_crop/public/2022-10/main_2.jpg?2778417"
      />
      <div className="mx-2 my-3">
        <div className="mx-auto text-md font-bold">新闻标题引题引题引题引题</div>
        <h3 className="mx-auto text-xl font-bold">新闻标题标题标题标题标题</h3>
        <div className="mx-auto text-md font-bold">新闻标题引题引题引题引题</div>
        <p>
          引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言
        </p>
      </div>
    </div>
  );
};
