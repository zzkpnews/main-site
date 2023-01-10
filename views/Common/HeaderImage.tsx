export const HeaderBackground = (props: { imageUrl?: string }) => {
  return props.imageUrl ? (
    <img
      src={props.imageUrl}
      className="object-cover object-center w-full h-60 flex"
      alt="header"
    />
  ) : null;
};
