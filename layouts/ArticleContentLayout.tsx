export const ArticleContentLayout = {
  Landing: (props: { children?: React.ReactNode }) => {
    return <div className="px-2 my-4">{props.children}</div>;
  },
  Header: (props: { children?: React.ReactNode }) => {
    return <header className="sticky top-0 z-20">{props.children}</header>;
  },
  Main: (props: { children?: React.ReactNode }) => {
    return <main className="mx-5 xl:mx-40 lg:mx-35 md:mx-25 sm:mx-20">{props.children}</main>;
  },
  Container: (props: { children?: React.ReactNode }) => {
    return <div className="my-0 lg:flex justify-center">{props.children}</div>;
  },
  Slot: (props: { children?: React.ReactNode }) => {
    return <div className="my-5">{props.children}</div>;
  },
  RightCol: (props: { children?: React.ReactNode }) => {
    return <div className="basis-1/3 m-2">{props.children}</div>;
  },
  LeftCol: (props: { children?: React.ReactNode }) => {
    return <div className="basis-2/3 m-2">{props.children}</div>;
  },
  Footer: (props: { children?: React.ReactNode }) => {
    return <footer className="sticky top-0 z-20">{props.children}</footer>;
  },
};
