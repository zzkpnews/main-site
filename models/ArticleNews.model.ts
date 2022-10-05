import { NewsSummary } from './NewsSummary.model';

interface ArticleNews extends NewsSummary {
  /**
   * 文章作者
   */
  author?: null | string;
  /**
   * 文章内容请求链接，这个链接将返回纯文本数据
   */
  dataUrl?: null | string;
  /**
   * 文章编辑
   */
  editor?: null | string;
  /**
   * 文章来源
   */
  origin?: null | string;
}

export type { ArticleNews };
