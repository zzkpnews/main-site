type PictureBlockSummary = {
  imgUrl?: string;
  href?: string;
  describe?: string;
};

type PictureBlockNews = {
  Top?: PictureBlockSummary;
  sideTop?: PictureBlockSummary;
  sideBottom?: PictureBlockSummary;
};

export type { PictureBlockNews };
