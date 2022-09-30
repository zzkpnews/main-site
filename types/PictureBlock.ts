type PictureBlock = {
  imgsrc?: string;
  href?: string;
  describe?: string;
};

type PagePictureBlockInfo = {
  Top?: PictureBlock;
  sideTop?: PictureBlock;
  sideBottom?: PictureBlock;
};

export type { PictureBlock, PagePictureBlockInfo };
