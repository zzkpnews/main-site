import classNames from 'classnames';
import Head from 'next/head';
import { useNavigation, useNewsList } from '../hooks';
import {
  Carousel,
  Footer,
  HeadBanner,
  Headline,
  LogoBadge,
  ColumnsNavigator,
  NewsList,
  PictureBlock,
  SideList,
  TopicList,
} from '../views';
import {
  fetchFriendLink,
  fetchHeadLineNews,
  fetchCarouselNews,
  fetchHotNews,
  fetchColumnItems,
  fetchNewsItems,
  fetchPictureNews,
  fetchWebsiteInfo,
} from '../api/ajax';
import type { GetServerSideProps } from 'next';
import { ColumnItem, FriendLink, NewsItem, CarouselNews, WebsiteInfo, PictureNews, HeadLineNews } from '../models';

interface HomePageProps {
  CarouselNewsData: CarouselNews[];
  ColumnsData: ColumnItem[];
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
      <HeadBanner img_url="https://inews.gtimg.com/newsapp_bt/0/15010706663/1000" href="http://www.baidu.com" />
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
            <TopicList />
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
  const fetchedColumnsData = (await fetchColumnItems()).data.data;
  const fetchedFriendsListData = (await fetchFriendLink()).data.data;
  const fetchedHeadLineData = (await fetchHeadLineNews()).data.data;
  const fetchedHomeCarouselData = (await fetchCarouselNews()).data.data;
  const fetchedHomeListData = (await fetchNewsItems()).data.data;
  const fetchedHotListData = (await fetchHotNews()).data.data;
  const fetchedPagePictureBlock = (await fetchPictureNews()).data.data;
  const fetchedWebsiteInfoData = (await fetchWebsiteInfo()).data.data;

  const returnProps: HomePageProps = {
    CarouselNewsData: fetchedHomeCarouselData,
    ColumnsData: fetchedColumnsData,
    FriendsData: fetchedFriendsListData,
    HeadlineNewsData: fetchedHeadLineData,
    NewsItemsData: fetchedHomeListData,
    HotListData: fetchedHotListData,
    PictureNewsData: fetchedPagePictureBlock,
    WebsiteInfoData: fetchedWebsiteInfoData,
  };

  return {
    props: returnProps,
  };
};
export default Home;
