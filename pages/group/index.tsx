import { GroupIndexPageTemplate } from "@/models/template";
import {
  Footer,
  Navigation,
  PageSEO,
  ScrollToTop,
  TopBar,
} from "@/views/Common";
import { GroupIndexList } from "@/views/GroupIndexPage";
import { Container, Row } from "@/views/Layout";
import { Divider } from "@arco-design/web-react";

const GroupIndexPage = (props: GroupIndexPageTemplate) => {
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
          <div>
            <h1 className="text-xl font-bold">{"专栏组"}</h1>
            <Divider />
          </div>
        </Row>
        <Row>
          <GroupIndexList initialData={props.group_index} />
        </Row>
      </Container>
      <Footer
        initialData={{ friends: props.page_common?.website_summary.friends }}
      />
      <ScrollToTop />
    </>
  );
};

export default GroupIndexPage;
