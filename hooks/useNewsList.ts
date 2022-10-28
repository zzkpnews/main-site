import { Message } from '@arco-design/web-react';
import { useState } from 'react';
import { APIResponse, fetch_news_list } from '../api';
import { NewsListItem } from '../models/data';

const useNewsList = (
  initial_data: APIResponse<NewsListItem[]>,
  from?: 'topic' | 'column' | 'topic',
  id?: string,
  type?: 'article' | 'video'
) => {
  const [data, set_data] = useState<APIResponse<NewsListItem[]>>(initial_data);
  const [loadable, set_loadable] = useState<boolean>(true);
  const [loading, set_loading] = useState<boolean>(false);

  const fetch_data = async () => {
    set_loading(true);
    fetch_news_list({ from: from, id: id, type: type, offset: data.data![data.data!.length - 1].time_stamp }).then(
      (fetched_data) => {
        if (!fetched_data || fetched_data.code !== 0) {
          Message.error({ content: `加载数据过程中出现错误!${fetched_data.message}`, closable: true });
          return;
        }
        if (fetched_data.data?.length !== 0) {
          set_loading(false);
          set_data([...data.data!, ...fetched_data.data!]);
        } else {
          set_loadable(false);
          set_loading(false);
          Message.info({ content: '加载已经到底了！', closable: true });
        }
      }
    );
  };

  const handleFetchData = () => {
    fetch_data();
  };

  return { data, loadable, loading, handleFetchData };
};

export { useNewsList };
