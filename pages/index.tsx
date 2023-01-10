import { DebugHomePageTemplate } from "@/debug/api/template/HomePage";
import { HomePageTemplate } from "@/models/template";
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
import { Col, Container, Row } from "@/views/Layout";
import { GetServerSideProps } from "next";

export interface HomePageServerProps {
  template: HomePageTemplate;
}

const HomePage = (props: HomePageServerProps) => {
  return (
    <>
      <PageSEO
        title={props.template.page_common.website_summary.title}
        describe={props.template.page_common.website_summary.describe}
      />
      <TopBar />
      <Navigation />
      <Container>
        <Row>
          <div className="mx-2">
            <PictureBox initialData={props.template.top_picture_box} />
            <Headline initialData={props.template.headline} />
            <HomeCarousel initialData={props.template.carousel_news} />
          </div>
        </Row>
        <Row>
          <Col numerator={2} denominator={3}>
            <HomeNewsListBox initialData={props.template.home_news_list} />
          </Col>
          <Col numerator={1} denominator={3}>
            <SpecialNewsBox initialData={props.template.special_news_list} />
            <HotListBox data={props.template.home_hot_list} />
            <TopicBox />
            <BooksShowBox initialData={props.template.books_show_box} />
            <PictureBox initialData={props.template.left_top_picture_box} />
            <PictureBox initialData={props.template.left_bottom_picture_box} />
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
      template: DebugHomePageTemplate,
    },
  };
};

export default HomePage;
