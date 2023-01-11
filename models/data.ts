export type NewsType = "article" | "video";

export interface NewsItem {
  news_id: string;
  time_stamp: number;
  keywords?: string;
  type: "article" | "video";

  title: string;
  lead_title?: string;
  subtitle?: string;

  bgimg?: string;
  citation?: string;
  column_id: string;
  column_title: string;
  creator_id: string;
  creator_title: string;
}

export interface CreatorItem {
  creator_id: string;
  title: string;
  phone: string;
  email: string;

  bgimg?: string;
  describe?: string;
  qq?: string;
  wechat?: string;
  url?: string;

  logo_url?: string;
}

export interface ColumnItem {
  column_id: string;
  describe?: string;
  title: string;
  column_order: string;
}

export interface ColumnIndexItem {
  column_id: string;
  title: string;
  column_order: string;
  recent_news: NewsItem[];
  hot_news: NewsItem[];
}

export interface TopicItem {
  topic_id: string;
  title: string;
  topic_order: number;

  logo_url: string;
  bgimg?: string;
  topic_describe: string;
}

export interface FriendItem {
  title: string;
  describe?: string;
  url?: string;
}

export interface PictureBoxData {
  img_url?: string;
  href?: string;
  describe?: string;
}

export interface CarouselItem {
  title: string;
  lead_title?: string;
  subtitle?: string;

  img_url: string;
  citation?: string;
  url?: string;
}

export interface HeadlineData {
  title: string;

  lead_title?: string;
  subtitle?: string;
  url: string;
}

export interface Banner {
  img_url: string;
  href?: string;
  describe?: string;
  open: boolean;
}

export interface ArticleNews {
  news_id: string;
  time_stamp: number;
  keywords: string;

  title: string;
  lead_title: string;
  subtitle: string;

  bgimg: string;
  citation: string;

  column_id: string;
  column_title: string;

  creator_id: string;
  creator_title: string;
  creator_logo: string;
  creator_describe: string;

  author: string;
  editor: string;
  origin: string;
  origin_url: string;
}

export interface VideoNews {
  news_id: string;
  time_stamp: number;
  keywords?: string;

  title: string;
  lead_title?: string;
  subtitle?: string;

  bgimg?: string;
  citation?: string;

  column_id: string;
  column_title: string;

  creator_id: string;
  creator_title: string;
  creator_logo: string;
  creator_introduction: string;

  author?: string;
  video_url: string;
  editor?: string;
  origin?: string;
  origin_url: string;
}

export type TopicNewsListData = {
  topic_title: string;
  topic_id: string;
  list: {
    news_id: string;
    title: string;
    subtitle?: string;
    type: NewsType;
  }[];
}[];

export interface WebsiteSummary {
  title: string;
  describe?: string;
  keywords?: string;

  address?: string;
  email?: string;
  phone?: string[];
  wechat?: string;

  friends?: FriendItem[];

  technology_support?: string;
  icp?: string;
  institution?: string;
}

export type BookItem = {
  title: string;
  keywords?: string;
  img_url: string;
  book_id: string;
  citation: string;
  time_stamp: number;
};

export type GroupItem = {
  title: string;
  group_id: string;
};

export type GroupIndexItem = {
  group: GroupItem;
  article_list: NewsItem[];
  video_list: NewsItem[];
};

export interface APIData<DataModel> {
  code: number;
  message?: string;
  content?: DataModel;
}
