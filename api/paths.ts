const Server: {
  protocol: 'http' | 'https';
  hostname: string;
  port: number;
} = {
  protocol: 'http',
  hostname: '127.0.0.1',
  port: 4000,
};

const url_prefix = `${Server.protocol}://${Server.hostname}:`;

const QueryApiUrl = (api_path: string) => `${Server.protocol}://${Server.hostname}:4000/${api_path}`;

// 在这里填写API地址
export const ApiPaths = {
  NewsItems: QueryApiUrl('news-items'),
  ColumnItems: QueryApiUrl('columns'),
  TopicItems: QueryApiUrl('topics'),
  FriendLinks: QueryApiUrl('friends'),
  HomeCarouselNews: QueryApiUrl('home-carousel'),
  HotNewsItems: QueryApiUrl('hot-list'),
  ArticleNews: QueryApiUrl('article'),
  VideoNews: QueryApiUrl('video'),
  WebsiteInfo: QueryApiUrl('website-info'),
  PictureNews: QueryApiUrl('picture-news'),
  HeadlineNews: QueryApiUrl('headline'),
  ArticleContent: QueryApiUrl('article-content'),
  CreatorItem:QueryApiUrl('get-creator'),
};
