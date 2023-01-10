import {
  BookItem,
  CarouselItem,
  HeadlineData,
  NewsItem,
  PictureBoxData,
  TopicItem,
  WebsiteSummary,
} from "./data";

export interface PageCommon {
  website_summary:WebsiteSummary
}

export interface HomePageTemplate {
  books_show_box: BookItem[];
  headline: HeadlineData;
  home_hot_list: NewsItem[];
  left_bottom_picture_box: PictureBoxData;
  home_news_list: NewsItem[];
  left_top_picture_box: PictureBoxData;
  special_news_list: NewsItem;
  top_picture_box: PictureBoxData;
  carousel_news: NewsItem[];
  topic_box: TopicItem[];
  page_common: PageCommon;
}
