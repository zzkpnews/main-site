import { useRouter } from 'next/router';
import { ColumnSummary } from '../models/ColumnSummary.model';

const useTopNavigation = (column_list: ColumnSummary[]) => {
  const router = useRouter();
  const currentColumnId = router.query.columnId;

  const currentColumnOrder = column_list.findIndex((ele) => {
    return ele.columnId === currentColumnId;
  });

  return { currentColumnOrder };
};

export default useTopNavigation;
