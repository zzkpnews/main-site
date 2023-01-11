import { ColumnIndexPageTemplate } from "@/models/template";
import { ColumnNewsIndexList } from "@/views/ColumnIndexPage";
import {
  Footer,
  Navigation,
  PageSEO,
  ScrollToTop,
  TopBar
} from "@/views/Common";
import { Container, Row } from "@/views/Layout";

const ColumnIndexPage = (props: ColumnIndexPageTemplate) => {
  return (
    <>
      <PageSEO title="所有专栏 | 中原科技网" />
      <TopBar />
      <Navigation />
      <Container>
        <Row>
          <ColumnNewsIndexList initialData={props.news_list} />
        </Row>
      </Container>
      <Footer
        initialData={{ friends: props.page_common.website_summary.friends }}
      />
      <ScrollToTop />
    </>
  );
};

export default ColumnIndexPage;
