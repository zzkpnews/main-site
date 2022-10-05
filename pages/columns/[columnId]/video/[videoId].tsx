import classNames from 'classnames';
import { ColumnSummary, FriendLink, NewsSummary, PictureBlockNews, VideoNews, WebsiteInfo } from '../../../../models';
import { Footer, LogoBadge, Navigation, PictureBlock, SideList } from '../../../../views';
import { GetServerSideProps } from 'next';
import { Head } from 'next/document';
import { useNavigation } from '../../../../hooks';
import {
  fetchNavColumnItems,
  fetchFriendsList,
  fetchHotList,
  fetchVideoItemMeta,
  fetchPictureBlock,
  fetchWebsiteInfo,
} from '../../../../api/fetchData';

interface VideoPageProps {
  navColumnsList: ColumnSummary[];
  friendsList: FriendLink[];
  hotList: NewsSummary[];
  videoItemDetail: VideoNews;
  websiteInfo: WebsiteInfo;
  pagePictureBlock: PictureBlockNews;
}

const Video = (props: VideoPageProps) => {
  const { currentColumnOrder } = useNavigation(props.navColumnsList);
  return (
    <div className={classNames('tw-bg-gray-50', 'tw-min-h-screen')}>
      <Head>
        <title>{`${props.videoItemDetail.title} - 中原科技网`}</title>
        <link rel="shortcut icon" href="../../../favicons.ico" type="image/x-icon" />
        <meta name="description" content={props.videoItemDetail.citation!} />
        <meta name="keywords" content={props.videoItemDetail.keywords!} />
      </Head>
      <div className="tw-flex tw-justify-center tw-py-3">
        <LogoBadge title="中原科技网" logosrc="http://localhost:3000/logo.png" />
      </div>
      <header className="lg:tw-sticky tw-top-0 tw-bg-white tw-z-10">
        <Navigation activeColumnOrder={currentColumnOrder} navItems={props.navColumnsList} />
      </header>
      <main className={classNames('tw-min-h-screen', 'tw-px-5', 'md:tw-px-20')}>
        <div className="tw-flex tw-justify-center tw-my-10">
          <div className=" tw-basis-2/3">
            <div className=" tw-sticky tw-top-20 tw-border tw-bg-white tw-rounded-xl">
              <div className="tw-py-4 tw-mx-10">
                <span className="tw-block tw-font-bold tw-text-lg tw-text-left tw-mx-auto tw-text-gray-500">
                  {props.videoItemDetail.leadTitle}
                </span>
                <h2 className="tw-font-bold tw-text-3xl tw-text-left tw-my-1">{props.videoItemDetail.title}</h2>
                <span className="tw-block tw-text-left tw-mx-auto tw-font-bold tw-text-xl">
                  {props.videoItemDetail.subtitle}
                </span>
              </div>
              <div className="tw-mx-5 tw-mb-4 tw-mt-1 tw-aspect-w-16 tw-aspect-h-9">
                <iframe
                  className=" tw-rounded-xl"
                  src="https://open.iqiyi.com/developer/player_js/coopPlayerIndex.html?vid=12091baaed62b1d7cfcc0e87209953bc&tvId=1259901735022400&accessToken=2.ef9c39d6c7f1d5b44768e38e5243157d&appKey=8c634248790d4343bcae1f66129c1010&appId=1368&height=100%&width=100%"
                  allowFullScreen
                  width="100%"
                  height="300px"
                />
              </div>
            </div>
          </div>
          <div className="tw-basis-1/3">
            <div className="tw-rounded-lg tw-mx-2 tw-mb-2 tw-select-none tw-border tw-bg-white">
              <p className="tw-my-4 tw-p-4 ">{props.videoItemDetail.citation}</p>
            </div>
            <PictureBlock
              imgsrc={props.pagePictureBlock.sideTop?.imgUrl}
              href={props.pagePictureBlock.sideTop?.href}
              describe={props.pagePictureBlock.sideTop?.describe}
            />
            <PictureBlock
              imgsrc={props.pagePictureBlock.sideBottom?.imgUrl}
              href={props.pagePictureBlock.sideBottom?.href}
              describe={props.pagePictureBlock.sideBottom?.describe}
            />
            <SideList title="精彩后面" data={props.hotList} />
            <SideList title="推荐阅读" data={props.hotList} />
          </div>
        </div>
      </main>
      <Footer friendsList={props.friendsList} websiteInfo={props.websiteInfo} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const columnId = context.query.videoId as string;
  const videoId = context.query.videoId as string;
  
  const fetchedNavColumnsList = (await fetchNavColumnItems()).data;
  const fetchedFriendsListData = (await fetchFriendsList()).data;
  const fetchedHotListData = (await fetchHotList()).data;
  const fetchedVideoItemMeta = (await fetchVideoItemMeta(columnId)).data;
  const fetchedPagePictureBlock = (await fetchPictureBlock(videoId)).data;
  const fetchedWebsiteInfoData = (await fetchWebsiteInfo()).data;

  const returnProps: VideoPageProps = {
    videoItemDetail: fetchedVideoItemMeta,
    navColumnsList: fetchedNavColumnsList,
    friendsList: fetchedFriendsListData,
    hotList: fetchedHotListData,
    websiteInfo: fetchedWebsiteInfoData,
    pagePictureBlock: fetchedPagePictureBlock,
  };
  return {
    props: returnProps,
  };
};
export default Video;
