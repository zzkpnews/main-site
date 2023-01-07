import {
  Footer,
  Navigation,
  PageSEO,
  ScrollToTop,
  TopBar,
} from "@/views/Common";
import { LFooter, LHeader, LLanding, LMain } from "@/views/layout";
import { TopicNewsList } from "@/views/TopicIndexPage";

const TopicIndexPage = () => {
  return (
    <>
      <PageSEO title="话题 | 中原科技网" />
      <TopBar />
      <LHeader>
        <Navigation />
      </LHeader>
      <LMain>
        <LLanding>
          <TopicNewsList />
        </LLanding>
      </LMain>
      <LFooter>
        <Footer />
      </LFooter>
      <ScrollToTop />
    </>
  );
};

export default TopicIndexPage;
