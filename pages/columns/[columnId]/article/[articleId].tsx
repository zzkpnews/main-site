import classNames from 'classnames';
import Head from 'next/head';
import { ArticleNews, ColumnItem, FriendLink, NewsItem, PictureNews, WebsiteInfo } from '../../../../models';
import { Footer, LogoBadge, Navigation, PictureBlock, SideList } from '../../../../views';
import { useNavigation } from '../../../../hooks';
import type { GetServerSideProps } from 'next';
import {
  fetchArticleNews,
  fetchFriendLink,
  fetchHotNews,
  fetchColumnItems,
  fetchPictureNews,
  fetchWebsiteInfo,
  fetchArticleContent,
} from '../../../../api/ajax';

interface ArticlePageProps {
  ColumnsData: ColumnItem[];
  FriendsData: FriendLink[];
  ArticleContentData: string;
  ArticleData: ArticleNews;
  HotListData: NewsItem[];
  WebsiteInfoData: WebsiteInfo;
  PictureNewsData: PictureNews[];
}

const Article = (props: ArticlePageProps) => {
  const { currentColumnOrder } = useNavigation(props.ColumnsData);
  return (
    <div className={classNames('tw-bg-gray-50', 'tw-min-h-screen')}>
      <Head>
        <title>{`${props.ArticleData.title} - 中原科技网`}</title>
        <link rel="shortcut icon" href="../../../favicons.ico" type="image/x-icon" />
        <meta name="description" content={props.ArticleData.citation!} />
        <meta name="keywords" content="" />
      </Head>
      <div className="tw-flex tw-justify-center tw-py-3">
        <LogoBadge title="中原科技网" logosrc="http://localhost:3000/logo.png" />
      </div>
      <header className="lg:tw-sticky tw-top-0 tw-bg-white tw-z-10">
        <Navigation activeColumnOrder={currentColumnOrder} navItems={props.ColumnsData} />
      </header>
      <main className="tw-min-h-screen tw-px-5 md:tw-px-20">
        <div className="md:tw-flex tw-justify-center tw-my-10">
          <div className="tw-basis-2/3">
            <div className="tw-sticky tw-top-20 tw-py-3 tw-bg-white tw-rounded-xl">
              <div className="tw-border-b  tw-py-4 tw-mx-5">
                <span className="tw-block tw-font-bold tw-text-lg tw-text-left tw-mx-auto tw-text-gray-500">
                  {props.ArticleData.lead_title}
                </span>
                <h2 className="tw-font-bold tw-text-3xl tw-text-left tw-my-1">{props.ArticleData.title}</h2>
                <span className="tw-block tw-text-left tw-mx-auto tw-font-bold tw-text-xl">
                  {props.ArticleData.subtitle}
                </span>
                <p className="tw-mx-10 tw-my-4">{props.ArticleData.citation}</p>
                {props.ArticleData.bgimg ? (
                  <div className=" tw-px-10 tw-aspect-h-9 tw-aspect-w-16 tw-object-cover">
                    <img className="tw-rounded-xl tw-object-cover" src={props.ArticleData.bgimg} />
                  </div>
                ) : null}
              </div>
              <div className="tw-px-5 tw-my-4 " dangerouslySetInnerHTML={{ __html: props.ArticleContentData }} />
            </div>
          </div>
          <div className=" tw-basis-1/3">
            <PictureBlock data={props.PictureNewsData[0]} />
            <PictureBlock data={props.PictureNewsData[1]} />
            <SideList title="推荐阅读" data={props.HotListData} />
            <div className="tw-sticky tw-top-20">
              <SideList title="更多文章" data={props.HotListData} />
            </div>
          </div>
        </div>
      </main>
      <Footer friendsList={props.FriendsData} websiteInfo={props.WebsiteInfoData} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const articleId = context.query.articleId as string;
  const columnId = context.query.columnId as string;

  const fetchedArticleNewsData = (await fetchArticleNews(articleId)).data;
  const fetchedArticleContentData = (await fetchArticleContent(fetchedArticleNewsData.data_url!)).data;
  const fetchedColumnsData = (await fetchColumnItems()).data;
  const fetchedFriendsListData = (await fetchFriendLink()).data;
  const fetchedHotNewsData = (await fetchHotNews()).data;
  const fetchedPictureBlockData = (await fetchPictureNews(columnId)).data;
  const fetchedWebsiteInfoData = (await fetchWebsiteInfo()).data;

  const returnProps: ArticlePageProps = {
    ArticleContentData: fetchedArticleContentData,
    ArticleData: fetchedArticleNewsData,
    ColumnsData: fetchedColumnsData,
    FriendsData: fetchedFriendsListData,
    HotListData: fetchedHotNewsData,
    PictureNewsData: fetchedPictureBlockData,
    WebsiteInfoData: fetchedWebsiteInfoData,
  };

  return {
    props: returnProps,
  };
};
export default Article;
