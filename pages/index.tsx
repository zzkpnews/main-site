import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { BooksShowBox } from '../components/HomePage/BooksShowBox';
import { Headline } from '../components/HomePage/Headline';
import { HomePageNewsListBox } from '../components/HomePage/HomePageNewsListBox';
import { SpecialNewsBox } from '../components/HomePage/SpecialNewsBox';
import { TopicBox } from '../components/HomePage/TopicBox';
import { HomeCarousel } from '../components/Common/CarouselBox';
import { Footer } from '../components/Common/Footer';
import { HotListBox } from '../components/Common/HotListBox';
import { Navigation } from '../components/Common/Navigation';
import { PictureBox } from '../components/Common/PictureBox';
import { ScrollToTop } from '../components/Common/ScrollToTop';
import { TopBar } from '../components/Common/TopBar';
import { HomePageDebugData } from '../debug/HomePage';
import useMemoryMode from '@hooks/useMemoryMode';
import { LContainer, LFooter, LHeader, LLanding, LLeftCol, LMain, LRightCol, LSlot } from '../layouts';
import { BooksShowBoxData, HeadlineData, HotListBoxData, PictureBoxData, SpecialNewsBoxData } from '../models/data';

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
  return (
    <div>
      <Head>
        <title>中原科技网</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <LHeader>
        <Navigation />
      </LHeader>
      <LMain>
        <LLanding>
          <LSlot>
            <PictureBox data={props.topPictureBoxData} />
          </LSlot>
          <LSlot>
            <Headline data={props.headlineData} />
          </LSlot>
          <LSlot>
            <HomeCarousel />
          </LSlot>
        </LLanding>
        <LContainer>
          <LLeftCol>
            <HomePageNewsListBox />
          </LLeftCol>
          <LRightCol>
            <LSlot>
              <SpecialNewsBox data={props.specialNewsBoxData} />
            </LSlot>
            <LSlot>
              <HotListBox data={props.hotListBoxData} />
            </LSlot>
            <LSlot>
              <TopicBox />
            </LSlot>
            <LSlot>
              <BooksShowBox data={props.booksShowBoxData} />
            </LSlot>
            <LSlot>
              <PictureBox data={props.leftTopPictureBoxData} />
            </LSlot>
            <LSlot>
              <PictureBox data={props.leftBottomPictureBoxData} />
            </LSlot>
          </LRightCol>
        </LContainer>
      </LMain>
      <LFooter>
        <Footer />
      </LFooter>
      <ScrollToTop />
    </div>
  );
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
