type NavColumn = {
  id: string;
  title: string;
  order: number;
};

const getNavColumnOrder = (list: NavColumn[], id: string) => {
  return list.findIndex((ele) => {
    ele.id === id;
  });
};

export type { NavColumn };
export { getNavColumnOrder };
