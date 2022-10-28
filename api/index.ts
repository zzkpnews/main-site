import { to } from 'await-to-js';
import axios, { AxiosError, AxiosResponse } from 'axios';
import {
  ArticleNews,
  Banner,
  CarouselItem,
  ColumnItem,
  FriendItem,
  Headline,
  NewsListItem,
  PictureBlock,
  TopicItem,
  VideoNews,
  WebsiteSummary,
} from '../models/data';

import { api_paths } from './api.config';

export interface APIResponse<DataModel> {
  code: number;
  message?: string;
  data?: DataModel;
}

export type AxiosAPIResponse<DataModel> = AxiosResponse<APIResponse<DataModel>>;

export interface NewsListApiParam {
  from?: 'creator' | 'column' | 'topic';
  id?: string;
  type?: 'article' | 'video';
  offset?: number;
}

/**
 * 将通过 Ajax API 收发的数据和异常都统一包装成APIResponse
 * @param err Axios 请求异常
 * @param resp Axios 请求成功后的Response
 * @returns 返回包装好的APIReply
 */
const resolve_response = <DataModel>(
  err: AxiosError | null,
  resp?: AxiosAPIResponse<DataModel>
): APIResponse<DataModel> => {
  if (err) {
    return { code: err.response?.status!, message: err.message };
  }
  return resp?.data!;
};

export const fetch_news_list = async (params?: NewsListApiParam) => {
  const [err, resp] = await to<AxiosAPIResponse<NewsListItem[]>, AxiosError>(
    axios.get(api_paths.news_list, {
      responseType: 'json',
      params: params,
    })
  );
  return resolve_response(err, resp);
};

export const fetch_column_items = async () => {
  const [err, resp] = await to<AxiosAPIResponse<ColumnItem[]>, AxiosError>(
    axios.get(api_paths.column_items, { responseType: 'json' })
  );
  return resolve_response(err, resp);
};

export const fetch_banner_news = async () => {
  const [err, resp] = await to<AxiosAPIResponse<Banner>, AxiosError>(
    axios.get(api_paths.banner, { responseType: 'json' })
  );
  return resolve_response(err, resp);
};

export const fetch_friends = async () => {
  const [err, resp] = await to<AxiosAPIResponse<FriendItem[]>, AxiosError>(
    axios.get(api_paths.friends, { responseType: 'json' })
  );
  return resolve_response(err, resp);
};

export const fetch_website_summary = async () => {
  const [err, resp] = await to<AxiosAPIResponse<WebsiteSummary>, AxiosError>(
    axios.get(api_paths.website_summary, { responseType: 'json' })
  );
  return resolve_response(err, resp);
};

export const fetch_home_carousel = async () => {
  const [err, resp] = await to<AxiosAPIResponse<CarouselItem[]>, AxiosError>(
    axios.get(api_paths.home_carousel, { responseType: 'json' })
  );
  console.log(api_paths.home_carousel)
  return resolve_response(err, resp);
};

export const fetch_hot_list = async () => {
  const [err, resp] = await to<AxiosAPIResponse<NewsListItem[]>, AxiosError>(
    axios.get(api_paths.hot_list, { responseType: 'json' })
  );
  return resolve_response(err, resp);
};

export const fetch_article_news = async (id: string) => {
  const [err, resp] = await to<AxiosAPIResponse<ArticleNews>, AxiosError>(
    axios.get(api_paths.article_news, { responseType: 'json', params: { id: id } })
  );
  return resolve_response(err, resp);
};

export const fetch_video_news = async (id: string) => {
  const [err, resp] = await to<AxiosAPIResponse<VideoNews>, AxiosError>(
    axios.get(api_paths.video_news, { responseType: 'json', params: { id: id } })
  );
  return resolve_response(err, resp);
};

export const fetch_picture_block = async () => {
  const [err, resp] = await to<AxiosAPIResponse<PictureBlock>, AxiosError>(
    axios.get(api_paths.picture_block, { responseType: 'json' })
  );
  return resolve_response(err, resp);
};

export const fetch_headline = async () => {
  const [err, resp] = await to<AxiosAPIResponse<Headline>, AxiosError>(
    axios.get(api_paths.headline, { responseType: 'json' })
  );
  return resolve_response(err, resp);
};

export const fetch_article_body = async (id: string) => {
  const [err, resp] = await to<AxiosAPIResponse<string>, AxiosError>(
    axios.get(api_paths.article_body, { responseType: 'json', params: { id: id } })
  );
  return resolve_response(err, resp);
};

export const fetch_topic_items = async () => {
  const [err, resp] = await to<AxiosAPIResponse<TopicItem[]>, AxiosError>(
    axios.get(api_paths.topic_items, { responseType: 'json' })
  );
  return resolve_response(err, resp);
};
