import axios, { AxiosError, AxiosPromise, AxiosResponse } from 'axios';
import { to } from 'await-to-js';
import {
  NewsItem,
  ColumnItem,
  FriendLink,
  WebsiteInfo,
  CarouselNews,
  ArticleNews,
  VideoNews,
  PictureNews,
  HeadlineNews,
  TopicItem,
  HeadBannerNews,
} from '../models';

import { ApiPaths } from './paths';

export interface APIReply<DataModel> {
  code: number;
  message?: string;
  data?: DataModel;
}

export type AxiosAPIResponse<DataModel> = AxiosResponse<APIReply<DataModel>>;

export interface NewsListApiParam {
  from?: 'creator' | 'column' | 'topic';
  id?: string;
  type?: 'article' | 'video';
  offset?: number;
}

const error_case_list: { [code: number]: string } = {
  400: '请求参数有误',
  403: '请求资源已关闭',
  404: '请求资源不存在',
  500: '服务器发生错误',
};

/**
 * 将通过 Ajax API 收发的数据和异常都统一包装成APIReply
 * @param err Axios 请求异常
 * @param resp Axios 请求成功后的Response
 * @returns 返回包装好的APIReply
 */
const packResponse = <DataModel>(err: AxiosError | null, resp?: AxiosAPIResponse<DataModel>): APIReply<DataModel> => {
  if (!err) {
    return {
      code: 0,
      message: 'ok',
      data: resp?.data.data,
    };
  }
  if (err.response?.status && error_case_list[err.response?.status]) {
    return {
      code: err.response.status,
      message: error_case_list[err.response?.status],
    };
  }
  return {
    code: 1,
    message: '未知错误',
  };
};

export const fetchNewsItems = async (
  from?: 'creator' | 'column' | 'topic',
  id?: string,
  type?: 'article' | 'video',
  offset?: number
) => {
  const [err, resp] = await to<AxiosAPIResponse<NewsItem[]>, AxiosError>(
    axios.get(ApiPaths.NewsItems, {
      responseType: 'json',
      params: {
        from: from,
        id: id,
        type: type,
        offset: offset,
      },
    })
  );
  return packResponse(err, resp);
};

export const fetchColumnItems = async () => {
  const [err, resp] = await to<AxiosAPIResponse<ColumnItem[]>, AxiosError>(
    axios.get(ApiPaths.ColumnItems, { responseType: 'json' })
  );
  return packResponse(err, resp);
};

export const fetchBannerNews = async () => {
  const [err, resp] = await to<AxiosAPIResponse<HeadBannerNews>, AxiosError>(
    axios.get(ApiPaths.BannerNews, { responseType: 'json' })
  );
  return packResponse(err, resp);
};

export const fetchFriendLink = async () => {
  const [err, resp] = await to<AxiosAPIResponse<FriendLink[]>, AxiosError>(
    axios.get(ApiPaths.FriendLinks, { responseType: 'json' })
  );
  return packResponse(err, resp);
};

export const fetchWebsiteInfo = async () => {
  const [err, resp] = await to<AxiosAPIResponse<WebsiteInfo>, AxiosError>(
    axios.get(ApiPaths.WebsiteInfo, { responseType: 'json' })
  );
  return packResponse(err, resp);
};

export const fetchCarouselNews = async () => {
  const [err, resp] = await to<AxiosAPIResponse<CarouselNews[]>, AxiosError>(
    axios.get(ApiPaths.HomeCarouselNews, { responseType: 'json' })
  );
  return packResponse(err, resp);
};

export const fetchHotNews = async () => {
  const [err, resp] = await to<AxiosAPIResponse<NewsItem[]>, AxiosError>(
    axios.get(ApiPaths.HotNewsItems, { responseType: 'json' })
  );
  return packResponse(err, resp);
};

export const fetchArticleNews = async (id: string) => {
  const [err, resp] = await to<AxiosAPIResponse<ArticleNews>, AxiosError>(
    axios.get(ApiPaths.ArticleNews, { responseType: 'json', params: { id: id } })
  );
  return packResponse(err, resp);
};

export const fetchVideoNews = async (id: string) => {
  const [err, resp] = await to<AxiosAPIResponse<VideoNews>, AxiosError>(
    axios.get(ApiPaths.HomeCarouselNews, { responseType: 'json', params: { id: id } })
  );
  return packResponse(err, resp);
};

export const fetchPictureNews = async () => {
  const [err, resp] = await to<AxiosAPIResponse<PictureNews>, AxiosError>(
    axios.get(ApiPaths.PictureNews, { responseType: 'json' })
  );
  return packResponse(err, resp);
};

export const fetchHeadLineNews = async () => {
  const [err, resp] = await to<AxiosAPIResponse<HeadlineNews>, AxiosError>(
    axios.get(ApiPaths.HeadlineNews, { responseType: 'json' })
  );
  return packResponse(err, resp);
};

export const fetchArticleContent = async (id: string) => {
  const [err, resp] = await to<AxiosAPIResponse<string>, AxiosError>(
    axios.get(ApiPaths.ArticleContent, { responseType: 'json', params: { id: id } })
  );
  return packResponse(err, resp);
};

export const fetchTopicItems = async () => {
  const [err, resp] = await to<AxiosAPIResponse<TopicItem[]>, AxiosError>(
    axios.get(ApiPaths.TopicItems, { responseType: 'json' })
  );
  return packResponse(err, resp);
};
