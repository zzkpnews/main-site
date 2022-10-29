export interface NewsListItem {
  news_id: string;
  time_stamp: number;
  keywords?: string | null;
  type: 'article' | 'video';

  title: string;
  lead_title?: string | null;
  subtitle?: string | null;

  bgimg?: string | null;
  citation?: string | null;
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

  describe?: string | null;
  qq?: string | null;
  wechat?: string | null;
  url?: string | null;

  logo_url?: string | null;
}

export interface ColumnItem {
  column_id: string;
  title: string;
  column_order: string;
}

export interface TopicItem {
  topic_id: string;
  title: string;
  topic_order: number;

  logo_url: string;
  bgimg?: string | null;
  topic_describe: string;
}

export interface FriendItem {
  title: string;
  describe?: string | null;
  url?: string | null;
}

export interface PictureBlock {
  img_url?: string | null;
  href?: string | null;
  describe?: string | null;
}

export interface CarouselItem {
  title: string;
  lead_title?: string | null;
  subtitle?: string | null;

  img_url: string;
  citation?: string | null;
  href?: string | null;
}

export interface Headline {
  title: string;

  lead_title?: string | null;
  subtitle?: string | null;
  href: string;
}

export interface Banner {
  img_url: string;
  href?: string | null;
  describe?: string | null;
  open: boolean;
}

export interface ArticleNews {
  news_id: string;
  time_stamp: number;
  keywords: string | null;

  title: string;
  lead_title: string | null;
  subtitle: string | null;

  bgimg: string | null;
  citation: string | null;

  column_id: string;
  column_title: string;
  creator_id: string;
  creator_title: string;

  author: string | null;
  editor: string | null;
  origin: string | null;
  origin_url: string | null;
}

export interface VideoNews {
  news_id: string;
  time_stamp: number;
  keywords?: string | null;

  title: string;
  lead_title?: string | null;
  subtitle?: string | null;

  bgimg?: string | null;
  citation?: string | null;

  column_id: string;
  column_title: string;
  creator_id: string;
  creator_title: string;

  author?: string | null;
  video_url: string;
  editor?: string | null;
  origin?: string | null;
  origin_url: string | null;
}

export interface WebsiteSummary {
  title: string;
  describe?: string | null;

  address?: string | null;
  email?: string | null;
  phone?: string[] | null;
  wechat?: string | null;

  technology_support?: string | null;
  icp?: string | null;
  institution?: string | null;
}

