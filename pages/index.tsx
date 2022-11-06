import HomePageTemplate from 'views/HomePage/template';
import { BooksShowBoxData, HeadlineData, HotListBoxData, PictureBoxData, SpecialNewsBoxData } from '@models/data';
import { GetServerSideProps } from 'next';
import { HomePageDebugData } from '../debug/HomePage';
import { useMemoryMode } from '@hooks/index';

export interface HomePageServerProps {
  booksShowBoxData: BooksShowBoxData;
  headlineData: HeadlineData;
  hotListBoxData: HotListBoxData;
  leftBottomPictureBoxData: PictureBoxData;
  leftTopPictureBoxData: PictureBoxData;
  specialNewsBoxData: SpecialNewsBoxData;
  topPictureBoxData: PictureBoxData;
}

export default function HomePage(props: HomePageServerProps) {
  useMemoryMode();
  return <HomePageTemplate {...props} />;
}

export const getServerSideProps: GetServerSideProps<HomePageServerProps> = async () => {
  return {
    props: {
      booksShowBoxData: HomePageDebugData.booksShowBoxData,
      headlineData: HomePageDebugData.headlineData,
      hotListBoxData: HomePageDebugData.hotListBoxData,
      leftBottomPictureBoxData: HomePageDebugData.leftBottomPictureBoxData,
      leftTopPictureBoxData: HomePageDebugData.leftTopPictureBoxData,
      specialNewsBoxData: HomePageDebugData.specialNewsBoxData,
      topPictureBoxData: HomePageDebugData.topPictureBoxData,
    },
  };
};
