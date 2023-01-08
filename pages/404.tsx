import {
  Footer,
  Navigation,
  PageSEO,
  ScrollToTop,
  TopBar
} from "@/views/Common";
import { ResourceNotFound } from "@/views/Error404Page";
import { Container, Row } from "@/views/layout/layout";

const Error404Page = () => {
  return (
    <>
      <PageSEO title="当前页面走丢了..." describe="页面未找到" />
      <TopBar />
      <Navigation />
      <Container>
        <Row>
          <ResourceNotFound />
        </Row>
      </Container>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Error404Page;
