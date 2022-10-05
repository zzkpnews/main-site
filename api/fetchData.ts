import axios, { AxiosPromise } from 'axios';
import {
  NewsSummary,
  ColumnSummary,
  FriendLink,
  WebsiteInfo,
  CarouselNews,
  ArticleNews,
  VideoNews,
  PictureBlockNews,
  HeadLineNews,
} from '../models';

import { web_api_url } from './api.register';

export interface NewsListApiParam {
  from?: 'home' | 'column' | 'topic';
  id?: string;
  type?: 'article' | 'video';
  offset?: number;
}

export const fetchNewsList = (params: NewsListApiParam): AxiosPromise<NewsSummary[]> => {
  return axios({
    method: 'GET',
    url: web_api_url.NewsList,
    responseType: 'json',
    params: params,
  });
};

export const fetchNavColumnItems = (): AxiosPromise<ColumnSummary[]> => {
  return axios({
    method: 'GET',
    url: web_api_url.NavColumnList,
    responseType: 'json',
  });
};

export const fetchFriendsList = (): AxiosPromise<FriendLink[]> => {
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

export const fetchHomeList = (offset?: number): AxiosPromise<NewsSummary[]> => {
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
): AxiosPromise<NewsSummary[]> => {
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

export const fetchHomeCarousel = (offset?: number): AxiosPromise<CarouselNews[]> => {
  return axios({
    method: 'GET',
    url: web_api_url.HomeCarousel,
    responseType: 'json',
  });
};

export const fetchHotList = (): AxiosPromise<NewsSummary[]> => {
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

export const fetchArticleItemMeta = (id: string): AxiosPromise<ArticleNews> => {
  return axios({
    method: 'GET',
    url: web_api_url.ArticleItemMeta,
    params: { id: id },
    responseType: 'json',
  });
};

export const fetchVideoItemMeta = (id: string): AxiosPromise<VideoNews> => {
  return axios({
    method: 'GET',
    url: web_api_url.VideoItemMeta,
    params: { id: id },
    responseType: 'json',
  });
};

export const fetchPictureBlock = (columnId?: string): AxiosPromise<PictureBlockNews> => {
  return axios({
    method: 'GET',
    url: web_api_url.PictureBlockInfo,
    params: {
      column: columnId,
    },
    responseType: 'json',
  });
};

export const fetchHeadLineNews = (columnId?: string): AxiosPromise<HeadLineNews> => {
  return axios({
    method: 'GET',
    url: web_api_url.HeadLine,
    responseType: 'json',
  });
};
