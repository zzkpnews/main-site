import classNames from 'classnames';
import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import {
  fetchCarouselNews,
  fetchColumnItems,
  fetchFriendLink,
  fetchHeadLineNews,
  fetchHotNews,
  fetchNewsItems,
  fetchPictureNews,
  fetchTopicItems,
  fetchWebsiteInfo,
} from '../api/ajax';
import { useNewsList } from '../hooks';
import {
  CarouselNews,
  ColumnItem,
  FriendLink,
  HeadLineNews,
  NewsItem,
  PictureNews,
  TopicItem,
  WebsiteInfo,
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
  TopicList,
} from '../views';

interface HomePageProps {
  CarouselNewsData: CarouselNews[];
  ColumnsData: ColumnItem[];
  TopicsData: TopicItem[];
  FriendsData: FriendLink[];
  HeadlineNewsData: HeadLineNews;
  NewsItemsData: NewsItem[];
  HotListData: NewsItem[];
  PictureNewsData: PictureNews[];
  WebsiteInfoData: WebsiteInfo;
}

const Home = (props: HomePageProps) => {
  const {
    data: home_list_data,
    loadable: home_list_loadable,
    loading: home_list_loading,
    handleFetchData: handle_home_list_fetch_data,
  } = useNewsList(props.NewsItemsData);

  return (
    <div className={classNames('tw-bg-gray-50', 'tw-min-h-screen')}>
      <Head>
        <title>{props.WebsiteInfoData.title}</title>
        <link rel="shortcut icon" href="favicons.ico" type="image/x-icon" />
        <meta name="description" content="中原科技网" />
      </Head>
      <HeadBanner
        img_url="https://inews.gtimg.com/newsapp_bt/0/15010706663/1000"
        href="http://www.baidu.com"
        open={false}
      />
      <div className="tw-flex tw-justify-center tw-py-3">
        <LogoBadge title="中原科技网" logosrc="http://localhost:3000/logo.png" />
      </div>
      <header className="lg:tw-sticky tw-top-0 tw-bg-white tw-z-10">
        <ColumnsNavigator Active={0} Columns={props.ColumnsData} />
      </header>
      <main className="tw-min-h-screen tw-px-5 tw-py-10 md:tw-px-20">
        <PictureBlock data={props.PictureNewsData[0]} />
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
            <PictureBlock data={props.PictureNewsData[1]} />
            <PictureBlock data={props.PictureNewsData[2]} />
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
  const response_column_items = (await fetchColumnItems()).data.data;
  const response_friend_links = (await fetchFriendLink()).data.data;
  const response_headline_news = (await fetchHeadLineNews()).data.data;
  const response_home_carousel_news = (await fetchCarouselNews()).data.data;
  const response_news_items = (await fetchNewsItems()).data.data;
  const response_hot_news_items = (await fetchHotNews()).data.data;
  const response_picture_news_items = (await fetchPictureNews()).data.data;
  const response_website_info = (await fetchWebsiteInfo()).data.data;
  const response_topic_items = (await fetchTopicItems()).data.data;

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
  };

  return {
    props: returnProps,
  };
};
export default Home;
