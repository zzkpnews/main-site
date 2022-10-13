import React from 'react';

const LogoBadge = React.memo(
  (props: { title: string; logosrc: string }) => {
    return (
      <div
        className="tw-mx-auto tw-flex tw-px-4 tw-rounded-lg tw-flex-wrap tw-select-none"
        style={{ backgroundColor: 'rgb(177,30,36)' }}
      >
        <img src={props.logosrc} className="tw-h-16 tw-my-auto tw-rounded-2xl" alt={props.title} />
        <h1 className="tw-text-2xl tw-my-auto tw-mx-4 tw-font-bold tw-text-white">{props.title}</h1>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.title === nextProps.title && prevProps.logosrc === nextProps.logosrc;
  }
);

export { LogoBadge };
