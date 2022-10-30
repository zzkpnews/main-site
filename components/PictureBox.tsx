import { PictureBoxData } from '../models/data';

export const PictureBox = (props: { data?: PictureBoxData }) => {
  if (!props.data?.img_url) return null;
  return props.data.href ? (
    <a href={props.data.href} target="_blank" rel="noreferrer">
      <img src={props.data.img_url} className="min-h-30 w-full rounded-md object-cover" alt={props.data.describe} />
    </a>
  ) : (
    <img src={props.data.img_url} className="min-h-30 w-full rounded-md object-cover" alt={props.data.describe} />
  );
};
