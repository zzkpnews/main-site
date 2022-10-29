export const PictureBox = (props: { src: string }) => {
  return <img src={props.src} className="my-5 h-20 w-full rounded-md object-cover" alt="" />;
};
