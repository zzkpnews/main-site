import {
  Footer,
  Navigation,
  PageSEO,
  ScrollToTop,
  TopBar,
} from "@/views/Common";
import { GroupPageNewsList } from "@/views/GroupIndexPage";
import { Container, Row } from "@/views/layout";
import { Divider } from "@arco-design/web-react";

const GroupIndexPage = () => {
  return (
    <>
      <PageSEO
        title="专栏组 | 中原科技网"
        describe="中原科技网专栏组，根据分类并聚集特色专栏，网罗天下信息。"
      />
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
