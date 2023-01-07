import { Navigation, PageSEO, TopBar } from "@/views/Common";
import { Col, Container, Row } from "@/views/layout/layout";
import { PlayList, VideoPlayer } from "@/views/VideoContentPage";

export default function VideoContentPage() {
  return (
    <>
      <PageSEO title="视频新闻页面" />
      <TopBar />
      <Navigation />
      <Container size="large">
        <Row>
          <Col numerator={2} denominator={3}>
            <VideoPlayer data={undefined} />
          </Col>
          <Col numerator={1} denominator={3}>
            <PlayList data={undefined} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
