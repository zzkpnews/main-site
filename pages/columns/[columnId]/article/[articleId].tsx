import classNames from 'classnames';
import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import {
  APIReply,
  fetchArticleContent,
  fetchArticleNews,
  fetchColumnItems,
  fetchFriendLink,
  fetchHotNews,
  fetchPictureNews,
  fetchWebsiteInfo,
} from '../../../../api/ajax';
import { useNavigation } from '../../../../hooks';
import { ArticleNews, ColumnItem, FriendLink, NewsItem, PictureNews, WebsiteInfo } from '../../../../models';
import { ColumnsNavigator, Footer, LogoBadge, PictureBlock, SideList } from '../../../../views';

interface ArticlePageProps {
  ColumnsData: APIReply<ColumnItem[]>;
  FriendsData: APIReply<FriendLink[]>;
  ArticleContentData: APIReply<string>;
  ArticleData: APIReply<ArticleNews>;
  HotListData: APIReply<NewsItem[]>;
  WebsiteInfoData: APIReply<WebsiteInfo>;
  PictureNewsData: APIReply<PictureNews>;
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
        <ColumnsNavigator Active={currentColumnOrder} Columns={props.ColumnsData} />
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
            <PictureBlock data={props.PictureNewsData} />
            <PictureBlock data={props.PictureNewsData} />
            <SideList title="推荐阅读" data={props.HotListData} />
            <div className="tw-sticky tw-top-20">
              <SideList title="更多文章" data={props.HotListData} />
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

  const response_article_news_item = await fetchArticleNews(articleId);
  const response_article_content = await fetchArticleContent(articleId!);
  const response_column_items = await fetchColumnItems();
  const response_friend_links = await fetchFriendLink();
  const response_hot_news_items = await fetchHotNews();
  const response_picture_news_items = await fetchPictureNews();
  const response_website_info = await fetchWebsiteInfo();

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
