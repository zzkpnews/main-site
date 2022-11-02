import classNames from 'classnames';

const LBackground = (props: { children?: React.ReactNode }) => {
  return <div className="px-0 py-0">{props.children}</div>;
};
const LLanding = (props: { children?: React.ReactNode }) => {
  return <div className="px-2 my-4">{props.children}</div>;
};
const LHeader = (props: { children?: React.ReactNode }) => {
  return <header className="sticky top-0 z-20">{props.children}</header>;
};
const LMain = (props: { size?: 'large' | 'medium'; children?: React.ReactNode }) => {
  return (
    <main
      className={classNames(`mx-5 lg:mx-35 md:mx-25 sm:mx-20`, {
        'xl:mx-40': props.size === 'medium' || props.size === undefined,
        'xl:mx-35': props.size === 'large',
      })}
    >
      {props.children}
    </main>
  );
};
const LContainer = (props: { children?: React.ReactNode }) => {
  return <div className="my-0 lg:flex justify-center">{props.children}</div>;
};
const LSlot = (props: { children?: React.ReactNode }) => {
  return <div className="my-5">{props.children}</div>;
};
const LStickySlot = (props: { children?: React.ReactNode }) => {
  return <div className="my-5 sticky top-20">{props.children}</div>;
};
const LRightCol = (props: { children?: React.ReactNode }) => {
  return <div className="basis-1/3 m-2">{props.children}</div>;
};
const LLeftCol = (props: { children?: React.ReactNode }) => {
  return <div className="basis-2/3 m-2">{props.children}</div>;
};
const LFooter = (props: { children?: React.ReactNode }) => {
  return <footer>{props.children}</footer>;
};

export { LHeader, LBackground, LContainer, LFooter, LLanding, LLeftCol, LMain, LRightCol, LStickySlot, LSlot };
