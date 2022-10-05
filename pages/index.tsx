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
  fetchFriendList,
  fetchHeadLineNews,
  fetchCarouselNews,
  fetchHotNews,
  fetchColumnsData,
  fetchNewsList,
  fetchPictureBlockNews,
  fetchWebsiteInfo,
} from '../api/fetchData';
import type { GetServerSideProps } from 'next';
import {
  ColumnSummary,
  FriendLink,
  NewsSummary,
  CarouselNews,
  WebsiteInfo,
  PictureBlockNews,
  HeadLineNews,
} from '../models';

interface HomePageProps {
  carouselNewsData: CarouselNews[];
  columnsData: ColumnSummary[];
  friendListData: FriendLink[];
  headLineNewsData: HeadLineNews;
  homeList: NewsSummary[];
  hotNewsData: NewsSummary[];
  pagePictureBlock: PictureBlockNews | null;
  websiteInfo: WebsiteInfo;
}

const Home = (props: HomePageProps) => {
  const { currentColumnOrder } = useNavigation(props.columnsData);
  const {
    data: home_list_data,
    loadable: home_list_loadable,
    loading: home_list_loading,
    handleFetchData: handle_home_list_fetch_data,
  } = useNewsList(props.homeList, { from: 'home' });

  return (
    <div className={classNames('tw-bg-gray-50', 'tw-min-h-screen')}>
      <Head>
        <title>{props.websiteInfo.title}</title>
        <link rel="shortcut icon" href="favicons.ico" type="image/x-icon" />
        <meta name="description" content="中原科技网" />
      </Head>
      <HeadBanner imgsrc="https://inews.gtimg.com/newsapp_bt/0/15010706663/1000" href="http://www.baidu.com" />
      <div className="tw-flex tw-justify-center tw-py-3">
        <LogoBadge title="中原科技网" logosrc="http://localhost:3000/logo.png" />
      </div>
      <header className="lg:tw-sticky tw-top-0 tw-bg-white tw-z-10">
        <Navigation activeColumnOrder={currentColumnOrder} navItems={props.columnsData} />
      </header>
      <main className="tw-min-h-screen tw-px-5 tw-py-10 md:tw-px-20">
        <PictureBlock
          imgsrc={props.pagePictureBlock?.Top?.imgUrl}
          href={props.pagePictureBlock?.Top?.href}
          describe={props.pagePictureBlock?.Top?.describe}
        />
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
            <PictureBlock
              imgsrc={props.pagePictureBlock?.sideTop?.imgUrl}
              href={props.pagePictureBlock?.sideTop?.href}
              describe={props.pagePictureBlock?.sideTop?.describe}
            />
            <PictureBlock
              imgsrc={props.pagePictureBlock?.sideBottom?.imgUrl}
              href={props.pagePictureBlock?.sideBottom?.href}
              describe={props.pagePictureBlock?.sideBottom?.describe}
            />
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
  const fetchedColumnsData = (await fetchColumnsData()).data;
  const fetchedFriendsListData = (await fetchFriendList()).data;
  const fetchedHeadLineData = (await fetchHeadLineNews()).data;
  const fetchedHomeCarouselData = (await fetchCarouselNews()).data;
  const fetchedHomeListData = (await fetchNewsList({ from: 'home' })).data;
  const fetchedHotListData = (await fetchHotNews()).data;
  const fetchedPagePictureBlock = null;
  const fetchedWebsiteInfoData = (await fetchWebsiteInfo()).data;

  const returnProps: HomePageProps = {
    carouselNewsData: fetchedHomeCarouselData,
    columnsData: fetchedColumnsData,
    friendListData: fetchedFriendsListData,
    headLineNewsData: fetchedHeadLineData,
    homeList: fetchedHomeListData,
    hotNewsData: fetchedHotListData,
    pagePictureBlock: fetchedPagePictureBlock,
    websiteInfo: fetchedWebsiteInfoData,
  };

  return {
    props: returnProps,
  };
};
export default Home;
