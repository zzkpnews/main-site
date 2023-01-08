import { Footer, Navigation, PageSEO, TopBar } from "@/views/Common";
import { Col, Container, Row } from "@/views/layout/layout";
import { PlayList, VideoPlayer } from "@/views/VideoContentPage";

export default function VideoContentPage() {
  return (
    <>
      <PageSEO title="视频新闻页面" />
      <TopBar />
      <Navigation />
      <Container>
        <Row>
          <Col numerator={2} denominator={3}>
            <VideoPlayer
              data={{
                news_id: "string",
                time_stamp: 1673141102,
                keywords: "string",
                title: "string",
                lead_title: "string",
                subtitle: "string",
                bgimg: "string",
                citation: "string",
                column_id: "string",
                column_title: "string",
                creator_id: "string",
                creator_title: "string",
                creator_logo: "string",
                creator_introduction: "string",
                author: "string",
                video_url:
                  "https://open.iqiyi.com/developer/player_js/coopPlayerIndex.html?vid=c570c92b086fe5c539c4296334ac32fa&tvId=1180487317162000&accessToken=2.ef9c39d6c7f1d5b44768e38e5243157d&appKey=8c634248790d4343bcae1f66129c1010&appId=1368&height=100%&width=100%",
                editor: "string",
                origin: "string",
                origin_url: "string",
              }}
            />
          </Col>
          <Col numerator={1} denominator={3}>
            <PlayList
              data={Array(5).fill({
                news_id: "aaa",
                title: "This is the titleThis is the titleThis is the title",
                subtitle: "This is subtitle",
                bgimg:
                  "https://static.zaobao.com/s3fs-public/styles/article_large_crop/public/2023-01/ZB_0108_CJ_doc7odxhd0stzphvaq4ib5_07202101_tangjk.jpg?VersionId=bmwIAROyDgHW8HC0tOPfy6IWFp2MgMMj&itok=M-9nZijT",
              })}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
