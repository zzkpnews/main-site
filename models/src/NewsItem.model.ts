export interface NewsItem {
  /**
   * 新闻背景图像
   */
  bgimg: null | string;
  /**
   * 新闻的引言
   */
  citation: null | string;
  /**
   * 所属的栏目id
   */
  column_id: null | string;
  /**
   * 所属的栏目标题
   */
  column_title: null | string;
  /**
   * 新闻创作者的id
   */
  creator_id: string;
  /**
   * 新闻创作者的名称
   */
  creator_title: string;
  /**
   * 新闻项ID
   */
  item_id: string;
  /**
   * 新闻的关键词
   */
  keywords: null | string;
  /**
   * 新闻的引题
   */
  lead_title: null | string;
  /**
   * 新闻的副标题
   */
  subtitle: null | string;
  /**
   * 新闻发布时间的时间戳
   */
  timestamp: number;
  /**
   * 新闻的标题
   */
  title: string;
  /**
   * 新闻的种类
   */
  type: 'article' | 'video';
}
