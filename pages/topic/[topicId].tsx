import {
  Footer,
  HeaderBackground,
  Navigation,
  PageSEO,
  ScrollToTop,
  TopBar
} from "@/views/Common";
import { Container, Row } from "@/views/layout";
import { TopicCard, TopicContentNewsList } from "@/views/TopicContentPage";

const TopicContentPage = () => {
  return (
    <>
      <PageSEO title="河南戏剧 话题 | 中原科技网" />
      <TopBar />
      <Navigation />
      <HeaderBackground />
      <Container>
        <Row>
          <TopicCard />
        </Row>
        <Row>
          <TopicContentNewsList />
        </Row>
      </Container>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default TopicContentPage;
