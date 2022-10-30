import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { BooksShowBox } from '../components/BooksShowBox';
import { HomeCarousel } from '../components/CarouselBox';
import { Footer } from '../components/Footer';
import { Headline } from '../components/Headline';
import { HomePageNewsListBox } from '../components/HomePageNewsListBox';
import { HotListBox } from '../components/HotListBox';
import { Navigation } from '../components/Navigation';
import { PictureBox } from '../components/PictureBox';
import { SpecialNewsBox } from '../components/SpecialNewsBox';
import { TopicBox } from '../components/TopicBox';
import { HomePageDebugData } from '../debug/HomePage';
import { HomeLayout } from '../layouts/HomeLayout';
import { BooksShowBoxData, HeadlineData, HotListBoxData, PictureBoxData, SpecialNewsBoxData } from '../models/data';

const LHeader = HomeLayout.Header;
const LMain = HomeLayout.Main;
const LFooter = HomeLayout.Footer;
const LLanding = HomeLayout.Landing;
const LContainer = HomeLayout.Container;
const LLeftCol = HomeLayout.LeftCol;
const LRightCol = HomeLayout.RightCol;
const LSlot = HomeLayout.Slot;

export interface HomePageServerProps {
  booksShowBoxData: BooksShowBoxData;
  topPictureBoxData: PictureBoxData;
  leftTopPictureBoxData: PictureBoxData;
  leftBottomPictureBoxData: PictureBoxData;
  headlineData: HeadlineData;
  specialNewsBoxData: SpecialNewsBoxData;
  hotListBoxData: HotListBoxData;
}

export default function HomePage(props: HomePageServerProps) {
  return (
    <div>
      <Head>
        <title>中原科技网</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomePageServerProps> = async () => {
  return {
    props: {
      booksShowBoxData: HomePageDebugData.booksShowBoxData,
      topPictureBoxData: HomePageDebugData.topPictureBoxData,
      leftBottomPictureBoxData: HomePageDebugData.leftBottomPictureBoxData,
      leftTopPictureBoxData: HomePageDebugData.leftTopPictureBoxData,
      headlineData: HomePageDebugData.headlineData,
      specialNewsBoxData: HomePageDebugData.specialNewsBoxData,
      hotListBoxData: HomePageDebugData.hotListBoxData,
    },
  };
};
