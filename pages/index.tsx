import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import {
  APIResponse,
  fetch_banner_news,
  fetch_home_carousel,
  fetch_column_items,
  fetch_friends,
  fetch_headline,
  fetch_hot_list,
  fetch_news_list,
  fetch_picture_block,
  fetch_topic_items,
  fetch_website_summary
} from '../api';
import { useNewsList } from '../hooks';
import {
  CarouselItem,
  ColumnItem,
  FriendItem,
  Banner,
  Headline,
  NewsListItem,
  PictureBlock,
  TopicItem,
  WebsiteSummary
} from '../models/data';
import {
  Carousel,
  ColumnsNavigator,
  Footer,
  HeadBanner,
  HeadlineBar,
  LogoBadge,
  NewsList,
  PictureNewsBlock,
  SideList,
  TopicList
} from '../views';

interface HomePageProps {
  HomeCarouselData: APIResponse<CarouselItem[]>;
  ColumnsData: APIResponse<ColumnItem[]>;
  TopicsData: APIResponse<TopicItem[]>;
  FriendsData: APIResponse<FriendItem[]>;
  HeadlineData: APIResponse<Headline>;
  NewsItemsData: APIResponse<NewsListItem[]>;
  HotListData: APIResponse<NewsListItem[]>;
  PictureBlockData: APIResponse<PictureBlock>;
  WebsiteInfoData: APIResponse<WebsiteSummary>;
  BannerNews: APIResponse<Banner>;
}

const Home = (props: HomePageProps) => {

  const {
    data: home_list_data,
    loadable: home_list_loadable,
    loading: home_list_loading,
    handleFetchData: handle_home_list_fetch_data,
  } = useNewsList(props.NewsItemsData.data!);

  return (
    <div className={'tw-bg-gray-50 tw-min-h-screen'}>
      <Head>
        <title>{props.WebsiteInfoData.data?.title ?? '中原科技网'}</title>
        <link rel="shortcut icon" href="favicons.ico" type="image/x-icon" />
        <meta name="description" content={props.WebsiteInfoData.data?.describe!} />
      </Head>
      <HeadBanner data={props.BannerNews} />
      <div className="tw-flex tw-justify-center tw-py-3">
        <LogoBadge title="中原科技网" logosrc="http://localhost:3000/logo.png" />
      </div>
      <header className="lg:tw-sticky tw-top-0 tw-bg-white tw-z-10">
        <ColumnsNavigator active={0} column_items_response={props.ColumnsData} />
      </header>
      <main className="tw-min-h-screen tw-px-5 tw-py-10 md:tw-px-20">
        <PictureNewsBlock data={props.PictureBlockData} />
        <HeadlineBar headline_response={props.HeadlineData} />
        <Carousel carousel_response={props.HomeCarouselData} />
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
            <PictureNewsBlock data={props.PictureBlockData} />
            <PictureNewsBlock data={props.PictureBlockData} />
            <TopicList Topics={props.TopicsData} />
            <div className=" tw-sticky tw-top-20">
              <SideList title="推荐阅读" list_response={props.HotListData} />
            </div>
          </div>
        </div>
      </main>
      <Footer Friends={props.FriendsData} WebsiteInfo={props.WebsiteInfoData} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response_friends = await fetch_friends();
  const response_headline = await fetch_headline();
  const response_home_carousel = await fetch_home_carousel();
  const response_news_list = await fetch_news_list();
  const response_hot_list = await fetch_hot_list();
  const response_picture_block = await fetch_picture_block();
  const response_website_summary = await fetch_website_summary();
  const response_topic_items = await fetch_topic_items();
  const response_column_items = await fetch_column_items();
  const response_banner_news = await fetch_banner_news();

  console.log(response_home_carousel);

  const returnProps: HomePageProps = {
    HomeCarouselData: response_home_carousel,
    ColumnsData: response_column_items,
    FriendsData: response_friends,
    HeadlineData: response_headline,
    NewsItemsData: response_news_list,
    HotListData: response_hot_list,
    PictureBlockData: response_picture_block,
    WebsiteInfoData: response_website_summary,
    TopicsData: response_topic_items,
    BannerNews: response_banner_news,
  };

  return {
    props: returnProps,
  };
};
export default Home;
