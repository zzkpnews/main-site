import {
  ColumnContentArticleList,
  ColumnContentHotList,
  ColumnContentVideoList,
} from "@/views/ColumnContentPage";
import {
  Footer,
  Navigation,
  PageSEO,
  ScrollToTop,
  TopBar,
} from "@/views/Common";
import { Container, Row } from "@/views/Layout";
import { Divider } from "@arco-design/web-react";

const ColumnContentPage = () => {
  return (
    <>
      <PageSEO
        title="社会 | 中原科技网"
        describe={`中原科技网社会栏目下的所有文章、视频。`}
      />
      <TopBar />
      <Navigation />
      <Container>
        <Row>
          <h2 className="text-2xl font-bold text-red-700">{"社会"}</h2>
        </Row>
        <Divider />
        <Row>
          <ColumnContentHotList />
        </Row>
        <Divider />
        <Row>
          <ColumnContentArticleList />
        </Row>
        <Divider />
        <Row>
          <ColumnContentVideoList />
        </Row>
      </Container>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ColumnContentPage;
