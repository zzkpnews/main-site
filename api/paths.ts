import path from 'path';
const Server: {
  protocol: 'http' | 'https';
  hostname: string;
  port: number;
} = {
  protocol: 'http',
  hostname: '127.0.0.1',
  port: 8800,
};

const url_prefix = `${Server.protocol}://${Server.hostname}:${Server.port}`;

const QueryApiUrl = (api_path: string) => path.join(url_prefix, api_path);

// 在这里填写API地址
export const ApiPaths = {
  NewsList: QueryApiUrl('news-list'),
  Columns: QueryApiUrl('columns'),
  Topics: QueryApiUrl('topics'),
  Friends: QueryApiUrl('news-list'),
  HomeCarousel: QueryApiUrl('home-carousel'),
  HotList: QueryApiUrl('hot-list'),
  Article: QueryApiUrl('article'),
  Video: QueryApiUrl('video'),
  WebsiteInfo: QueryApiUrl('website-info'),
  PictureNews: QueryApiUrl('picture-news'),
  Headline: QueryApiUrl('headline'),
};
