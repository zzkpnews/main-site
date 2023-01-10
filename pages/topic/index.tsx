import {
  Footer,
  Navigation,
  PageSEO,
  ScrollToTop,
  TopBar,
} from "@/views/Common";
import { Container, Row } from "@/views/Layout";
import { TopicNewsList } from "@/views/TopicIndexPage";

const TopicIndexPage = () => {
  return (
    <>
      <PageSEO title="话题 | 中原科技网" />
      <TopBar />
      <Navigation />
      <Container>
        <Row>
          <TopicNewsList />
        </Row>
      </Container>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default TopicIndexPage;
