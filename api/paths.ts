import path from 'path';
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
  Columns: QueryApiUrl('columns'),
  Topics: QueryApiUrl('topics'),
  Friends: QueryApiUrl('friends'),
  HomeCarousel: QueryApiUrl('home-carousel'),
  HotList: QueryApiUrl('hot-list'),
  Article: QueryApiUrl('article'),
  Video: QueryApiUrl('video'),
  WebsiteInfo: QueryApiUrl('website-info'),
  PictureNews: QueryApiUrl('picture-news'),
  Headline: QueryApiUrl('headline'),
};
