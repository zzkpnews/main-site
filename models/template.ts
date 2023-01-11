import {
  ArticleNews,
  BookItem,
  ColumnIndexItem,
  ColumnItem,
  CreatorItem,
  GroupIndexItem,
  GroupItem,
  HeadlineData as HeadlineNews,
  NewsItem,
  PictureBoxData,
  TopicItem,
  WebsiteSummary,
} from "./data";

export interface PageCommon {
  website_summary: WebsiteSummary;
}

export interface HomePageTemplate {
  books_show_box: BookItem[];
  headline: HeadlineNews;
  home_hot_list: NewsItem[];
  left_bottom_picture_box: PictureBoxData;
  home_news_list: NewsItem[];
  left_top_picture_box: PictureBoxData;
  special_news: NewsItem;
  top_picture_box: PictureBoxData;
  carousel_news: NewsItem[];
  topic_box: TopicItem[];
  page_common: PageCommon;
}

export interface ArticleContentPageTemplate {
  news_list: ArticleNews;
  next_list: NewsItem[];
  page_common: PageCommon;
}

export interface BookContentPageTemplate {
  book: BookItem;
  page_common: PageCommon;
}

export interface BookIndexPageTemplate {
  book_list: BookItem[];
  page_common: PageCommon;
}

export interface ColumnContentPageTemplate {
  column: ColumnItem;
  hot_list: NewsItem[];
  article_list: NewsItem[];
  video_list: NewsItem[];
  page_common: PageCommon;
}

export interface ColumnIndexPageTemplate {
  news_list: ColumnIndexItem[];
  page_common: PageCommon;
}

export interface CreatorProfilePageTemplate {
  creator: CreatorItem;
  recent_list: NewsItem[];
  article_list: NewsItem[];
  video_list: NewsItem[];
  book_list: BookItem[];
  hot_list: NewsItem[];
  page_common: PageCommon;
}

export interface GroupContentPageTemplate {
  group: GroupItem;
  hot_list: NewsItem[];
  article_list: NewsItem[];
  video_list: NewsItem[];
  page_common: PageCommon;
}

export interface GroupIndexPageTemplate {
  group_index: GroupIndexItem[];
  page_common: PageCommon;
}

export interface TopicContentPageTemplate {
  topic: TopicItem;
  news_list: NewsItem[];
  page_common: PageCommon;
}

export interface TopicIndexPageTemplate {
  page_common: PageCommon;
}


