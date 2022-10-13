import classNames from 'classnames';
import Head from 'next/head';
import { useNavigation, useNewsList } from '../hooks';
import {
  Carousel,
  Footer,
  HeadBanner,
  Headline,
  LogoBadge,
  Navigation,
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
  carouselNewsData: CarouselNews[];
  columnsData: ColumnItem[];
  friendListData: FriendLink[];
  headLineNewsData: HeadLineNews;
  homeList: NewsItem[];
  hotNewsData: NewsItem[];
  pictureNews: PictureNews[];
  websiteInfo: WebsiteInfo;
}

const Home = (props: HomePageProps) => {
  const { currentColumnOrder } = useNavigation(props.columnsData);
  const {
    data: home_list_data,
    loadable: home_list_loadable,
    loading: home_list_loading,
    handleFetchData: handle_home_list_fetch_data,
  } = useNewsList(props.homeList);

  return (
    <div className={classNames('tw-bg-gray-50', 'tw-min-h-screen')}>
      <Head>
        <title>{props.websiteInfo.title}</title>
        <link rel="shortcut icon" href="favicons.ico" type="image/x-icon" />
        <meta name="description" content="中原科技网" />
      </Head>
      <HeadBanner img_url="https://inews.gtimg.com/newsapp_bt/0/15010706663/1000" href="http://www.baidu.com" />
      <div className="tw-flex tw-justify-center tw-py-3">
        <LogoBadge title="中原科技网" logosrc="http://localhost:3000/logo.png" />
      </div>
      <header className="lg:tw-sticky tw-top-0 tw-bg-white tw-z-10">
        <Navigation activeColumnOrder={currentColumnOrder} navItems={props.columnsData} />
      </header>
      <main className="tw-min-h-screen tw-px-5 tw-py-10 md:tw-px-20">
        <PictureBlock data={props.pictureNews[0]} />
        <Headline data={props.headLineNewsData} />
        <Carousel data={props.carouselNewsData} />
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
            <PictureBlock data={props.pictureNews[1]} />
            <PictureBlock data={props.pictureNews[2]} />
            <TopicList />
            <div className=" tw-sticky tw-top-20">
              <SideList title="推荐阅读" data={props.hotNewsData} />
            </div>
          </div>
        </div>
      </main>
      <Footer friendsList={props.friendListData} websiteInfo={props.websiteInfo} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const fetchedColumnsData = (await fetchColumnItems()).data.data;
  const fetchedFriendsListData = (await fetchFriendLink()).data.data;
  const fetchedHeadLineData = (await fetchHeadLineNews()).data.data;
  const fetchedHomeCarouselData = (await fetchCarouselNews()).data.data;
  const fetchedHomeListData = (await fetchNewsItems({ from: 'home' })).data.data;
  const fetchedHotListData = (await fetchHotNews()).data.data;
  const fetchedPagePictureBlock = (await fetchPictureNews()).data.data;
  const fetchedWebsiteInfoData = (await fetchWebsiteInfo()).data.data;

  const returnProps: HomePageProps = {
    carouselNewsData: fetchedHomeCarouselData,
    columnsData: fetchedColumnsData,
    friendListData: fetchedFriendsListData,
    headLineNewsData: fetchedHeadLineData,
    homeList: fetchedHomeListData,
    hotNewsData: fetchedHotListData,
    pictureNews: fetchedPagePictureBlock,
    websiteInfo: fetchedWebsiteInfoData,
  };

  return {
    props: returnProps,
  };
};
export default Home;
