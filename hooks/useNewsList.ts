import { Message } from '@arco-design/web-react';
import { useState } from 'react';
import { fetchNewsList } from '../api/fetchData';
import { NewsSummary } from '../models';

interface NewsListParams {
  from: 'home' | 'column' | 'topic';
  id?: string;
  type?: 'article' | 'video';
}

const useNewsList = (initialData: NewsSummary[] = [], newslist_params: NewsListParams) => {
  const [data, set_data] = useState<NewsSummary[]>(initialData);
  const [loadable, set_loadable] = useState<boolean>(true);
  const [loading, set_loading] = useState<boolean>(false);

  const fetchData = async () => {
    set_loading(true);
    fetchNewsList({
      ...newslist_params,
      offset: data[data.length - 1].timestamp,
    })
      .then((fetched_data) => {
        if (fetched_data.data.length !== 0) {
          set_loading(false);
          set_data([...data, ...fetched_data.data]);
        } else {
          set_loadable(false);
          Message.error({ content: '加载已经到底了！', closable: true });
        }
      })
      .catch(() => {
        Message.error({ content: '加载数据过程中出现错误！', closable: true });
      });
  };

  const handleFetchData = () => {
    fetchData();
  };

  return { data, loadable, loading, handleFetchData };
};

export {useNewsList};
