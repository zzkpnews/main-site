import { useRouter } from 'next/router';
import { ColumnSummary } from '../models/ColumnSummary.model';

const useNavigation = (column_list: ColumnSummary[]) => {
  const router = useRouter();
  const currentColumnId = router.query.columnId as string;

  const currentColumnOrder = column_list.findIndex((ele) => {
    return ele.columnId === currentColumnId;
  });

  const currentColumnTitle = column_list.find((ele) => {
    return ele.columnId === currentColumnId;
  });

  return { currentColumnId, currentColumnOrder, currentColumnTitle };
};

export { useNavigation };
