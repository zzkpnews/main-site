export const PictureBox = (props: { src: string }) => {
  return <img src={props.src} className="min-h-30 w-full rounded-md object-cover" alt="" />;
};
