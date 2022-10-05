import { NewsSummary } from './NewsSummary.model';

interface VideoNews extends NewsSummary {
  /**
   * 视频作者
   */
  author?: null | string;
  /**
   * 视频内容请求链接，这个链接可以是视频流链接，也可以是HTML5可以识别的视频链接，用于嵌入在iframe中展示。
   */
  videoUrl?: null | string;
  /**
   * 视频编辑
   */
  editor?: null | string;
  /**
   * 视频来源
   */
  origin?: null | string;
}

export type { VideoNews };
