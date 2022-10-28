import classNames from 'classnames';
import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import {
  APIResponse,
  fetch_article_body,
  fetch_article_news,
  fetch_column_items,
  fetch_friends,
  fetch_hot_list,
  fetch_picture_block,
  fetch_website_summary
} from '../../../../api';
import { useNavigation } from '../../../../hooks';
import { ArticleNews, ColumnItem, FriendItem, NewsListItem, PictureBlock, WebsiteSummary } from '../../../../models/data';
import { ColumnsNavigator, Footer, LogoBadge, SideList } from '../../../../views';
import { PictureNewsBlock } from '../../../../views/src/PictureNewsBlock';

interface ArticlePageProps {
  ColumnsData: APIResponse<ColumnItem[]>;
  FriendsData: APIResponse<FriendItem[]>;
  ArticleContentData: APIResponse<string>;
  ArticleData: APIResponse<ArticleNews>;
  HotListData: APIResponse<NewsListItem[]>;
  WebsiteInfoData: APIResponse<WebsiteSummary>;
  PictureNewsData: APIResponse<PictureBlock>;
}

const Article = (props: ArticlePageProps) => {
  const { currentColumnOrder } = useNavigation(props.ColumnsData.data!);
  return (
    <div className={classNames('tw-bg-gray-50', 'tw-min-h-screen')}>
      <Head>
        <title>{`${props.ArticleData.data?.title} - 中原科技网`}</title>
        <link rel="shortcut icon" href="../../../favicons.ico" type="image/x-icon" />
        <meta name="description" content={props.ArticleData.data?.citation!} />
        <meta name="keywords" content="" />
      </Head>
      <div className="tw-flex tw-justify-center tw-py-3">
        <LogoBadge title="中原科技网" logosrc="http://localhost:3000/logo.png" />
      </div>
      <header className="lg:tw-sticky tw-top-0 tw-bg-white tw-z-10">
        <ColumnsNavigator active={currentColumnOrder} column_items_response={props.ColumnsData} />
      </header>
      <main className="tw-min-h-screen tw-px-5 md:tw-px-20">
        <div className="md:tw-flex tw-justify-center tw-my-10">
          <div className="tw-basis-2/3">
            <div className="tw-sticky tw-top-20 tw-py-3 tw-bg-white tw-rounded-xl tw-border">
              <div className="tw-border-b  tw-py-4 tw-mx-5">
                <span className="tw-block tw-font-bold tw-text-lg tw-text-left tw-mx-auto tw-text-gray-500">
                  {props.ArticleData.data?.lead_title}
                </span>
                <h2 className="tw-font-bold tw-text-3xl tw-text-left tw-my-1">{props.ArticleData.data?.title}</h2>
                <span className="tw-block tw-text-left tw-mx-auto tw-font-bold tw-text-xl">
                  {props.ArticleData.data?.subtitle}
                </span>
                <p className="tw-mx-10 tw-my-4">{props.ArticleData.data?.citation}</p>
                {props.ArticleData.data?.bgimg ? (
                  <div className=" tw-px-10 tw-aspect-h-9 tw-aspect-w-16 tw-object-cover">
                    <img className="tw-rounded-xl tw-object-cover" src={props.ArticleData.data.bgimg} />
                  </div>
                ) : null}
              </div>
              <div className="tw-px-5 tw-my-4" dangerouslySetInnerHTML={{ __html: props.ArticleContentData.data! }} />
            </div>
          </div>
          <div className=" tw-basis-1/3">
            <PictureNewsBlock data={props.PictureNewsData} />
            <PictureNewsBlock data={props.PictureNewsData} />
            <SideList title="推荐阅读" list_response={props.HotListData} />
            <div className="tw-sticky tw-top-20">
              <SideList title="更多文章" list_response={props.HotListData} />
            </div>
          </div>
        </div>
      </main>
      <Footer Friends={props.FriendsData} WebsiteInfo={props.WebsiteInfoData} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const articleId = context.query.articleId as string;

  const response_article_news_item = await fetch_article_news(articleId);
  const response_article_content = await fetch_article_body(articleId!);
  const response_column_items = await fetch_column_items();
  const response_friend_links = await fetch_friends();
  const response_hot_news_items = await fetch_hot_list();
  const response_picture_news_items = await fetch_picture_block();
  const response_website_info = await fetch_website_summary();

  const returnProps: ArticlePageProps = {
    ArticleContentData: response_article_content,
    ArticleData: response_article_news_item,
    ColumnsData: response_column_items,
    FriendsData: response_friend_links,
    HotListData: response_hot_news_items,
    PictureNewsData: response_picture_news_items,
    WebsiteInfoData: response_website_info,
  };

  return {
    props: returnProps,
  };
};
export default Article;
