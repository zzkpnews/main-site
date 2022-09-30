/**
 * 首页轮播项接口
 */
export interface HomeCarouselItem {
  /**
   * 轮播项标题
   */
  title: string;
  /**
   * 轮播项引题
   */
  leadTitle?: string;
  /**
   * 轮播项副标题
   */
  subtitle?: string;
  /**
   * 轮播项引言
   */
  citation: string;
  /**
   * 轮播项跳转链接
   */
  href: string;
  /**
   * 轮播项图片链接
   */
  imgsrc: string;
}

