import { useRouter } from 'next/router';
import { NavColumn } from '../models/Columns';

const useColumnNav = (nav_columns: NavColumn[]) => {
  const router = useRouter();
  const columnId = router.query.columnId;

  const columnOrder = nav_columns.findIndex((ele) => {
    return ele.id === columnId;
  });

  const columnTitle = nav_columns.find((ele) => {
    return ele.id === columnId;
  })?.title;

  return { columnOrder, columnTitle };
};

export default useColumnNav;
