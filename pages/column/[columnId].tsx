import { ColumnContentPageTemplate } from "@/models/template";
import {
  ColumnContentArticleList,
  ColumnContentHotList,
  ColumnContentVideoList
} from "@/views/ColumnContentPage";
import {
  Footer,
  Navigation,
  PageSEO,
  ScrollToTop,
  TopBar
} from "@/views/Common";
import { Container, Row } from "@/views/Layout";
import { Divider } from "@arco-design/web-react";

const ColumnContentPage = (props: ColumnContentPageTemplate) => {
  return (
    <>
      <PageSEO
        title="社会 | 中原科技网"
        describe={`中原科技网${props.column.title}栏目下的所有文章、视频。${props.column.describe}`}
      />
      <TopBar />
      <Navigation />
      <Container>
        <Row>
          <h2 className="text-2xl font-bold text-red-700">
            {props.column.title}
          </h2>
        </Row>
        <Divider />
        <Row>
          <ColumnContentHotList initialData={props.hot_list} />
        </Row>
        <Divider />
        <Row>
          <ColumnContentArticleList initialData={props.article_list} />
        </Row>
        <Divider />
        <Row>
          <ColumnContentVideoList initialData={props.video_list} />
        </Row>
      </Container>
      <Footer
        initialData={{ friends: props.page_common.website_summary.friends }}
      />
      <ScrollToTop />
    </>
  );
};

export default ColumnContentPage;
