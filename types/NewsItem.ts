export type NewsItemType = 'article' | 'video';

export interface NewsListItem {
  bgimg?: string;
  citation?: string;
  columnId: string;
  columnName: string;
  itemId: string;
  keywords?: string;
  leadTitle?: string;
  subtitle?: string;
  timestamp: number;
  title: string;
  type: NewsItemType;
}

export interface Article extends NewsListItem {
  author?: string;
  editor?: string;
  origin?: string;
  fileUrl: string;
}

export interface Video extends NewsListItem {
  author?: string;
  editor?: string;
  origin?: string;
  videoUrl: string;
}
