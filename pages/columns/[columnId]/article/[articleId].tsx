import classNames from 'classnames';
import Head from 'next/head';
import { ArticleNews, ColumnItem, FriendLink, NewsItem, PictureBlockNews, WebsiteInfo } from '../../../../models';
import { Footer, LogoBadge, Navigation, PictureBlock, SideList } from '../../../../views';
import { useNavigation } from '../../../../hooks';
import type { GetServerSideProps } from 'next';
import {
  fetchArticleContent,
  fetchArticleNews,
  fetchFriendList,
  fetchHotNews,
  fetchColumnsData,
  fetchPictureBlockNews,
  fetchWebsiteInfo,
} from '../../../../api/fetchData';

interface ArticlePageProps {
  columnsData: ColumnItem[];
  friendListData: FriendLink[];
  articleContent: string;
  articleNewsData: ArticleNews;
  hotNewsData: NewsItem[];
  websiteInfoData: WebsiteInfo;
  pictureBlockNewsData: PictureBlockNews;
}

const Article = (props: ArticlePageProps) => {
  const { currentColumnOrder } = useNavigation(props.columnsData);
  return (
    <div className={classNames('tw-bg-gray-50', 'tw-min-h-screen')}>
      <Head>
        <title>{`${props.articleNewsData.title} - 中原科技网`}</title>
        <link rel="shortcut icon" href="../../../favicons.ico" type="image/x-icon" />
        <meta name="description" content={props.articleNewsData.citation!} />
        <meta name="keywords" content="" />
      </Head>
      <div className="tw-flex tw-justify-center tw-py-3">
        <LogoBadge title="中原科技网" logosrc="http://localhost:3000/logo.png" />
      </div>
      <header className="lg:tw-sticky tw-top-0 tw-bg-white tw-z-10">
        <Navigation activeColumnOrder={currentColumnOrder} navItems={props.columnsData} />
      </header>
      <main className="tw-min-h-screen tw-px-5 md:tw-px-20">
        <div className="md:tw-flex tw-justify-center tw-my-10">
          <div className="tw-basis-2/3">
            <div className="tw-sticky tw-top-20 tw-py-3 tw-bg-white tw-rounded-xl">
              <div className="tw-border-b  tw-py-4 tw-mx-5">
                <span className="tw-block tw-font-bold tw-text-lg tw-text-left tw-mx-auto tw-text-gray-500">
                  {props.articleNewsData.lead_title}
                </span>
                <h2 className="tw-font-bold tw-text-3xl tw-text-left tw-my-1">{props.articleNewsData.title}</h2>
                <span className="tw-block tw-text-left tw-mx-auto tw-font-bold tw-text-xl">
                  {props.articleNewsData.subtitle}
                </span>
                <p className="tw-mx-10 tw-my-4">{props.articleNewsData.citation}</p>
                {props.articleNewsData.bgimg ? (
                  <div className=" tw-px-10 tw-aspect-h-9 tw-aspect-w-16 tw-object-cover">
                    <img className="tw-rounded-xl tw-object-cover" src={props.articleNewsData.bgimg} />
                  </div>
                ) : null}
              </div>
              <div className="tw-px-5 tw-my-4 " dangerouslySetInnerHTML={{ __html: props.articleContent }} />
            </div>
          </div>
          <div className=" tw-basis-1/3">
            <PictureBlock data={props.pictureBlockNewsData.sideTop} />
            <PictureBlock data={props.pictureBlockNewsData.sideBottom} />
            <SideList title="推荐阅读" data={props.hotNewsData} />
            <div className="tw-sticky tw-top-20">
              <SideList title="更多文章" data={props.hotNewsData} />
            </div>
          </div>
        </div>
      </main>
      <Footer friendsList={props.friendListData} websiteInfo={props.websiteInfoData} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const articleId = context.query.articleId as string;
  const columnId = context.query.columnId as string;

  const fetchedArticleContentData = (await fetchArticleContent(articleId)).data;
  const fetchedArticleNewsData = (await fetchArticleNews(articleId)).data;
  const fetchedColumnsData = (await fetchColumnsData()).data;
  const fetchedFriendsListData = (await fetchFriendList()).data;
  const fetchedHotNewsData = (await fetchHotNews()).data;
  const fetchedPictureBlockData = (await fetchPictureBlockNews(columnId)).data;
  const fetchedWebsiteInfoData = (await fetchWebsiteInfo()).data;

  const returnProps: ArticlePageProps = {
    articleContent: fetchedArticleContentData,
    articleNewsData: fetchedArticleNewsData,
    columnsData: fetchedColumnsData,
    friendListData: fetchedFriendsListData,
    hotNewsData: fetchedHotNewsData,
    pictureBlockNewsData: fetchedPictureBlockData,
    websiteInfoData: fetchedWebsiteInfoData,
  };

  return {
    props: returnProps,
  };
};
export default Article;
