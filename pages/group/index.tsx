import {
  Footer,
  Navigation,
  PageSEO,
  ScrollToTop,
  TopBar
} from "@/views/Common";
import { GroupPageNewsList } from "@/views/GroupIndexPage";
import { Container, Row } from "@/views/layout/layout";
import { Divider } from "@arco-design/web-react";

const GroupIndexPage = () => {
  return (
    <>
      <PageSEO title="专栏组 | 中原科技网" />
      <TopBar />
      <Navigation />
      <Container>
        <Row>
          <h1 className="text-xl font-bold">{"专栏组"}</h1>
          <Divider />
        </Row>
        <Row>
          <GroupPageNewsList />
        </Row>
      </Container>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default GroupIndexPage;
