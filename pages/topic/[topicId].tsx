import { TopicContentPageTemplate } from "@/models/template";
import {
  Footer,
  HeaderBackground,
  Navigation,
  PageSEO,
  ScrollToTop,
  TopBar
} from "@/views/Common";
import { Container, Row } from "@/views/Layout";
import { TopicCard, TopicNewsList } from "@/views/TopicContentPage";

const TopicContentPage = (props: TopicContentPageTemplate) => {
  return (
    <>
      <PageSEO title={`${props.topic.title}话题 | 中原科技网`} />
      <TopBar />
      <Navigation />
      <HeaderBackground />
      <Container>
        <Row>
          <TopicCard initialData={props.topic} />
        </Row>
        <Row>
          <TopicNewsList initialData={props.news_list} />
        </Row>
      </Container>
      <Footer
        initialData={{ friends: props.page_common?.website_summary.friends }}
      />
      <ScrollToTop />
    </>
  );
};

export default TopicContentPage;
