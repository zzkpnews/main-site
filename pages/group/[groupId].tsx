import { GroupContentPageTemplate } from "@/models/template";
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
import { Container, Row } from "@/views/Layout";
import { Divider } from "@arco-design/web-react";

const GroupContentPage = (props: GroupContentPageTemplate) => {
  return (
    <>
      <PageSEO title={`${props.group?.title} | 中原科技网`} />
      <TopBar />
      <Navigation />
      <Container>
        <Row>
          <GroupContentHotList initialData={props.hot_list}  />
        </Row>
        <Divider />
        <Row>
          <GroupContentArticleList initialData={props.article_list} />
        </Row>
        <Divider />
        <Row>
          <GroupContentVideoList initialData={props.video_list} />
        </Row>
      </Container>
      <Footer
        initialData={{ friends: props.page_common?.website_summary.friends }}
      />
      <ScrollToTop />
    </>
  );
};

export default GroupContentPage;
