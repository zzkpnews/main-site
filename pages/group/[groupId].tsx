import {
  Footer,
  Navigation,
  PageSEO,
  ScrollToTop,
  TopBar
} from "@/views/Common";
import {
  GroupContentArticleList,
  GroupContentHotList,
  GroupContentVideoList
} from "@/views/GroupContentPage";
import { Container, Row } from "@/views/layout";
import { Divider } from "@arco-design/web-react";

const GroupContentPage = () => {
  return (
    <>
      <PageSEO title="河南看点 | 中原科技网" />
      <TopBar />
      <Navigation />
      <Container>
        <Row>
          <GroupContentHotList />
        </Row>
        <Divider />
        <Row>
          <GroupContentArticleList />
        </Row>
        <Divider />
        <Row>
          <GroupContentVideoList />
        </Row>
      </Container>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default GroupContentPage;
