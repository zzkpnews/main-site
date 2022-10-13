import { PictureNews } from '../../models';

const PictureBlock = (props: { data?: PictureNews }): JSX.Element => {
  return (
    <div className="tw-rounded-lg tw-p-0 tw-mx-2 tw-mb-2 tw-select-none ">
      {props.data?.img_url ? (
        <a className="tw-object-cover" href={props.data.href} title={props.data.describe} target={'_blank'}>
          <img className="tw-rounded-lg tw-mx-auto" src={props.data.img_url} alt={props.data.describe} />
        </a>
      ) : null}
    </div>
  );
};

export { PictureBlock };
