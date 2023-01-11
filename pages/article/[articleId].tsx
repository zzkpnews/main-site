import { ArticleContentPageTemplate } from "@/models/template";
import { ArticleNextListBox, ArticleReader } from "@/views/ArticleContentPage";
import {
  Footer,
  Navigation,
  PageSEO,
  ScrollToTop,
  TopBar
} from "@/views/Common";
import { Col, Container, Row } from "@/views/Layout";

export const ArticleContentPage = (props: ArticleContentPageTemplate) => {
  return (
    <>
      <PageSEO
        title={`${props.news_list.title} | 中原科技网`}
        describe={props.news_list.citation}
        keywords={props.news_list.keywords}
      />
      <TopBar />
      <Navigation />
      <Container>
        <Row>
          <Col numerator={2} denominator={3}>
            <ArticleReader initialData={props.news_list} />
          </Col>
          <Col numerator={1} denominator={3}>
            <ArticleNextListBox data={props.next_list} />
          </Col>
        </Row>
      </Container>
      <Footer
        initialData={{ friends: props.page_common.website_summary.friends }}
      />
      <ScrollToTop />
    </>
  );
};

export default ArticleContentPage;
