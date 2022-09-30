export default function PictureBlock(props: { imgsrc?: string; href?: string; describe?: string }): JSX.Element {
  return (
    <div className="tw-rounded-lg tw-p-0 tw-mx-2 tw-mb-2 tw-select-none ">
      {props.imgsrc ? (
        <a className="tw-object-cover" href={props.href} title={props.describe} target={'_blank'}>
          <img className="tw-rounded-lg tw-mx-auto" src={props.imgsrc} alt={props.describe} />
        </a>
      ) : null}
    </div>
  );
}
