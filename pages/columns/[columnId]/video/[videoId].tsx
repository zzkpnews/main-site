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
import { Footer, LogoBadge, ColumnsNavigator, PictureBlock, SideList } from '../../../../views';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useNavigation } from '../../../../hooks';

interface VideoPageProps {
  dataColumnItems: ColumnItem[];
  dataFriendLinks: FriendLink[];
  dataHotNewsItems: NewsItem[];
  dataPictureNewsItems: PictureNews[];
  dataVideoNews: VideoNews;
  dataWebsiteInfo: WebsiteInfo;
}

const Video = (props: VideoPageProps) => {
  const { currentColumnOrder } = useNavigation(props.dataColumnItems);
  return (
    <div className={classNames('tw-bg-gray-50', 'tw-min-h-screen')}>
      <Head>
        <title>{`${props.dataVideoNews.title} - 中原科技网`}</title>
        <link rel="shortcut icon" href="../../../favicons.ico" type="image/x-icon" />
        <meta name="description" content={props.dataVideoNews.citation!} />
        <meta name="keywords" content={props.dataVideoNews.keywords!} />
      </Head>
      <div className="tw-flex tw-justify-center tw-py-3">
        <LogoBadge title="中原科技网" logosrc="http://localhost:3000/logo.png" />
      </div>
      <header className="lg:tw-sticky tw-top-0 tw-bg-white tw-z-10">
        <ColumnsNavigator Active={currentColumnOrder} Columns={props.dataColumnItems} />
      </header>
      <main className="tw-min-h-screen tw-px-5 md:tw-px-20">
        <div className="md:tw-flex tw-justify-center tw-my-10">
          <div className=" tw-basis-2/3">
            <div className=" tw-sticky tw-top-20 tw-border tw-bg-white tw-rounded-xl">
              <div className="tw-py-4 tw-mx-10">
                <span className="tw-block tw-font-bold tw-text-lg tw-text-left tw-mx-auto tw-text-gray-500">
                  {props.dataVideoNews.lead_title}
                </span>
                <h2 className="tw-font-bold tw-text-3xl tw-text-left tw-my-1">{props.dataVideoNews.title}</h2>
                <span className="tw-block tw-text-left tw-mx-auto tw-font-bold tw-text-xl">
                  {props.dataVideoNews.subtitle}
                </span>
              </div>
              <div className="tw-mx-5 tw-mb-4 tw-mt-1 tw-aspect-w-16 tw-aspect-h-9">
                <iframe
                  referrerPolicy="no-referrer"
                  className=" tw-rounded-xl"
                  src={props.dataVideoNews.video_url!}
                  allowFullScreen
                  width="100%"
                  height="300px"
                />
              </div>
            </div>
          </div>
          <div className="tw-basis-1/3">
            <div className="tw-rounded-lg tw-mx-2 tw-mb-2 tw-select-none tw-border tw-bg-white">
              <p className="tw-my-4 tw-p-4 ">{props.dataVideoNews.citation}</p>
            </div>
            <PictureBlock data={props.dataPictureNewsItems[1]} />
            <PictureBlock data={props.dataPictureNewsItems[2]} />
            <SideList title="精彩后面" data={props.dataHotNewsItems} />
            <SideList title="推荐阅读" data={props.dataHotNewsItems} />
          </div>
        </div>
      </main>
      <Footer Friends={props.dataFriendLinks} WebsiteInfo={props.dataWebsiteInfo} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {

  const columnId = context.query.videoId as string;
  const videoId = context.query.videoId as string;

  const response_column_items = (await fetchColumnItems()).data.data;
  const response_friend_links = (await fetchFriendLink()).data.data;
  const response_hot_news_items = (await fetchHotNews()).data.data;
  const response_video_news_item = (await fetchVideoNews(columnId)).data.data;
  const response_picture_news_item = (await fetchPictureNews(videoId)).data.data;
  const response_website_info = (await fetchWebsiteInfo()).data.data;

  const returnProps: VideoPageProps = {
    dataColumnItems: response_column_items,
    dataFriendLinks: response_friend_links,
    dataHotNewsItems: response_hot_news_items,
    dataPictureNewsItems: response_picture_news_item,
    dataVideoNews: response_video_news_item,
    dataWebsiteInfo: response_website_info,
  };
  return {
    props: returnProps,
  };
};
export default Video;
