import axios, { AxiosPromise } from 'axios';
import {
  NewsItem,
  ColumnItem,
  FriendLink,
  WebsiteInfo,
  CarouselNews,
  ArticleNews,
  VideoNews,
  PictureNews,
  HeadLineNews,
} from '../models';

import { ApiPaths } from './paths';

export interface NewsListApiParam {
  from?: 'home' | 'column' | 'topic';
  id?: string;
  type?: 'article' | 'video';
  offset?: number;
}

export const fetchNewsItems = (params: NewsListApiParam): AxiosPromise<NewsItem[]> => {
  return axios({
    method: 'GET',
    url: ApiPaths.NewsList,
    responseType: 'json',
    params: params,
  });
};

export const fetchColumnItems = (): AxiosPromise<ColumnItem[]> => {
  return axios({
    method: 'GET',
    url: ApiPaths.Columns,
    responseType: 'json',
  });
};

export const fetchFriendLink = (): AxiosPromise<FriendLink[]> => {
  return axios({
    method: 'GET',
    url: ApiPaths.Friends,
    responseType: 'json',
  });
};

export const fetchWebsiteInfo = (): AxiosPromise<WebsiteInfo> => {
  return axios({
    method: 'GET',
    url: ApiPaths.WebsiteInfo,
    responseType: 'json',
  });
};

export const fetchCarouselNews = (): AxiosPromise<CarouselNews[]> => {
  return axios({
    method: 'GET',
    url: ApiPaths.HomeCarousel,
    responseType: 'json',
  });
};

export const fetchHotNews = (): AxiosPromise<NewsItem[]> => {
  return axios({
    method: 'GET',
    url: ApiPaths.HotList,
    responseType: 'json',
  });
};

export const fetchArticleNews = (id: string): AxiosPromise<ArticleNews> => {
  return axios({
    method: 'GET',
    url: ApiPaths.Article,
    params: { id: id },
    responseType: 'json',
  });
};

export const fetchVideoNews = (id: string): AxiosPromise<VideoNews> => {
  return axios({
    method: 'GET',
    url: ApiPaths.Video,
    params: { id: id },
    responseType: 'json',
  });
};

export const fetchPictureNews = (columnId?: string): AxiosPromise<PictureNews> => {
  return axios({
    method: 'GET',
    url: ApiPaths.PictureNews,
    params: {
      column: columnId,
    },
    responseType: 'json',
  });
};

export const fetchHeadLineNews = (): AxiosPromise<HeadLineNews> => {
  return axios({
    method: 'GET',
    url: ApiPaths.Headline,
    responseType: 'json',
  });
};
