import { HomePageDebugData } from "@/debug/HomePage";
import { ArticleNextListBox, ArticleReader } from "@/views/ArticleContentPage";
import {
  Footer,
  Navigation,
  PageSEO,
  PictureBox,
  ScrollToTop,
  TopBar
} from "@/views/Common";
import { BooksShowBox } from "@/views/HomePage";
import { Col, Container, Row } from "@/views/Layout";

export const ArticleContentPage = () => {
  return (
    <>
      <PageSEO title="中原科技网" />
      <TopBar />
      <Navigation />
      <Container>
        <Row>
          <Col numerator={2} denominator={3}>
            <ArticleReader />
          </Col>
          <Col numerator={1} denominator={3}>
            <PictureBox initialData={HomePageDebugData.leftBottomPictureBoxData} />
            <BooksShowBox initialData={HomePageDebugData.booksShowBoxData} />
            <ArticleNextListBox data={HomePageDebugData.hotListBoxData} />
          </Col>
        </Row>
      </Container>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ArticleContentPage;
