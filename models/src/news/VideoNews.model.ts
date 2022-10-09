import { NewsItem } from '../view/NewsItem.model';

interface VideoNews extends NewsItem {
  /**
   * 视频作者
   */
  author?: string;
  /**
   * 视频内容请求链接，这个链接可以是视频流链接，也可以是HTML5可以识别的视频链接，用于嵌入在iframe中展示。
   */
  video_url?: string;
  /**
   * 视频编辑
   */
  editor?: string;
  /**
   * 视频来源
   */
  origin?: string;
  /**
   * 视频来源链接
   */
  origin_url?: string;
}

export type { VideoNews };
