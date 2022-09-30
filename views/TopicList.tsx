export default function TopicList(): JSX.Element {
  return (
    <div className="tw-rounded-lg tw-p-4 tw-mx-2">
      <h2 className="tw-font-bold tw-text-lg tw-text-red-700 tw-my-2">热点话题</h2>
      <div className="tw-grid tw-grid-cols-3 ">
        <div className="tw-mx-auto tw-p-3 tw-m-1 tw-rounded-lg hover:tw-cursor-pointer">
          <img
            className="tw-h-24 tw-w-24 tw-rounded-lg hover:tw-shadow-md"
            src="http://localhost:3000/assets/opera.jpg"
          />
          <span className="tw-font-bold tw-block tw-mt-2 tw-text-center">河南戏剧</span>
        </div>
        <div className="tw-mx-auto tw-p-3 tw-m-1 tw-rounded-lg  hover:tw-cursor-pointer">
          <img
            className="tw-h-24 tw-w-24 tw-rounded-lg hover:tw-shadow-md"
            src="http://localhost:3000/assets/education.jpg"
          />
          <span className="tw-font-bold tw-block tw-mt-2 tw-text-center">学校教育</span>
        </div>
        <div className="tw-mx-auto tw-p-3 tw-m-1 tw-rounded-lg hover:tw-cursor-pointer">
          <img
            className="tw-h-24 tw-w-24 tw-rounded-lg hover:tw-shadow-md"
            src="http://localhost:3000/assets/youth.jpg"
          />
          <span className="tw-font-bold tw-block tw-mt-2 tw-text-center">中原名家</span>
        </div>
        <div className="tw-mx-auto tw-p-3 tw-m-1 tw-rounded-lg hover:tw-cursor-pointer">
          <img
            className="tw-h-24 tw-w-24 tw-rounded-lg hover:tw-shadow-md"
            src="http://localhost:3000/assets/business.jpg"
          />
          <span className="tw-font-bold tw-block tw-mt-2 tw-text-center">商圈圆桌</span>
        </div>
        <div className="tw-mx-auto tw-p-3 tw-m-1 tw-rounded-lg hover:tw-cursor-pointer">
          <img
            className="tw-h-24 tw-w-24 tw-rounded-lg hover:tw-shadow-md"
            src="http://localhost:3000/assets/opera.jpg"
          />
          <span className="tw-font-bold tw-block tw-mt-2 tw-text-center">青年学院</span>
        </div>
        <div className="tw-mx-auto tw-p-3 tw-m-1 tw-rounded-lg hover:tw-cursor-pointer">
          <img
            className="tw-h-24 tw-w-24 tw-rounded-lg hover:tw-shadow-md"
            src="http://localhost:3000/assets/business.jpg"
          />
          <span className="tw-font-bold tw-block tw-mt-2 tw-text-center">百花文学</span>
        </div>
      </div>
    </div>
  );
}
