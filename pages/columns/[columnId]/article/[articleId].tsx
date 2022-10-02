import classNames from 'classnames';
import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import {
  fetchArticleContent,
  fetchArticleItemMeta,
  fetchFriendsList,
  fetchHotList,
  fetchNavColumnItems,
  fetchPictureBlock,
  fetchWebsiteInfo,
} from '../../../../api/fetchData';
import { getNavColumnOrder, NavColumn } from '../../../../models/Columns';
import { FriendsListItem } from '../../../../models/Friends';
import { Article, NewsListItem } from '../../../../models/NewsItem';
import { PagePictureBlockInfo } from '../../../../models/PictureBlock';
import { WebsiteInfo } from '../../../../models/WebsiteInfo';
import ColumnNav from '../../../../views/ColumnNav';
import Footer from '../../../../views/Footer';
import LogoBadge from '../../../../views/LogoBadge';
import PictureBlock from '../../../../views/PictureBlock';
import SideList from '../../../../views/SideList';

interface ArticlePageProps {
  navColumns: NavColumn[];
  friendsList: FriendsListItem[];
  articleContent: string;
  articleItemDetail: Article;
  columnOrder: number;
  hotList: NewsListItem[];
  websiteInfo: WebsiteInfo;
  pagePictureBlock: PagePictureBlockInfo;
}

const Article = (props: ArticlePageProps) => {
  return (
    <div className={classNames('tw-bg-gray-50', 'tw-min-h-screen')}>
      <Head>
        <title>{`${props.articleItemDetail.title} - 中原科技网`}</title>
        <link rel="shortcut icon" href="../../../favicons.ico" type="image/x-icon" />
        <meta name="description" content={props.articleItemDetail.citation} />
        <meta name="keywords" content="" />
      </Head>
      <div className="tw-flex tw-justify-center tw-py-3">
        <LogoBadge title="中原科技网" logosrc="http://localhost:3000/logo.png" />
      </div>
      <header className="lg:tw-sticky tw-top-0 tw-bg-white tw-z-10">
        <ColumnNav activeColumnOrder={props.columnOrder} navItems={props.navColumns} />
      </header>
      <main className="tw-min-h-screen tw-px-5 md:tw-px-20">
        <div className="md:tw-flex tw-justify-center tw-my-10">
          <div className="tw-basis-2/3">
            <div className="tw-sticky tw-top-20 tw-py-3 tw-bg-white tw-rounded-xl">
              <div className="tw-border-b  tw-py-4 tw-mx-5">
                <span className="tw-block tw-font-bold tw-text-lg tw-text-left tw-mx-auto tw-text-gray-500">
                  {props.articleItemDetail.leadTitle}
                </span>
                <h2 className="tw-font-bold tw-text-3xl tw-text-left tw-my-1">{props.articleItemDetail.title}</h2>
                <span className="tw-block tw-text-left tw-mx-auto tw-font-bold tw-text-xl">
                  {props.articleItemDetail.subtitle}
                </span>
                <p className="tw-mx-10 tw-my-4">{props.articleItemDetail.citation}</p>
                {props.articleItemDetail.bgimg ? (
                  <div className=" tw-px-10 tw-aspect-h-9 tw-aspect-w-16 tw-object-cover">
                    <img className="tw-rounded-xl tw-object-cover" src={props.articleItemDetail.bgimg} />
                  </div>
                ) : null}
              </div>
              <div className="tw-px-5 tw-my-4 " dangerouslySetInnerHTML={{ __html: props.articleContent }} />
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
            <SideList title="推荐阅读" data={props.hotList} />
            <div className="tw-sticky tw-top-20">
              <SideList title="更多文章" data={props.hotList} />
            </div>
          </div>
        </div>
      </main>
      <Footer friendsList={props.friendsList} websiteInfo={props.websiteInfo} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const articleId = context.query.articleId as string;
  const columnId = context.query.columnId as string;

  const fetchedNavColumns = (await fetchNavColumnItems()).data;
  const fetchedFriendsListData = (await fetchFriendsList()).data;
  const fetchedArticleContentData = (await fetchArticleContent(articleId)).data;
  const fetchedArticleItemMetaData = (await fetchArticleItemMeta(articleId)).data;
  const fetchedPagePictureBlock = (await fetchPictureBlock(columnId)).data;
  const fetchedHotListData = (await fetchHotList()).data;
  const fetchedWebsiteInfoData = (await fetchWebsiteInfo()).data;

  const columnOrder = getNavColumnOrder(fetchedNavColumns, columnId);

  const returnProps: ArticlePageProps = {
    navColumns: fetchedNavColumns,
    friendsList: fetchedFriendsListData,
    articleContent: fetchedArticleContentData,
    articleItemDetail: fetchedArticleItemMetaData,
    columnOrder: columnOrder,
    hotList: fetchedHotListData,
    websiteInfo: fetchedWebsiteInfoData,
    pagePictureBlock: fetchedPagePictureBlock,
  };

  return {
    props: returnProps,
  };
};
export default Article;
