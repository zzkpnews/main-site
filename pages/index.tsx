import classNames from 'classnames';
import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import {
  fetchFriendsList,
  fetchHeadLine,
  fetchHomeCarousel,
  fetchHomeList,
  fetchHotList,
  fetchNavColumnItems,
  fetchPictureBlock,
  fetchWebsiteInfo
} from '../api/fetchData';
import useHomeList from '../hooks/useHomeList';
import { NavColumn } from '../models/Columns';
import { FriendsListItem } from '../models/Friends';
import { HeadLine } from '../models/Headline';
import { HomeCarouselItem } from '../models/HomeCarousel';
import { NewsListItem } from '../models/NewsItem';
import { PagePictureBlockInfo } from '../models/PictureBlock';
import { WebsiteInfo } from '../models/WebsiteInfo';
import ColumnNav from '../views/ColumnNav';
import Footer from '../views/Footer';
import HomeCarousel from '../views/HomeCarousel';
import HomeHeadline from '../views/HomeHeadline';
import LogoBadge from '../views/LogoBadge';
import NewsList from '../views/NewsItemsList';
import PageBanner from '../views/PageBanner';
import PictureBlock from '../views/PictureBlock';
import SideList from '../views/SideList';
import TopicList from '../views/TopicList';

interface HomePageProps {
  navColumns: NavColumn[];
  friendsList: FriendsListItem[];
  homeList: NewsListItem[];
  homeCarousel: HomeCarouselItem[];
  hotList: NewsListItem[];
  websiteInfo: WebsiteInfo;
  pagePictureBlock: PagePictureBlockInfo;
  headLine: HeadLine;
}

const Home = (props: HomePageProps) => {

  const {
    data: home_list_data,
    loadable: home_list_loadable,
    loading: home_list_loading,
    handleFetchData: handle_home_list_fetch_data,
  } = useHomeList(props.homeList);

  return (
    <div className={classNames('tw-bg-gray-50', 'tw-min-h-screen')}>
      <Head>
        <title>{props.websiteInfo.title}</title>
        <link rel="shortcut icon" href="favicons.ico" type="image/x-icon" />
        <meta name="description" content="中原科技网" />
      </Head>
      <PageBanner imgsrc="https://inews.gtimg.com/newsapp_bt/0/15010706663/1000" href="http://www.baidu.com" />
      <div className="tw-flex tw-justify-center tw-py-3">
        <LogoBadge title="中原科技网" logosrc="http://localhost:3000/logo.png" />
      </div>
      <header className="lg:tw-sticky tw-top-0 tw-bg-white tw-z-10">
        <ColumnNav activeColumnOrder={0} navItems={props.navColumns} />
      </header>
      <main className="tw-min-h-screen tw-px-5 tw-py-10 md:tw-px-20">
        <PictureBlock
          imgsrc={props.pagePictureBlock.Top?.imgsrc}
          href={props.pagePictureBlock.Top?.href}
          describe={props.pagePictureBlock.Top?.describe}
        />
        <HomeHeadline data={props.headLine} />
        <HomeCarousel data={props.homeCarousel} />
        <div className=" lg:tw-flex">
          <div className="lg:tw-basis-2/3 tw-my-10">
            <div className=" tw-sticky tw-top-20">
              <NewsList
                loading={home_list_loading}
                loadable={home_list_loadable}
                newsList={home_list_data}
                loadFunc={handle_home_list_fetch_data}
              />
            </div>
          </div>
          <div className="lg:tw-basis-1/3 tw-my-10">
            <PictureBlock
              imgsrc={props.pagePictureBlock.sideTop?.imgsrc}
              href={props.pagePictureBlock.sideTop?.href}
              describe={props.pagePictureBlock.sideTop?.describe}
            />
            <PictureBlock
              imgsrc={props.pagePictureBlock.sideBottom?.imgsrc}
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
  const fetchedHeadLineData = (await fetchHeadLine()).data;

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
