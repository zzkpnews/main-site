import { Collapse } from '@arco-design/web-react';
const CollapseItem = Collapse.Item;

export const BooksShowBox = () => {
  return (
    <div className="bg-slate-50 rounded-md px-2 pb-3 my-5 border-t-7 border-red-800">
      <div className="flex justify-between">
        <h3 className="text-red-700 text-xl font-bold px-4 my-2">书刊推荐</h3>
        <a className="hover:text-red-700 text-lg px-4 my-auto cursor-pointer">{'更多'}</a>
      </div>
      <Collapse accordion>
        <CollapseItem className="px-0" header="中原围棋 2022年6月8日" name="1">
          <div className="flex">
            <div className="basis-1/2 mx-1 my-auto">
              <img
                className="mx-auto my-auto rounded-md object-cover h-56 w-40"
                src="https://www.zzkpnews.com/d/file/p/2022/09-26/52de5733852a22ca6920fd5f18c84e76.jpg"
                alt=""
              />
            </div>
            <div className="basis-1/2 mx-1 my-auto">
              <h3 className="mx-auto text-sm font-bold">新闻标题标题标题标题标题</h3>
              <p className="text-sm">
                引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引
              </p>
            </div>
          </div>
        </CollapseItem>
        <CollapseItem header="Beijing Toutiao Technology Co., Ltd." name="2">
          Beijing Toutiao Technology Co., Ltd.
        </CollapseItem>
        <CollapseItem header="Beijing Toutiao Technology Co., Ltd." name="3">
          Beijing Toutiao Technology Co., Ltd.
        </CollapseItem>
      </Collapse>
    </div>
  );
};
