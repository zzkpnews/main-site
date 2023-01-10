export const Footer = () => {
  return (
    <footer className=" bg-slate-800 text-slate-300 py-10 px-5 xl:px-40 lg:px-35 md:px-25 sm:px-20">
      <div className="my-5 md:flex-row flex-col justify-around">
        <div className="flex my-2">
          <h3 className="text-lg font-bold basis-1/5 my-2">友情链接</h3>
          <div className="my-auto basis-4/5 flex flex-wrap">
            <a className="mx-2 px-auto my-2 hover:text-slate-50 cursor-pointer">
              商务合作
            </a>
            <a className="mx-2 px-auto my-2 hover:text-slate-50 cursor-pointer">
              人才招聘
            </a>
            <a className="mx-2 px-auto my-2 hover:text-slate-50 cursor-pointer">
              成为创作者
            </a>
            <a className="mx-2 px-auto my-2 hover:text-slate-50 cursor-pointer">
              开发者社区
            </a>
            <a className="mx-2 px-auto my-2 hover:text-slate-50 cursor-pointer">
              商务合作
            </a>
          </div>
        </div>
        <div className="flex my-2">
          <h3 className="text-lg font-bold basis-1/5 my-2">加入我们</h3>
          <div className="my-auto basis-4/5 flex flex-wrap">
            <a className="mx-2 px-auto my-2 hover:text-slate-50 cursor-pointer">
              商务合作
            </a>
            <a className="mx-2 px-auto my-2 hover:text-slate-50 cursor-pointer">
              人才招聘
            </a>
            <a className="mx-2 px-auto my-2 hover:text-slate-50 cursor-pointer">
              成为创作者
            </a>
            <a className="mx-2 px-auto my-2 hover:text-slate-50 cursor-pointer">
              开发者社区
            </a>
            <a className="mx-2 px-auto my-2 hover:text-slate-50 cursor-pointer">
              商务合作
            </a>
          </div>
        </div>
      </div>
      <div className="text-center md:text-start my-1">
        <a>服务协议与本站创作规则</a>
      </div>
      <div className="text-center md:text-start my-1">
        中原科技网 版权所有 © All Rights Reserved.
      </div>
      <div className="text-center md:text-start my-1">
        豫ICP备 1654344984686
      </div>
    </footer>
  );
};
