import { Tabs } from '@arco-design/web-react';
import classNames from 'classnames';
import Head from 'next/head';
import {
  APIResponse,
  fetch_column_items,
  fetch_friends,
  fetch_hot_list,
  fetch_news_list,
  fetch_picture_block,
  fetch_website_summary,
} from '../../../api';
import { useNavigation, useNewsList } from '../../../hooks';
import { ColumnItem, FriendLink, NewsItem, PictureNews, WebsiteInfo } from '../../../models';
import { Footer, LogoBadge, ColumnsNavigator, NewsList, PictureBlock, SideList } from '../../../views';

import type { GetServerSideProps } from 'next';

interface ColumnIndexPageProps {
  ArticleNewsItemsData: APIResponse<NewsItem[]>;
  ColumnsData: APIResponse<ColumnItem[]>;
  DefaultNewsItemsData: APIResponse<NewsItem[]>;
  FriendsData: APIResponse<FriendLink[]>;
  HotListData: APIResponse<NewsItem[]>;
  PictureNewsData: APIResponse<PictureNews>;
  VideoNewsListData: APIResponse<NewsItem[]>;
  WebsiteInfoData: APIResponse<WebsiteInfo>;
}

const ColumnIndex = (props: ColumnIndexPageProps) => {
  const { currentColumnId, currentColumnOrder, currentColumnTitle } = useNavigation(props.ColumnsData.data!);

  const {
    data: default_list_data,
    loadable: default_list_loadable,
    loading: default_list_loading,
    handleFetchData: handle_default_list_fetch_data,
  } = useNewsList(props.DefaultNewsItemsData, 'column', currentColumnId);

  const {
    data: video_list_data,
    loadable: video_list_loadable,
    loading: video_list_loading,
    handleFetchData: handle_video_list_fetch_data,
  } = useNewsList(props.VideoNewsListData, 'column', currentColumnId, 'video');

  const {
    data: article_list_data,
    loadable: article_list_loadable,
    loading: article_list_loading,
    handleFetchData: handle_article_list_fetch_data,
  } = useNewsList(props.ArticleNewsItemsData, 'column', currentColumnId, 'article');

  return (
    <div className={classNames('tw-bg-gray-50', 'tw-min-h-screen')}>
      <Head>
        <title>{`${currentColumnTitle} - 中原科技网`}</title>
        <link rel="shortcut icon" href="http://localhost:3000/favicons.ico" type="image/x-icon" />
        <meta name="description" content="中原科技网" />
      </Head>
      <div className="tw-flex tw-justify-center tw-py-3">
        <LogoBadge title="中原科技网" logosrc="http://localhost:3000/logo.png" />
      </div>
      <header className="lg:tw-sticky tw-top-0 tw-bg-white tw-z-10">
        <ColumnsNavigator active={currentColumnOrder} column_items_response={props.ColumnsData} />
      </header>
      <main className="tw-min-h-screen tw-px-5 md:tw-px-20">
        <div className="lg:tw-flex tw-justify-center tw-my-10">
          <div className=" tw-basis-2/3">
            <div className=" tw-sticky tw-top-20">
              <PictureBlock data={props.PictureNewsData} />
              <div className="tw-border tw-rounded-lg tw-bg-white tw-p-3">
                <h2 className="tw-text-3xl tw-mx-5 tw-my-3 tw-font-bold">{`专栏 - ${currentColumnTitle}`}</h2>
                <Tabs key="card" size="large">
                  <Tabs.TabPane key="1" title={<span className="tw-text-lg tw-font-bold">{'最新'}</span>}>
                    <NewsList
                      bordered={false}
                      list={default_list_data}
                      loadable={default_list_loadable}
                      loading={default_list_loading}
                      loadHandler={handle_default_list_fetch_data}
                    />
                  </Tabs.TabPane>
                  <Tabs.TabPane key="2" title={<span className="tw-text-lg tw-font-bold">{'文章'}</span>}>
                    <NewsList
                      bordered={false}
                      list={article_list_data}
                      loadable={article_list_loadable}
                      loading={article_list_loading}
                      loadHandler={handle_article_list_fetch_data}
                    />
                  </Tabs.TabPane>
                  <Tabs.TabPane key="4" title={<span className="tw-text-lg tw-font-bold">{'视频'}</span>}>
                    <NewsList
                      bordered={false}
                      list={video_list_data}
                      loadable={video_list_loadable}
                      loading={video_list_loading}
                      loadHandler={handle_video_list_fetch_data}
                    />
                  </Tabs.TabPane>
                </Tabs>
              </div>
            </div>
          </div>
          <div className=" tw-basis-1/3">
            <PictureBlock data={props.PictureNewsData} />
            <PictureBlock data={props.PictureNewsData} />
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
export const getServerSideProps: GetServerSideProps = async (context) => {
  const columnId = context.query.columnId as string;

  const response_news_items_in_article = await fetch_news_list('column', columnId, 'article');
  const response_column_items = await fetch_column_items();
  const response_news_items_in_default = await fetch_news_list('column', columnId);
  const response_friend_links = await fetch_friends();
  const response_hot_news_items = await fetch_hot_list();
  const response_picture_news_items = await fetch_picture_block();
  const response_news_items_in_video = await fetch_news_list('column', columnId, 'video');
  const response_website_info = await fetch_website_summary();

  const returnProps: ColumnIndexPageProps = {
    ArticleNewsItemsData: response_news_items_in_article,
    ColumnsData: response_column_items,
    DefaultNewsItemsData: response_news_items_in_default,
    FriendsData: response_friend_links,
    HotListData: response_hot_news_items,
    PictureNewsData: response_picture_news_items,
    VideoNewsListData: response_news_items_in_video,
    WebsiteInfoData: response_website_info,
  };

  return {
    props: returnProps,
  };
};
export default ColumnIndex;
