import { ResourceClosed } from "@/views/Error403Page";
import { Container, Row } from "@/views/layout";

import { Footer, Navigation, PageSEO, ScrollToTop, TopBar } from "views/Common";

const Error403Page = () => {
  return (
    <>
      <PageSEO title="内容已关闭 | 中原科技网" />
      <TopBar />
      <Navigation />
      <Container>
        <Row>
          <ResourceClosed />
        </Row>
      </Container>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Error403Page;
