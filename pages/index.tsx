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
  fetchFriendsList,
  fetchHeadLineNews,
  fetchHomeCarousel,
  fetchHomeList,
  fetchHotList,
  fetchNavColumnItems,
  fetchPictureBlock,
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
  navColumns: ColumnSummary[];
  friendsList: FriendLink[];
  homeList: NewsSummary[];
  homeCarousel: CarouselNews[];
  hotList: NewsSummary[];
  websiteInfo: WebsiteInfo;
  pagePictureBlock: PictureBlockNews;
  headLine: HeadLineNews;
}

const Home = (props: HomePageProps) => {
  const { currentColumnOrder } = useNavigation(props.navColumns);
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
        <Navigation activeColumnOrder={currentColumnOrder} navItems={props.navColumns} />
      </header>
      <main className="tw-min-h-screen tw-px-5 tw-py-10 md:tw-px-20">
        <PictureBlock
          imgsrc={props.pagePictureBlock.Top?.imgUrl}
          href={props.pagePictureBlock.Top?.href}
          describe={props.pagePictureBlock.Top?.describe}
        />
        <Headline data={props.headLine} />
        <Carousel data={props.homeCarousel} />
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
              imgsrc={props.pagePictureBlock.sideTop?.imgUrl}
              href={props.pagePictureBlock.sideTop?.href}
              describe={props.pagePictureBlock.sideTop?.describe}
            />
            <PictureBlock
              imgsrc={props.pagePictureBlock.sideBottom?.imgUrl}
              href={props.pagePictureBlock.sideBottom?.href}
              describe={props.pagePictureBlock.sideBottom?.describe}
            />
            <TopicList />
            <div className=" tw-sticky tw-top-20">
              <SideList title="推荐阅读" data={props.hotList} />
            </div>
          </div>
        </div>
      </main>
      <Footer friendsList={props.friendsList} websiteInfo={props.websiteInfo} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const fetchedColumnsData = (await fetchNavColumnItems()).data;
  const fetchedFriendsListData = (await fetchFriendsList()).data;
  const fetchedHomeListData = (await fetchHomeList()).data;
  const fetchedHomeCarouselData = (await fetchHomeCarousel()).data;
  const fetchedHotListData = (await fetchHotList()).data;
  const fetchedWebsiteInfoData = (await fetchWebsiteInfo()).data;
  const fetchedPagePictureBlock = (await fetchPictureBlock(context.query.columnId as string)).data;
  const fetchedHeadLineData = (await fetchHeadLineNews()).data;

  const returnProps: HomePageProps = {
    navColumns: fetchedColumnsData,
    friendsList: fetchedFriendsListData,
    homeList: fetchedHomeListData,
    homeCarousel: fetchedHomeCarouselData,
    hotList: fetchedHotListData,
    websiteInfo: fetchedWebsiteInfoData,
    pagePictureBlock: fetchedPagePictureBlock,
    headLine: fetchedHeadLineData,
  };

  return {
    props: returnProps,
  };
};
export default Home;
