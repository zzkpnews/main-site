import { HomePageDebugData } from "@/debug/HomePage";
import { Footer, HeaderBackground, Navigation, PageSEO } from "@/views/Common";
import {
  CreatorArticleList,
  CreatorBooksList,
  CreatorCard,
  CreatorHotListBox,
  CreatorRecentNewsList,
  CreatorVideoList,
} from "@/views/CreatorProfilePage";
import { Col, Container, Row } from "@/views/Layout";
import { Tabs } from "@arco-design/web-react";

const CreatorProfilePage = () => {
  return (
    <>
      <PageSEO title="张宇腾的创作 | 中原科技网" />
      <Navigation />
      <HeaderBackground
        imageUrl={
          "https://static.zaobao.com/s3fs-public/2022-10/2022-09-14t034221z_1576905416_rc2qgw9s33ob_rtrmadp_3_apple-tsmc_0.jpg?VersionId=cxs1lVGq_JYIB87nXE06oLfRL0OJduD8"
        }
      />
      <Container>
        <CreatorCard
          initialData={{
            creator_id: "me",
            title: "中原科技网",
            phone: "15617613081",
            email: "643431636@qq.com",
          }}
        />
        <Row>
          <Col numerator={2} denominator={3}>
            <Tabs defaultActiveTab="1">
              <Tabs.TabPane
                key="1"
                title={
                  <h3 className="text-red-700 text-xl font-bold mx-1 my-2">
                    {"最新"}
                  </h3>
                }
              >
                <CreatorRecentNewsList />
              </Tabs.TabPane>
              <Tabs.TabPane
                key="2"
                title={
                  <h3 className="text-red-700 text-xl font-bold mx-1 my-2">
                    {"文章"}
                  </h3>
                }
              >
                <CreatorArticleList />
              </Tabs.TabPane>
              <Tabs.TabPane
                key="3"
                title={
                  <h3 className="text-red-700 text-xl font-bold mx-1 my-2">
                    {"视频"}
                  </h3>
                }
              >
                <CreatorVideoList />
              </Tabs.TabPane>
              <Tabs.TabPane
                key="4"
                title={
                  <h3 className="text-red-700 text-xl font-bold mx-1 my-2">
                    {"书刊"}
                  </h3>
                }
              >
                <CreatorBooksList />
              </Tabs.TabPane>
            </Tabs>
          </Col>
          <Col numerator={1} denominator={3}>
            <CreatorHotListBox initialData={HomePageDebugData.hotListBoxData} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default CreatorProfilePage;
