import classNames from 'classnames';
import Footer from '../../views/Footer';
import Head from 'next/head';
import LogoBadge from '../../views/LogoBadge';
import NewsItemsList from '../../views/NewsItemsList';
import PictureBlock from '../../views/PictureBlock';
import SideItemList from '../../views/SideItemList';
import { Dispatch, SetStateAction, useState } from 'react';
import {
  fetchColumnList,
  fetchFriendsList,
  fetchHotList,
  fetchNavColumnItems,
  fetchWebsiteInfo
  } from '../../api/fetchData';
import { FriendsListItem } from '../../types/Friends';
import { Message, Tabs } from '@arco-design/web-react';
import { NavColumns } from '../../types/Columns';
import { NewsListItem } from '../../types/NewsItem';
import { useRouter } from 'next/router';
import { WebsiteInfo } from '../../types/WebsiteInfo';
import type { GetServerSideProps } from 'next';

interface PortalPageProps {
  navColumns: NavColumns[];
  friendsList: FriendsListItem[];
  columnIndex: number;
  columnTitle: string;
  hotList: NewsListItem[];
  columnDefaultList: NewsListItem[];
  columnArticleList: NewsListItem[];
  columnAlbumList: NewsListItem[];
  columnVideoList: NewsListItem[];
  websiteInfo: WebsiteInfo;
}

const Portal = (props: PortalPageProps) => {
  const route = useRouter();

  const [column_default_list_data, set_column_default_list_data] = useState<NewsListItem[]>(props.columnDefaultList);
  const [column_default_list_loadable, set_column_default_list_loadable] = useState<boolean>(true);
  const [column_default_list_loading, set_column_default_list_loading] = useState<boolean>(false);

  const [column_article_list_data, set_column_article_list_data] = useState<NewsListItem[]>(props.columnArticleList);
  const [column_article_list_loadable, set_column_article_list_loadable] = useState<boolean>(true);
  const [column_article_list_loading, set_column_article_list_loading] = useState<boolean>(false);

  const [column_album_list_data, set_column_album_list_data] = useState<NewsListItem[]>(props.columnAlbumList);
  const [column_album_list_loadable, set_column_album_list_loadable] = useState<boolean>(true);
  const [column_album_list_loading, set_column_album_list_loading] = useState<boolean>(false);

  const [column_video_list_data, set_column_video_list_data] = useState<NewsListItem[]>(props.columnVideoList);
  const [column_video_list_loadable, set_column_video_list_loadable] = useState<boolean>(true);
  const [column_video_list_loading, set_column_video_list_loading] = useState<boolean>(false);

  const loadMoreItems = async (
    type: 'article' | 'album' | 'video' | undefined,
    listData: NewsListItem[],
    setListData: Dispatch<SetStateAction<NewsListItem[]>>,
    setLoadable: Dispatch<SetStateAction<boolean>>,
    setLoading: Dispatch<SetStateAction<boolean>>
  ) => {
    set_column_default_list_loading(true);
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
    fetchColumnList(route.query.columnId as string, type, listData[listData.length - 1].timestamp)
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

  const loadMoreDefaultItems = () => {
    loadMoreItems(
      undefined,
      column_default_list_data,
      set_column_default_list_data,
      set_column_default_list_loadable,
      set_column_default_list_loading
    );
  };

  const loadMoreArticleItems = () => {
    loadMoreItems(
      undefined,
      column_article_list_data,
      set_column_article_list_data,
      set_column_article_list_loadable,
      set_column_article_list_loading
    );
  };

  const loadMoreAlbumItems = () => {
    loadMoreItems(
      undefined,
      column_album_list_data,
      set_column_album_list_data,
      set_column_album_list_loadable,
      set_column_album_list_loading
    );
  };

  const loadMoreVideoItems = () => {
    loadMoreItems(
      undefined,
      column_video_list_data,
      set_column_video_list_data,
      set_column_video_list_loadable,
      set_column_video_list_loading
    );
  };

  return (
    <div className={classNames('tw-bg-gray-50', 'tw-min-h-screen')}>
      <Head>
        <title>{`${props.columnTitle} - 中原科技网`}</title>
        <link rel="shortcut icon" href="http://localhost:3000/favicons.ico" type="image/x-icon" />
        <meta name="description" content="中原科技网" />
      </Head>
      <div className="tw-flex tw-justify-center tw-my-3">
        <LogoBadge title="中原科技网" logosrc="http://localhost:3000/logo.png" />
      </div>
      <header className="lg:tw-sticky tw-top-0 tw-bg-white tw-z-10"></header>
      <main className="tw-min-h-screen tw-px-5 md:tw-px-20">
        <div className="tw-flex tw-justify-center tw-my-10">
          <div className=" tw-basis-2/3">
            <div className=" tw-sticky tw-top-20">
              <PictureBlock
                describe="学习新思想"
                href="https://www.people.com.cn"
                imgsrc="https://www.zzkpnews.com/style/img/kehuduan.jpg"
              />
              <div className="tw-border tw-rounded-lg tw-bg-white tw-p-3">
                <h2 className="tw-text-3xl tw-mx-5 tw-my-3 tw-font-bold">{`专栏 - ${props.columnTitle}`}</h2>
                <Tabs key="card" size="large">
                  <Tabs.TabPane key="1" title={<span className="tw-text-lg tw-font-bold">{'最新'}</span>}>
                    <NewsItemsList
                      bordered={false}
                      newsList={column_default_list_data}
                      loadable={column_default_list_loadable}
                      loading={column_default_list_loading}
                      loadFunc={loadMoreDefaultItems}
                    />
                  </Tabs.TabPane>
                  <Tabs.TabPane key="2" title={<span className="tw-text-lg tw-font-bold">{'文章'}</span>}>
                    <NewsItemsList
                      bordered={false}
                      newsList={column_article_list_data}
                      loadable={column_article_list_loadable}
                      loading={column_article_list_loading}
                      loadFunc={loadMoreArticleItems}
                    />
                  </Tabs.TabPane>
                  <Tabs.TabPane key="3" title={<span className="tw-text-lg tw-font-bold">{'视频'}</span>}>
                    <NewsItemsList
                      bordered={false}
                      newsList={column_video_list_data}
                      loadable={column_video_list_loadable}
                      loading={column_video_list_loading}
                      loadFunc={loadMoreVideoItems}
                    />
                  </Tabs.TabPane>
                </Tabs>
              </div>
            </div>
          </div>
          <div className=" tw-basis-1/3">
            <PictureBlock imgsrc="https://www.zzkpnews.com/style/ima/gg01.jpg" />
            <PictureBlock imgsrc="https://www.zzkpnews.com/style/ima/gg02.jpg" />
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
  const fetched_columns_data = (await fetchNavColumnItems()).data;
  const fetched_friendsList_data = (await fetchFriendsList()).data;

  const fetched_columnDefaultList_data = (await fetchColumnList('social' as string)).data;
  const fetched_columnArticleList_data = (await fetchColumnList('social' as string, 'article')).data;
  const fetched_columnAlbumList_data = (await fetchColumnList('social' as string, 'album')).data;
  const fetched_columnVideoList_data = (await fetchColumnList('social' as string, 'video')).data;
  const fetched_hotList_data = (await fetchHotList()).data;
  const fetchedWebsiteInfoData = (await fetchWebsiteInfo()).data;

  const returnProps: PortalPageProps = {
    navColumns: fetched_columns_data,
    friendsList: fetched_friendsList_data,
    hotList: fetched_hotList_data,
    columnIndex: 0,
    columnTitle: 'social',
    columnDefaultList: fetched_columnDefaultList_data,
    columnArticleList: fetched_columnArticleList_data,
    columnAlbumList: fetched_columnAlbumList_data,
    columnVideoList: fetched_columnVideoList_data,
    websiteInfo: fetchedWebsiteInfoData,
  };

  return {
    props: returnProps,
  };
};

export default Portal;
