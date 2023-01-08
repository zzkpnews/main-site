import { HomePageDebugData } from "@/debug/HomePage";
import { Footer, HeaderBackground, Navigation, PageSEO } from "@/views/Common";
import {
  CreatorCard,
  CreatorHotListBox,
  CreatorWorksList,
} from "@/views/CreatorProfilePage";
import { Col, Container, Row } from "@/views/layout/layout";

const CreatorProfilePage = () => {
  return (
    <>
      <PageSEO title="张宇腾的创作 | 中原科技网" />
      <Navigation />
      <HeaderBackground />
      <Container>
        <CreatorCard
          title={"中原科技网"}
          phone={"15617613081"}
          email={"643431636@qq.com"}
        />
        <Row>
          <Col numerator={2} denominator={3}>
            <CreatorWorksList />
          </Col>
          <Col numerator={1} denominator={3}>
            <CreatorHotListBox data={HomePageDebugData.hotListBoxData} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default CreatorProfilePage;
