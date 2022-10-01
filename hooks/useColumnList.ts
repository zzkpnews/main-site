import { Message } from '@arco-design/web-react';
import { useState } from 'react';
import { fetchColumnList } from '../api/fetchData';
import { NewsItemType, NewsListItem } from '../models/NewsItem';

const useColumnList = (initialData: NewsListItem[] = [], columnId: string, type?: NewsItemType) => {
  const [data, set_data] = useState<NewsListItem[]>(initialData);
  const [loadable, set_loadable] = useState<boolean>(true);
  const [loading, set_loading] = useState<boolean>(false);

  const fetchData = async () => {
    console.log(data.length);
    if (data.length === 0) {
      set_loadable(false);
      set_loading(false);
      Message.info({ content: '加载已经到底了！', closable: true });
      return;
    }
    fetchColumnList(columnId, type, data[data.length - 1].time!)
      .then((moreItems) => {
        if (moreItems.data.length !== 0) {
          set_loading(false);
          set_data([...data, ...moreItems.data]);
        } else {
          set_loadable(false);
          set_loading(false);
          Message.info({ content: '加载已经到底了！', closable: true });
        }
      })
      .catch(() => {
        set_loading(false);
        Message.error({ content: '加载数据过程中出现错误！', closable: true });
      });
    console.log(data);
  };

  const handleFetchData = () => {
    fetchData();
  };

  return { data, loadable, loading, handleFetchData };
};

export default useColumnList;
