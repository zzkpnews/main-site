import { Message } from '@arco-design/web-react';
import { useState } from 'react';
import { fetchNewsItems } from '../api/ajax';
import { NewsItem } from '../models';

const useNewsList = (
  initialData: NewsItem[] = [],
  from?: 'topic' | 'column' | 'topic',
  id?: string,
  type?: 'article' | 'video'
) => {
  const [data, set_data] = useState<NewsItem[]>(initialData);
  const [loadable, set_loadable] = useState<boolean>(true);
  const [loading, set_loading] = useState<boolean>(false);

  const fetchData = async () => {
    set_loading(true);
    fetchNewsItems(from, id, type, data[data.length - 1].timestamp)
      .then((fetched_data) => {
        if (fetched_data.data.data.length !== 0) {
          set_loading(false);
          set_data([...data, ...fetched_data.data.data]);
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

export { useNewsList };
