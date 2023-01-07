import {
  Footer,
  Navigation,
  PageSEO,
  ScrollToTop,
  TopBar
} from "@/views/Common";
import { GroupPageNewsList } from "@/views/GroupIndexPage";
import { LFooter, LHeader, LLanding, LMain } from "@/views/layout";
import { Divider } from "@arco-design/web-react";

const GroupIndexPage = () => {
  return (
    <>
      <PageSEO title="专栏组 | 中原科技网" />
      <TopBar />
      <LHeader>
        <Navigation />
      </LHeader>
      <LMain>
        <LLanding>
          <h1 className="text-xl font-bold">{"专栏组"}</h1>
          <Divider />
        </LLanding>
        <LLanding>
          <GroupPageNewsList />
        </LLanding>
      </LMain>
      <LFooter>
        <Footer></Footer>
      </LFooter>
      <ScrollToTop />
    </>
  );
};

export default GroupIndexPage;
