type NewsItemType = 'article' | 'video';

interface NewsListItem {
  bgimg?: string;
  citation?: string;
  columnId: string;
  columnName: string;
  itemId: string;
  keywords?: string;
  leadTitle?: string;
  subtitle?: string;
  timestamp: number;
  time:number;
  title: string;
  type: NewsItemType;
}

interface Article extends NewsListItem {
  author?: string;
  editor?: string;
  origin?: string;
  fileUrl: string;
}

interface Video extends NewsListItem {
  author?: string;
  editor?: string;
  origin?: string;
  videoUrl: string;
}

export type { NewsItemType, NewsListItem, Article, Video };
