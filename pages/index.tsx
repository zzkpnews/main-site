import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import {
  APIReply,
  fetchBannerNews,
  fetchCarouselNews,
  fetchColumnItems,
  fetchFriendLink,
  fetchHeadLineNews,
  fetchHotNews,
  fetchNewsItems,
  fetchPictureNews,
  fetchTopicItems,
  fetchWebsiteInfo
} from '../api/ajax';
import { useNewsList } from '../hooks';
import {
  CarouselNews,
  ColumnItem,
  FriendLink,
  HeadBannerNews,
  HeadlineNews,
  NewsItem,
  PictureNews,
  TopicItem,
  WebsiteInfo
} from '../models';
import {
  Carousel,
  ColumnsNavigator,
  Footer,
  HeadBanner,
  Headline,
  LogoBadge,
  NewsList,
  PictureBlock,
  SideList,
  TopicList
} from '../views';

interface HomePageProps {
  CarouselNewsData: APIReply<CarouselNews[]>;
  ColumnsData: APIReply<ColumnItem[]>;
  TopicsData: APIReply<TopicItem[]>;
  FriendsData: APIReply<FriendLink[]>;
  HeadlineNewsData: APIReply<HeadlineNews>;
  NewsItemsData: APIReply<NewsItem[]>;
  HotListData: APIReply<NewsItem[]>;
  PictureNewsData: APIReply<PictureNews>;
  WebsiteInfoData: APIReply<WebsiteInfo>;
  BannerNews: APIReply<HeadBannerNews>;
}

const Home = (props: HomePageProps) => {
  const {
    data: home_list_data,
    loadable: home_list_loadable,
    loading: home_list_loading,
    handleFetchData: handle_home_list_fetch_data,
  } = useNewsList(props.NewsItemsData);

  return (
    <div className={'tw-bg-gray-50 tw-min-h-screen'}>
      <Head>
        <title>{props.WebsiteInfoData.data?.title ?? '中原科技网'}</title>
        <link rel="shortcut icon" href="favicons.ico" type="image/x-icon" />
        <meta name="description" content={props.WebsiteInfoData.data?.describe} />
      </Head>
      <HeadBanner data={props.BannerNews} />
      <div className="tw-flex tw-justify-center tw-py-3">
        <LogoBadge title="中原科技网" logosrc="http://localhost:3000/logo.png" />
      </div>
      <header className="lg:tw-sticky tw-top-0 tw-bg-white tw-z-10">
        <ColumnsNavigator Active={0} Columns={props.ColumnsData} />
      </header>
      <main className="tw-min-h-screen tw-px-5 tw-py-10 md:tw-px-20">
        <PictureBlock data={props.PictureNewsData} />
        <Headline data={props.HeadlineNewsData} />
        <Carousel data={props.CarouselNewsData} />
        <div className=" lg:tw-flex">
          <div className="lg:tw-basis-2/3 tw-my-10">
            <div className=" tw-sticky tw-top-20">
              <NewsList
                bordered
                loading={home_list_loading}
                loadable={home_list_loadable}
                list={home_list_data}
                loadHandler={handle_home_list_fetch_data}
              />
            </div>
          </div>
          <div className="lg:tw-basis-1/3 tw-my-10">
            <PictureBlock data={props.PictureNewsData} />
            <PictureBlock data={props.PictureNewsData} />
            <TopicList Topics={props.TopicsData} />
            <div className=" tw-sticky tw-top-20">
              <SideList title="推荐阅读" data={props.HotListData} />
            </div>
          </div>
        </div>
      </main>
      <Footer Friends={props.FriendsData} WebsiteInfo={props.WebsiteInfoData} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response_friend_links = await fetchFriendLink();
  const response_headline_news = await fetchHeadLineNews();
  const response_home_carousel_news = await fetchCarouselNews();
  const response_news_items = await fetchNewsItems();
  const response_hot_news_items = await fetchHotNews();
  const response_picture_news_items = await fetchPictureNews();
  const response_website_info = await fetchWebsiteInfo();
  const response_topic_items = await fetchTopicItems();
  const response_column_items = await fetchColumnItems();
  const response_banner_news = await fetchBannerNews();

  const returnProps: HomePageProps = {
    CarouselNewsData: response_home_carousel_news,
    ColumnsData: response_column_items,
    FriendsData: response_friend_links,
    HeadlineNewsData: response_headline_news,
    NewsItemsData: response_news_items,
    HotListData: response_hot_news_items,
    PictureNewsData: response_picture_news_items,
    WebsiteInfoData: response_website_info,
    TopicsData: response_topic_items,
    BannerNews: response_banner_news,
  };

  return {
    props: returnProps,
  };
};
export default Home;
