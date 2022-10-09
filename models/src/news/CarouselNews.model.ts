type CarouselNews = {
  /**
   * 背景图片
   */
  img_url: string;
  /**
   * 新闻引言
   */
  citation?: string;
  /**
   * 跳转地址
   */
  href?: string;
  /**
   * 新闻引题
   */
  lead_title?: string;
  /**
   * 新闻副标题
   */
  subtitle?: string;
  /**
   * 新闻标题
   */
  title: string;
};

export type { CarouselNews };