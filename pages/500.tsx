import { ServerError } from "@/views/Error500Page";
import { LFooter, LHeader, LLanding, LMain } from "@/views/layout";
import { Footer, Navigation, PageSEO, ScrollToTop, TopBar } from "views/Common";

const Custom500 = () => {
  return (
    <>
      <PageSEO
        title="服务器发生严重错误 | 中原科技网"
        describe="当前页面发生错误"
      />
      <TopBar />
      <LHeader>
        <Navigation />
      </LHeader>
      <LMain>
        <LLanding>
          <ServerError />
        </LLanding>
      </LMain>
      <LFooter>
        <Footer />
      </LFooter>
      <ScrollToTop />
    </>
  );
};

export default Custom500;
