import { PictureBoxData } from '@/models/data';

export const PictureBox = (props: { initialData?: PictureBoxData }) => {
  if (!props.initialData?.img_url) return null;
  return props.initialData.href ? (
    <a href={props.initialData.href} target="_blank" rel="noreferrer">
      <img src={props.initialData.img_url} className="min-h-30 my-3 w-full rounded-md object-cover" alt={props.initialData.describe} />
    </a>
  ) : (
    <img src={props.initialData.img_url} className="min-h-30 my-3 w-full rounded-md object-cover" alt={props.initialData.describe} />
  );
};
