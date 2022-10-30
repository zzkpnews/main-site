export const PictureBox = (props: { src: string }) => {
  return <img src={props.src} className="min-h-20 w-full rounded-md object-cover" alt="" />;
};
