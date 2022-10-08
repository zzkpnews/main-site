import classNames from 'classnames';
import { ColumnSummary, FriendLink, NewsSummary, PictureBlockNews, VideoNews, WebsiteInfo } from '../../../../models';
import {
  fetchColumnsData,
  fetchFriendList,
  fetchHotNews,
  fetchPictureBlockNews,
  fetchVideoNews,
  fetchWebsiteInfo,
} from '../../../../api/fetchData';
import { Footer, LogoBadge, Navigation, PictureBlock, SideList } from '../../../../views';
import { GetServerSideProps } from 'next';
import { Head } from 'next/document';
import { useNavigation } from '../../../../hooks';

interface VideoPageProps {
  columnsData: ColumnSummary[];
  friendsListData: FriendLink[];
  hotNewsData: NewsSummary[];
  pictureBlockNewsData: PictureBlockNews;
  videoNewsData: VideoNews;
  websiteInfoData: WebsiteInfo;
}

const Video = (props: VideoPageProps) => {
  const { currentColumnOrder } = useNavigation(props.columnsData);
  return (
    <div className={classNames('tw-bg-gray-50', 'tw-min-h-screen')}>
      <Head>
        <title>{`${props.videoNewsData.title} - 中原科技网`}</title>
        <link rel="shortcut icon" href="../../../favicons.ico" type="image/x-icon" />
        <meta name="description" content={props.videoNewsData.citation!} />
        <meta name="keywords" content={props.videoNewsData.keywords!} />
      </Head>
      <div className="tw-flex tw-justify-center tw-py-3">
        <LogoBadge title="中原科技网" logosrc="http://localhost:3000/logo.png" />
      </div>
      <header className="lg:tw-sticky tw-top-0 tw-bg-white tw-z-10">
        <Navigation activeColumnOrder={currentColumnOrder} navItems={props.columnsData} />
      </header>
      <main className="tw-min-h-screen tw-px-5 md:tw-px-20">
        <div className="tw-flex tw-justify-center tw-my-10">
          <div className=" tw-basis-2/3">
            <div className=" tw-sticky tw-top-20 tw-border tw-bg-white tw-rounded-xl">
              <div className="tw-py-4 tw-mx-10">
                <span className="tw-block tw-font-bold tw-text-lg tw-text-left tw-mx-auto tw-text-gray-500">
                  {props.videoNewsData.lead_title}
                </span>
                <h2 className="tw-font-bold tw-text-3xl tw-text-left tw-my-1">{props.videoNewsData.title}</h2>
                <span className="tw-block tw-text-left tw-mx-auto tw-font-bold tw-text-xl">
                  {props.videoNewsData.subtitle}
                </span>
              </div>
              <div className="tw-mx-5 tw-mb-4 tw-mt-1 tw-aspect-w-16 tw-aspect-h-9">
                <iframe
                  className=" tw-rounded-xl"
                  src={props.videoNewsData.video_url!}
                  allowFullScreen
                  width="100%"
                  height="300px"
                />
              </div>
            </div>
          </div>
          <div className="tw-basis-1/3">
            <div className="tw-rounded-lg tw-mx-2 tw-mb-2 tw-select-none tw-border tw-bg-white">
              <p className="tw-my-4 tw-p-4 ">{props.videoNewsData.citation}</p>
            </div>
            <PictureBlock data={props.pictureBlockNewsData.sideTop} />
            <PictureBlock data={props.pictureBlockNewsData.sideBottom} />
            <SideList title="精彩后面" data={props.hotNewsData} />
            <SideList title="推荐阅读" data={props.hotNewsData} />
          </div>
        </div>
      </main>
      <Footer friendsList={props.friendsListData} websiteInfo={props.websiteInfoData} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const columnId = context.query.videoId as string;
  const videoId = context.query.videoId as string;

  const fetchedColumnsData = (await fetchColumnsData()).data;
  const fetchedFriendListData = (await fetchFriendList()).data;
  const fetchedHotNewsData = (await fetchHotNews()).data;
  const fetchedVideoNewsData = (await fetchVideoNews(columnId)).data;
  const fetchedPictureBlockNewsData = (await fetchPictureBlockNews(videoId)).data;
  const fetchedWebsiteInfoData = (await fetchWebsiteInfo()).data;

  const returnProps: VideoPageProps = {
    columnsData: fetchedColumnsData,
    friendsListData: fetchedFriendListData,
    hotNewsData: fetchedHotNewsData,
    pictureBlockNewsData: fetchedPictureBlockNewsData,
    videoNewsData: fetchedVideoNewsData,
    websiteInfoData: fetchedWebsiteInfoData,
  };
  return {
    props: returnProps,
  };
};
export default Video;
