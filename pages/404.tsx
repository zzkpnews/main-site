import {
  Footer,
  Navigation,
  PageSEO,
  ScrollToTop,
  TopBar,
} from "@/views/Common";
import { ResourceNotFound } from "@/views/Error404Page";
import { LFooter, LHeader, LLanding, LMain } from "@/views/layout";

const Custom404 = () => {
  return (
    <div>
      <PageSEO title="当前页面走丢了..." describe="页面未找到" />
      <TopBar />
      <LHeader>
        <Navigation />
      </LHeader>
      <LMain>
        <LLanding>
          <ResourceNotFound />
        </LLanding>
      </LMain>
      <LFooter>
        <Footer />
      </LFooter>
      <ScrollToTop />
    </div>
  );
};

export default Custom404;
