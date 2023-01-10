import { ColumnNewsList } from "@/views/ColumnIndexPage";
import {
  Footer,
  Navigation,
  PageSEO,
  ScrollToTop,
  TopBar
} from "@/views/Common";
import { Container, Row } from "@/views/Layout";

const ColumnIndexPage = () => {
  return (
    <>
      <PageSEO title="所有专栏 | 中原科技网" />
      <TopBar />
      <Navigation />
      <Container>
        <Row>
          <ColumnNewsList />
        </Row>
      </Container>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ColumnIndexPage;
