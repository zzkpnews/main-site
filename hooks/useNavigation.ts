import { useRouter } from 'next/router';
import { ColumnItem } from '../models';

const useNavigation = (column_list: ColumnItem[]) => {
  const router = useRouter();
  const currentColumnId = router.query.columnId as string;

  const currentColumnOrder = column_list.findIndex((ele) => {
    return ele.column_id === currentColumnId;
  });

  const currentColumnTitle = column_list.find((ele) => {
    return ele.column_id === currentColumnId;
  });

  return { currentColumnId, currentColumnOrder, currentColumnTitle };
};

export { useNavigation };
