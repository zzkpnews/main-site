import {
  Footer,
  HeaderBackground,
  Navigation,
  PageSEO,
  ScrollToTop,
  TopBar,
} from "@/views/Common";
import { LBackground, LFooter, LHeader, LLanding, LMain } from "@/views/layout";
import { TopicCard, TopicContentNewsList } from "@/views/TopicContentPage";

const TopicContentPage = () => {
  return (
    <>
      <PageSEO title="河南戏剧 话题 | 中原科技网" />
      <TopBar />
      <LHeader>
        <Navigation />
      </LHeader>
      <LBackground>
        <HeaderBackground />
      </LBackground>
      <LMain>
        <LLanding>
          <TopicCard />
        </LLanding>
        <LLanding>
          <TopicContentNewsList />
        </LLanding>
      </LMain>
      <LFooter>
        <Footer />
      </LFooter>
      <ScrollToTop />
    </>
  );
};

export default TopicContentPage;
