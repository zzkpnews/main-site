import classNames from 'classnames';
import Footer from '../../../views/Footer';
import Head from 'next/head';
import LogoBadge from '../../../views/LogoBadge';
import NewsItemsList from '../../../views/NewsItemsList';
import PictureBlock from '../../../views/PictureBlock';
import SideItemList from '../../../views/SideItemList';
import TopNavigation from '../../../views/TopNavigation';
import { Dispatch, SetStateAction, useState } from 'react';
import {
  fetchColumnList,
  fetchFriendsList,
  fetchHotList,
  fetchNavColumnItems,
  fetchPictureBlock,
  fetchWebsiteInfo
  } from '../../../api/fetchData';
import { FriendsListItem } from '../../../types/Friends';
import { Message, Tabs } from '@arco-design/web-react';
import { NavColumns } from '../../../types/Columns';
import { NewsListItem } from '../../../types/NewsItem';
import { PagePictureBlockInfo } from '../../../types/PictureBlock';
import { WebsiteInfo } from '../../../types/WebsiteInfo';
import type { GetServerSideProps } from 'next';

interface ColumnIndexPageProps {
  navColumns: NavColumns[];
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
  const [column_default_list_data, set_column_default_list_data] = useState<NewsListItem[]>(props.defaultListData);
  const [column_default_list_loadable, set_column_default_list_loadable] = useState<boolean>(true);
  const [column_default_list_loading, set_column_default_list_loading] = useState<boolean>(false);

  const [column_article_list_data, set_column_article_list_data] = useState<NewsListItem[]>(props.articleListData);
  const [column_article_list_loadable, set_column_article_list_loadable] = useState<boolean>(true);
  const [column_article_list_loading, set_column_article_list_loading] = useState<boolean>(false);

  const [column_video_list_data, set_column_video_list_data] = useState<NewsListItem[]>(props.videoListData);
  const [column_video_list_loadable, set_column_video_list_loadable] = useState<boolean>(true);
  const [column_video_list_loading, set_column_video_list_loading] = useState<boolean>(false);

  const _loadNewsList = async (
    type: 'article' | 'video' | undefined,
    listData: NewsListItem[],
    setListData: Dispatch<SetStateAction<NewsListItem[]>>,
    setLoadable: Dispatch<SetStateAction<boolean>>,
    setLoading: Dispatch<SetStateAction<boolean>>
  ) => {
    if (listData.length === 0) {
      setLoadable(false);
      setLoading(false);
      Message.info({
        content: '加载已经到底了！',
        closable: true,
        duration: 5000,
      });
      return;
    }
    fetchColumnList(props.columnId, type, listData[listData.length - 1].timestamp)
      .then((moreItems) => {
        if (moreItems.data.length !== 0) {
          setLoading(false);
          setListData([...listData, ...moreItems.data]);
        } else {
          setLoadable(false);
          setLoading(false);
          Message.info({
            content: '加载已经到底了！',
            closable: true,
            duration: 5000,
          });
        }
      })
      .catch(() => {
        setLoading(false);
        Message.error({
          content: '加载数据过程中出现错误！',
          closable: true,
          duration: 5000,
        });
      });
  };

  const handleLoadDefaultList = (): void => {
    _loadNewsList(
      undefined,
      column_default_list_data,
      set_column_default_list_data,
      set_column_default_list_loadable,
      set_column_default_list_loading
    );
  };

  const handleLoadArticleList = (): void => {
    _loadNewsList(
      'article',
      column_article_list_data,
      set_column_article_list_data,
      set_column_article_list_loadable,
      set_column_article_list_loading
    );
  };

  const handleLoadVideoList = (): void => {
    _loadNewsList(
      'video',
      column_video_list_data,
      set_column_video_list_data,
      set_column_video_list_loadable,
      set_column_video_list_loading
    );
  };

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
        <TopNavigation selectedIndex={props.columnIndex} navItems={props.navColumns} />
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
                    <NewsItemsList
                      bordered={false}
                      newsList={column_default_list_data}
                      loadable={column_default_list_loadable}
                      loading={column_default_list_loading}
                      loadFunc={handleLoadDefaultList}
                    />
                  </Tabs.TabPane>
                  <Tabs.TabPane key="2" title={<span className="tw-text-lg tw-font-bold">{'文章'}</span>}>
                    <NewsItemsList
                      bordered={false}
                      newsList={column_article_list_data}
                      loadable={column_article_list_loadable}
                      loading={column_article_list_loading}
                      loadFunc={handleLoadArticleList}
                    />
                  </Tabs.TabPane>
                  <Tabs.TabPane key="4" title={<span className="tw-text-lg tw-font-bold">{'视频'}</span>}>
                    <NewsItemsList
                      bordered={false}
                      newsList={column_video_list_data}
                      loadable={column_video_list_loadable}
                      loading={column_video_list_loading}
                      loadFunc={handleLoadVideoList}
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
              <SideItemList title="推荐阅读" data={props.hotList} />
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

  const columnIndex =
    fetchedColumnsData.findIndex((item) => {
      return item.id === context.query.columnId;
    }) + 1;
  const columnTitle = fetchedColumnsData.find((item) => {
    return item.id === context.query.columnId;
  })?.title;
  const columnId = context.query.columnId as string;

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
  console.log(fetchedPagePictureBlock);
  return {
    props: returnProps,
  };
};
export default ColumnIndex;
