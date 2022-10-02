import { Tabs } from '@arco-design/web-react';
import classNames from 'classnames';
import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import {
  fetchColumnList,
  fetchFriendsList,
  fetchHotList,
  fetchNavColumnItems,
  fetchPictureBlock,
  fetchWebsiteInfo
} from '../../../api/fetchData';
import useColumnList from '../../../hooks/useColumnList';
import { getNavColumnOrder, getNavColumnTitle, NavColumn } from '../../../models/Columns';
import { FriendsListItem } from '../../../models/Friends';
import { NewsListItem } from '../../../models/NewsItem';
import { PagePictureBlockInfo } from '../../../models/PictureBlock';
import { WebsiteInfo } from '../../../models/WebsiteInfo';
import ColumnNav from '../../../views/ColumnNav';
import Footer from '../../../views/Footer';
import LogoBadge from '../../../views/LogoBadge';
import NewsList from '../../../views/NewsItemsList';
import PictureBlock from '../../../views/PictureBlock';
import SideList from '../../../views/SideList';

interface ColumnIndexPageProps {
  navColumns: NavColumn[];
  friendsList: FriendsListItem[];
  columnIndex: number;
  title: string;
  columnId: string;
  hotList: NewsListItem[];
  defaultListData: NewsListItem[];
  articleListData: NewsListItem[];
  videoListData: NewsListItem[];
  websiteInfo: WebsiteInfo;
  pagePictureBlock: PagePictureBlockInfo;
}

const ColumnIndex = (props: ColumnIndexPageProps) => {
  const {
    data: default_list_data,
    loadable: default_list_loadable,
    loading: default_list_loading,
    handleFetchData: handle_default_list_fetch_data,
  } = useColumnList(props.defaultListData, props.columnId);

  const {
    data: video_list_data,
    loadable: video_list_loadable,
    loading: video_list_loading,
    handleFetchData: handle_video_list_fetch_data,
  } = useColumnList(props.videoListData, props.columnId,'video');

  const {
    data: article_list_data,
    loadable: article_list_loadable,
    loading: article_list_loading,
    handleFetchData: handle_article_list_fetch_data,
  } = useColumnList(props.articleListData, props.columnId,'article');

  return (
    <div className={classNames('tw-bg-gray-50', 'tw-min-h-screen')}>
      <Head>
        <title>{`${props.title} - 中原科技网`}</title>
        <link rel="shortcut icon" href="http://localhost:3000/favicons.ico" type="image/x-icon" />
        <meta name="description" content="中原科技网" />
      </Head>
      <div className="tw-flex tw-justify-center tw-py-3">
        <LogoBadge title="中原科技网" logosrc="http://localhost:3000/logo.png" />
      </div>
      <header className="lg:tw-sticky tw-top-0 tw-bg-white tw-z-10">
        <ColumnNav activeColumnOrder={props.columnIndex} navItems={props.navColumns} />
      </header>
      <main className="tw-min-h-screen tw-px-5 md:tw-px-20">
        <div className="lg:tw-flex tw-justify-center tw-my-10">
          <div className=" tw-basis-2/3">
            <div className=" tw-sticky tw-top-20">
              <PictureBlock
                describe={props.pagePictureBlock.Top?.describe}
                href={props.pagePictureBlock.Top?.href}
                imgsrc={props.pagePictureBlock.Top?.imgsrc}
              />
              <div className="tw-border tw-rounded-lg tw-bg-white tw-p-3">
                <h2 className="tw-text-3xl tw-mx-5 tw-my-3 tw-font-bold">{`专栏 - ${props.title}`}</h2>
                <Tabs key="card" size="large">
                  <Tabs.TabPane key="1" title={<span className="tw-text-lg tw-font-bold">{'最新'}</span>}>
                    <NewsList
                      bordered={false}
                      newsList={default_list_data}
                      loadable={default_list_loadable}
                      loading={default_list_loading}
                      loadFunc={handle_default_list_fetch_data}
                    />
                  </Tabs.TabPane>
                  <Tabs.TabPane key="2" title={<span className="tw-text-lg tw-font-bold">{'文章'}</span>}>
                    <NewsList
                      bordered={false}
                      newsList={article_list_data}
                      loadable={article_list_loadable}
                      loading={article_list_loading}
                      loadFunc={handle_article_list_fetch_data}
                    />
                  </Tabs.TabPane>
                  <Tabs.TabPane key="4" title={<span className="tw-text-lg tw-font-bold">{'视频'}</span>}>
                    <NewsList
                      bordered={false}
                      newsList={video_list_data}
                      loadable={video_list_loadable}
                      loading={video_list_loading}
                      loadFunc={handle_video_list_fetch_data}
                    />
                  </Tabs.TabPane>
                </Tabs>
              </div>
            </div>
          </div>
          <div className=" tw-basis-1/3">
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
  const columnId = context.query.columnId as string;
  const columnIndex = getNavColumnOrder(fetchedColumnsData, columnId);
  const columnTitle = getNavColumnTitle(fetchedColumnsData, columnId);
  const fetchedDefaultListData = (await fetchColumnList(columnId)).data;
  const fetchedArticleListData = (await fetchColumnList(columnId, 'article')).data;
  const fetchedVideoListData = (await fetchColumnList(columnId, 'video')).data;
  const fetchedHotListData = (await fetchHotList()).data;
  const fetchedWebsiteInfoData = (await fetchWebsiteInfo()).data;
  const fetchedPagePictureBlock = (await fetchPictureBlock(columnId)).data;

  const returnProps: ColumnIndexPageProps = {
    columnId: columnId,
    navColumns: fetchedColumnsData,
    friendsList: fetchedFriendsListData,
    hotList: fetchedHotListData,
    columnIndex: columnIndex,
    title: columnTitle!,
    defaultListData: fetchedDefaultListData,
    articleListData: fetchedArticleListData,
    videoListData: fetchedVideoListData,
    websiteInfo: fetchedWebsiteInfoData,
    pagePictureBlock: fetchedPagePictureBlock,
  };

  return {
    props: returnProps,
  };
};
export default ColumnIndex;
