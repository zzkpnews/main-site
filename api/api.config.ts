interface APIServerConfig {
  protocol: 'http' | 'https';
  hostname: string;
  port: number;
}
export const api_server_config: APIServerConfig = {
  protocol: 'http',
  hostname: '127.0.0.1',
  port: 3300,
};

const url_prefix = `${api_server_config.protocol}://${api_server_config.hostname}:${api_server_config.port}`;

const api_path = (controller_path: string) => `${url_prefix}${controller_path}`;

export const api_paths = {
  news_list: api_path('/news-list'),
  column_items: api_path('/column-items'),
  topic_items: api_path('/topic-items'),
  friends: api_path('/friends'),
  home_carousel: api_path('/home-carousel'),
  hot_list: api_path('/hot-list'),
  article_news: api_path('/article-news'),
  video_news: api_path('/video-news'),
  website_summary: api_path('/website-info/website-summary'),
  picture_block: api_path('/picture-block'),
  headline: api_path('/headline'),
  article_body: api_path('/article-content'),
  creator_items: api_path('/creator-items'),
  banner: api_path('/banner'),
};
