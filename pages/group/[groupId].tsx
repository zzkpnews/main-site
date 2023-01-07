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
import { LContainer, LFooter, LHeader, LLanding, LMain } from "@/views/layout";
import { Divider } from "@arco-design/web-react";

const GroupContentPage = () => {
  return (
    <>
      <PageSEO title="河南看点 | 中原科技网" />
      <TopBar />
      <LHeader>
        <Navigation />
      </LHeader>
      <LMain>
        <LLanding>
          <GroupContentHotList />
        </LLanding>
        <Divider />
        <LLanding>
          <GroupContentArticleList />
        </LLanding>
        <Divider />
        <LLanding>
          <GroupContentVideoList />
        </LLanding>
        <LContainer></LContainer>
      </LMain>
      <LFooter>
        <Footer />
      </LFooter>
      <ScrollToTop />
    </>
  );
};

export default GroupContentPage;
