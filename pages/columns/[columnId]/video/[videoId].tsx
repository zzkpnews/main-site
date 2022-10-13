import classNames from 'classnames';
import { ColumnItem, FriendLink, NewsItem, PictureNews, VideoNews, WebsiteInfo } from '../../../../models';
import {
  fetchColumnItems,
  fetchFriendLink,
  fetchHotNews,
  fetchPictureNews,
  fetchVideoNews,
  fetchWebsiteInfo,
} from '../../../../api/ajax';
import { Footer, LogoBadge, Navigation, PictureBlock, SideList } from '../../../../views';
import { GetServerSideProps } from 'next';
import { Head } from 'next/document';
import { useNavigation } from '../../../../hooks';

interface VideoPageProps {
  ColumnsData: ColumnItem[];
  FriendsData: FriendLink[];
  HotListData: NewsItem[];
  PictureNewsData: PictureNews[];
  VideoData: VideoNews;
  WebsiteInfoData: WebsiteInfo;
}

const Video = (props: VideoPageProps) => {
  const { currentColumnOrder } = useNavigation(props.ColumnsData);
  return (
    <div className={classNames('tw-bg-gray-50', 'tw-min-h-screen')}>
      <Head>
        <title>{`${props.VideoData.title} - 中原科技网`}</title>
        <link rel="shortcut icon" href="../../../favicons.ico" type="image/x-icon" />
        <meta name="description" content={props.VideoData.citation!} />
        <meta name="keywords" content={props.VideoData.keywords!} />
      </Head>
      <div className="tw-flex tw-justify-center tw-py-3">
        <LogoBadge title="中原科技网" logosrc="http://localhost:3000/logo.png" />
      </div>
      <header className="lg:tw-sticky tw-top-0 tw-bg-white tw-z-10">
        <Navigation activeColumnOrder={currentColumnOrder} navItems={props.ColumnsData} />
      </header>
      <main className="tw-min-h-screen tw-px-5 md:tw-px-20">
        <div className="tw-flex tw-justify-center tw-my-10">
          <div className=" tw-basis-2/3">
            <div className=" tw-sticky tw-top-20 tw-border tw-bg-white tw-rounded-xl">
              <div className="tw-py-4 tw-mx-10">
                <span className="tw-block tw-font-bold tw-text-lg tw-text-left tw-mx-auto tw-text-gray-500">
                  {props.VideoData.lead_title}
                </span>
                <h2 className="tw-font-bold tw-text-3xl tw-text-left tw-my-1">{props.VideoData.title}</h2>
                <span className="tw-block tw-text-left tw-mx-auto tw-font-bold tw-text-xl">
                  {props.VideoData.subtitle}
                </span>
              </div>
              <div className="tw-mx-5 tw-mb-4 tw-mt-1 tw-aspect-w-16 tw-aspect-h-9">
                <iframe
                  className=" tw-rounded-xl"
                  src={props.VideoData.video_url!}
                  allowFullScreen
                  width="100%"
                  height="300px"
                />
              </div>
            </div>
          </div>
          <div className="tw-basis-1/3">
            <div className="tw-rounded-lg tw-mx-2 tw-mb-2 tw-select-none tw-border tw-bg-white">
              <p className="tw-my-4 tw-p-4 ">{props.VideoData.citation}</p>
            </div>
            <PictureBlock data={props.PictureNewsData[1]} />
            <PictureBlock data={props.PictureNewsData[2]} />
            <SideList title="精彩后面" data={props.HotListData} />
            <SideList title="推荐阅读" data={props.HotListData} />
          </div>
        </div>
      </main>
      <Footer friendsList={props.FriendsData} websiteInfo={props.WebsiteInfoData} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const columnId = context.query.videoId as string;
  const videoId = context.query.videoId as string;

  const fetchedColumnsData = (await fetchColumnItems()).data.data;
  const fetchedFriendListData = (await fetchFriendLink()).data.data;
  const fetchedHotNewsData = (await fetchHotNews()).data.data;
  const fetchedVideoNewsData = (await fetchVideoNews(columnId)).data.data;
  const fetchedPictureBlockNewsData = (await fetchPictureNews(videoId)).data.data;
  const fetchedWebsiteInfoData = (await fetchWebsiteInfo()).data.data;

  const returnProps: VideoPageProps = {
    ColumnsData: fetchedColumnsData,
    FriendsData: fetchedFriendListData,
    HotListData: fetchedHotNewsData,
    PictureNewsData: fetchedPictureBlockNewsData,
    VideoData: fetchedVideoNewsData,
    WebsiteInfoData: fetchedWebsiteInfoData,
  };
  return {
    props: returnProps,
  };
};
export default Video;
