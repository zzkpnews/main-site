import React from 'react';
import { APIReply } from '../../api/ajax';
import { PictureNews } from '../../models';

const PictureBlock = React.memo(
  (props: { data?: APIReply<PictureNews> }): JSX.Element => {
    return (
      <div className="tw-rounded-lg tw-p-0 tw-mx-2 tw-mb-2 tw-select-none ">
        {props.data?.data?.img_url ? (
          <a
            className="tw-object-cover"
            href={props.data.data?.href}
            title={props.data.data.describe}
            target={'_blank'}
          >
            <img className="tw-rounded-lg tw-mx-auto" src={props.data.data.img_url} alt={props.data.data.describe} />
          </a>
        ) : null}
      </div>
    );
  },
  (prevProps, nextProps) => {
    return prevProps === nextProps;
  }
);

export { PictureBlock };
