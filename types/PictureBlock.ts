export interface PictureBlockInfo {
  imgsrc?: string;
  href?: string;
  describe?: string;
}

export interface PagePictureBlockInfo {
  Top?: PictureBlockInfo;
  sideTop?: PictureBlockInfo;
  sideBottom?: PictureBlockInfo;
}
