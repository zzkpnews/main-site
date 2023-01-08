import { HomePageDebugData } from "@/debug/HomePage";
import {
  BooksShowBoxData,
  HeadlineData,
  HotListBoxData,
  PictureBoxData,
  SpecialNewsBoxData
} from "@/models/data";
import {
  Footer,
  Navigation,
  PageSEO,
  PictureBox,
  ScrollToTop,
  TopBar
} from "@/views/Common";
import {
  BooksShowBox,
  Headline,
  HomeCarousel,
  HomeNewsListBox,
  HotListBox,
  SpecialNewsBox,
  TopicBox
} from "@/views/HomePage";
import { Col, Container, Row } from "@/views/layout";
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
      <Navigation />
      <Container>
        <Row>
          <div className="mx-2">
            <PictureBox data={props.topPictureBoxData} />
            <Headline data={props.headlineData} />
            <HomeCarousel />
          </div>
        </Row>
        <Row>
          <Col numerator={2} denominator={3}>
            <HomeNewsListBox />
          </Col>
          <Col numerator={1} denominator={3}>
            <SpecialNewsBox data={props.specialNewsBoxData} />
            <HotListBox data={props.hotListBoxData} />
            <TopicBox />
            <BooksShowBox data={props.booksShowBoxData} />
            <PictureBox data={props.leftTopPictureBoxData} />
            <PictureBox data={props.leftBottomPictureBoxData} />
          </Col>
        </Row>
      </Container>
        <Footer />
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
