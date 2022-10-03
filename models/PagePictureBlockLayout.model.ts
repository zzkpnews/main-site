type PagePictureBlock = {
  imgsrc?: string;
  href?: string;
  describe?: string;
};

type PagePictureBlockLayout = {
  Top?: PagePictureBlock;
  sideTop?: PagePictureBlock;
  sideBottom?: PagePictureBlock;
};

export type { PagePictureBlockLayout };
