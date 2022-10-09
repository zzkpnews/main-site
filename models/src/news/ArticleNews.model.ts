import { NewsItem } from '../view/NewsItem.model';

interface ArticleNews extends NewsItem {
  /**
   * 文章作者
   */
  author?: string;
  /**
   * 文章内容请求链接，这个链接将返回纯文本数据
   */
  data_url?: string;
  /**
   * 文章编辑
   */
  editor?: string;
  /**
   * 文章来源
   */
  origin?: string;
}

export type { ArticleNews };
