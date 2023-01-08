import { ServerError } from "@/views/Error500Page";
import { Container, Row } from "@/views/layout/layout";
import { Footer, Navigation, PageSEO, ScrollToTop, TopBar } from "views/Common";

const Error500Page = () => {
  return (
    <>
      <PageSEO
        title="服务器发生严重错误 | 中原科技网"
        describe="当前页面发生错误"
      />
      <TopBar />
      <Navigation />
      <Container>
        <Row>
          <ServerError />
        </Row>
      </Container>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Error500Page;
