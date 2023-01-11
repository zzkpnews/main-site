import { CreatorProfilePageTemplate } from "@/models/template";
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

const CreatorProfilePage = (props: CreatorProfilePageTemplate) => {
  return (
    <>
      <PageSEO title={`${props.creator.title}的创作 | 中原科技网`} />
      <Navigation />
      <HeaderBackground imageUrl={props.creator.bgimg} />
      <Container>
        <CreatorCard initialData={props.creator} />
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
                <CreatorRecentNewsList initialData={props.recent_list} />
              </Tabs.TabPane>
              <Tabs.TabPane
                key="2"
                title={
                  <h3 className="text-red-700 text-xl font-bold mx-1 my-2">
                    {"文章"}
                  </h3>
                }
              >
                <CreatorArticleList initialData={props.article_list} />
              </Tabs.TabPane>
              <Tabs.TabPane
                key="3"
                title={
                  <h3 className="text-red-700 text-xl font-bold mx-1 my-2">
                    {"视频"}
                  </h3>
                }
              >
                <CreatorVideoList initialData={props.video_list} />
              </Tabs.TabPane>
              <Tabs.TabPane
                key="4"
                title={
                  <h3 className="text-red-700 text-xl font-bold mx-1 my-2">
                    {"书刊"}
                  </h3>
                }
              >
                <CreatorBooksList initialData={props.book_list} />
              </Tabs.TabPane>
            </Tabs>
          </Col>
          <Col numerator={1} denominator={3}>
            <CreatorHotListBox initialData={props.hot_list} />
          </Col>
        </Row>
      </Container>
      <Footer
        initialData={{ friends: props.page_common.website_summary.friends }}
      />
    </>
  );
};

export default CreatorProfilePage;
