import { TopicIndexPageTemplate } from "@/models/template";
import {
  Footer,
  Navigation,
  PageSEO,
  ScrollToTop,
  TopBar,
} from "@/views/Common";
import { Container, Row } from "@/views/Layout";
import { TopicIndexList } from "@/views/TopicIndexPage";

const TopicIndexPage = (props: TopicIndexPageTemplate) => {
  return (
    <>
      <PageSEO title="话题 | 中原科技网" />
      <TopBar />
      <Navigation />
      <Container>
        <Row>
          <TopicIndexList />
        </Row>
      </Container>
      <Footer
        initialData={{ friends: props.page_common?.website_summary.friends }}
      />
      <ScrollToTop />
    </>
  );
};

export default TopicIndexPage;
