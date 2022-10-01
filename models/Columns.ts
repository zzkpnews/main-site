type NavColumn = {
  id: string;
  title: string;
  order: number;
};

const getNavColumnOrder = (list: NavColumn[], id: string) => {
  return list.findIndex((ele) => {
    return ele.id === id;
  });
};

const getNavColumnTitle = (list: NavColumn[], id: string) => {
  return list.find((ele) => {
    return ele.id === id;
  })?.title;
};

export type { NavColumn };
export { getNavColumnOrder,getNavColumnTitle };
