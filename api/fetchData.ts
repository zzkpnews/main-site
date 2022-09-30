import axios, { AxiosPromise } from 'axios';
import { Article, NewsListItem, Video } from '../types/NewsItem';
import { FriendsListItem } from '../types/Friends';
import { HomeCarouselItem } from '../types/HomeCarousel';
import { NavColumns } from '../types/Columns';
import { PagePictureBlockInfo } from '../types/PictureBlock';
import { web_api_url } from './api.register';
import { WebsiteInfo } from '../types/WebsiteInfo';
import { HeadLine } from '../types/Headline';

export const fetchNavColumnItems = (): AxiosPromise<NavColumns[]> => {
  return axios({
    method: 'GET',
    url: web_api_url.NavColumnList,
    responseType: 'json',
  });
};

export const fetchFriendsList = (): AxiosPromise<FriendsListItem[]> => {
  return axios({
    method: 'GET',
    url: web_api_url.FriendsList,
    responseType: 'json',
  });
};

export const fetchWebsiteInfo = (): AxiosPromise<WebsiteInfo> => {
  return axios({
    method: 'GET',
    url: web_api_url.WebsiteInfo,
    responseType: 'json',
  });
};

export const fetchHomeList = (offset?: number): AxiosPromise<NewsListItem[]> => {
  return axios({
    method: 'GET',
    url: web_api_url.HomeList,
    params: {
      offset: offset,
    },
    responseType: 'json',
  });
};

export const fetchColumnList = (
  columnId: string,
  type?: 'article' | 'album' | 'video',
  offset?: number
): AxiosPromise<NewsListItem[]> => {
  return axios({
    method: 'GET',
    url: web_api_url.ColumnList,
    params: {
      column: columnId,
      offset: offset,
      type: type,
    },
    responseType: 'json',
  });
};

export const fetchHomeCarousel = (offset?: number): AxiosPromise<HomeCarouselItem[]> => {
  return axios({
    method: 'GET',
    url: web_api_url.HomeCarousel,
    responseType: 'json',
  });
};

export const fetchHotList = (): AxiosPromise<NewsListItem[]> => {
  return axios({
    method: 'GET',
    url: web_api_url.HotList,
    responseType: 'json',
  });
};

export const fetchArticleContent = (id: string): AxiosPromise<string> => {
  return axios({
    method: 'GET',
    url: web_api_url.ArticleContent(id),
    responseType: 'json',
  });
};

export const fetchArticleItemMeta = (id: string): AxiosPromise<Article> => {
  return axios({
    method: 'GET',
    url: web_api_url.ArticleItemMeta,
    params: { id: id },
    responseType: 'json',
  });
};

export const fetchVideoItemMeta = (id: string): AxiosPromise<Video> => {
  return axios({
    method: 'GET',
    url: web_api_url.VideoItemMeta,
    params: { id: id },
    responseType: 'json',
  });
};

export const fetchPictureBlock = (columnId?: string): AxiosPromise<PagePictureBlockInfo> => {
  return axios({
    method: 'GET',
    url: web_api_url.PictureBlockInfo,
    params: {
      column: columnId,
    },
    responseType: 'json',
  });
};

export const fetchHeadLine = (columnId?: string): AxiosPromise<HeadLine> => {
  return axios({
    method: 'GET',
    url: web_api_url.HeadLine,
    responseType: 'json',
  });
};
