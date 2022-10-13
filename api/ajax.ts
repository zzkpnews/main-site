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
  TopicItem,
} from '../models';

import { ApiPaths } from './paths';

export interface APIResponse<DataModel> {
  code: number;
  message: string;
  data: DataModel;
}

export interface NewsListApiParam {
  from?: 'creator' | 'column' | 'topic';
  id?: string;
  type?: 'article' | 'video';
  offset?: number;
}

export const fetchNewsItems = (
  from?: 'creator' | 'column' | 'topic',
  id?: string,
  type?: 'article' | 'video',
  offset?: number
): AxiosPromise<APIResponse<NewsItem[]>> => {
  return axios({
    method: 'GET',
    url: ApiPaths.NewsItems,
    responseType: 'json',
    params: {
      from: from,
      id: id,
      type: type,
      offset: offset,
    },
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

export const fetchArticleContent = (id: string): AxiosPromise<string> => {
  return axios({
    method: 'GET',
    url: ApiPaths.ArticleContent,
    params: {
      id: id,
    },
    responseType: 'text',
  });
};

export const fetchTopicItems = (): AxiosPromise<APIResponse<TopicItem[]>> => {
  return axios({
    method: 'GET',
    url: ApiPaths.Topics,
    responseType: 'json',
  });
};
