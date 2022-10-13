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

export interface APIResponse<DataModel> {
  code: number;
  message: string;
  data: DataModel;
}

export interface NewsListApiParam {
  from?: 'home' | 'column' | 'topic';
  id?: string;
  type?: 'article' | 'video';
  offset?: number;
}

export const fetchNewsItems = (params: NewsListApiParam): AxiosPromise<APIResponse<NewsItem[]>> => {
  return axios({
    method: 'GET',
    url: ApiPaths.NewsItems,
    responseType: 'json',
    params: params,
  });
};

export const fetchColumnItems = (): AxiosPromise<APIResponse<ColumnItem[]>> => {
  return axios({
    method: 'GET',
    url: ApiPaths.Columns,
    responseType: 'json',
  });
};

export const fetchFriendLink = (): AxiosPromise<APIResponse<FriendLink[]>> => {
  return axios({
    method: 'GET',
    url: ApiPaths.Friends,
    responseType: 'json',
  });
};

export const fetchWebsiteInfo = (): AxiosPromise<APIResponse<WebsiteInfo>> => {
  return axios({
    method: 'GET',
    url: ApiPaths.WebsiteInfo,
    responseType: 'json',
  });
};

export const fetchCarouselNews = (): AxiosPromise<APIResponse<CarouselNews[]>> => {
  return axios({
    method: 'GET',
    url: ApiPaths.HomeCarousel,
    responseType: 'json',
  });
};

export const fetchHotNews = (): AxiosPromise<APIResponse<NewsItem[]>> => {
  return axios({
    method: 'GET',
    url: ApiPaths.HotList,
    responseType: 'json',
  });
};

export const fetchArticleNews = (id: string): AxiosPromise<APIResponse<ArticleNews>> => {
  return axios({
    method: 'GET',
    url: ApiPaths.Article,
    params: { id: id },
    responseType: 'json',
  });
};

export const fetchVideoNews = (id: string): AxiosPromise<APIResponse<VideoNews>> => {
  return axios({
    method: 'GET',
    url: ApiPaths.Video,
    params: { id: id },
    responseType: 'json',
  });
};

export const fetchPictureNews = (columnId?: string): AxiosPromise<APIResponse<PictureNews[]>> => {
  return axios({
    method: 'GET',
    url: ApiPaths.PictureNews,
    params: {
      column: columnId,
    },
    responseType: 'json',
  });
};

export const fetchHeadLineNews = (): AxiosPromise<APIResponse<HeadLineNews>> => {
  return axios({
    method: 'GET',
    url: ApiPaths.Headline,
    responseType: 'json',
  });
};

export const fetchArticleContent = (data_url: string): AxiosPromise<APIResponse<string>> => {
  return axios({
    method: 'GET',
    url: data_url,
    responseType: 'json',
  });
};
