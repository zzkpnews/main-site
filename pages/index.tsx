import { HomePageDebugData } from "@/debug/HomePage";
import {
  BooksShowBoxData,
  HeadlineData,
  HotListBoxData,
  PictureBoxData,
  SpecialNewsBoxData,
} from "@/models/data";
import {
  Footer,
  Navigation,
  PageSEO,
  PictureBox,
  ScrollToTop,
  TopBar,
} from "@/views/Common";
import {
  BooksShowBox,
  Headline,
  HomeCarousel,
  HomePageNewsListBox,
  HotListBox,
  SpecialNewsBox,
  TopicBox,
} from "@/views/HomePage";
import {
  LContainer,
  LFooter,
  LHeader,
  LLanding,
  LLeftCol,
  LMain,
  LRightCol,
  LSlot,
} from "@/views/layout";
import { GetServerSideProps } from "next";

export interface HomePageServerProps {
  booksShowBoxData: BooksShowBoxData;
  headlineData: HeadlineData;
  hotListBoxData: HotListBoxData;
  leftBottomPictureBoxData: PictureBoxData;
  leftTopPictureBoxData: PictureBoxData;
  specialNewsBoxData: SpecialNewsBoxData;
  topPictureBoxData: PictureBoxData;
}

const HomePage = (props: HomePageServerProps) => {
  return (
    <>
      <PageSEO title="中原科技网" />
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
    </>
  );
};

export const getServerSideProps: GetServerSideProps<
  HomePageServerProps
> = async () => {
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

export default HomePage;
