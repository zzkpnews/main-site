import { DebugHomePageTemplate } from "@/debug/api/template/HomePage";
import { HomePageTemplate } from "@/models/template";
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
  HomeNewsListBox,
  HotListBox,
  SpecialNewsBox,
  TopicBox,
} from "@/views/HomePage";
import { Col, Container, Row } from "@/views/Layout";
import { GetServerSideProps } from "next";

const HomePage = (props: HomePageTemplate) => {
  return (
    <>
      <PageSEO
        title={props.page_common.website_summary.title}
        describe={props.page_common.website_summary.describe}
        keywords={props.page_common.website_summary.keywords}
      />
      <TopBar />
      <Navigation />
      <Container>
        <Row>
          <div className="mx-2">
            <PictureBox initialData={props.top_picture_box} />
            <Headline initialData={props.headline} />
            <HomeCarousel initialData={props.carousel_news} />
          </div>
        </Row>
        <Row>
          <Col numerator={2} denominator={3}>
            <HomeNewsListBox initialData={props.home_news_list} />
          </Col>
          <Col numerator={1} denominator={3}>
            <SpecialNewsBox initialData={props.special_news} />
            <HotListBox data={props.home_hot_list} />
            <TopicBox />
            <BooksShowBox initialData={props.books_show_box} />
            <PictureBox initialData={props.left_top_picture_box} />
            <PictureBox initialData={props.left_bottom_picture_box} />
          </Col>
        </Row>
      </Container>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<
  HomePageTemplate
> = async () => {
  return {
    props: DebugHomePageTemplate,
  };
};

export default HomePage;
