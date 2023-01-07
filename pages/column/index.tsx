import { ColumnNewsList } from "@/views/ColumnIndexPage";
import {
  Footer,
  Navigation,
  PageSEO,
  ScrollToTop,
  TopBar,
} from "@/views/Common";
import { LFooter, LHeader, LLanding, LMain } from "@/views/layout";

const ColumnIndexPage = () => {
  return (
    <>
      <PageSEO title="所有专栏 | 中原科技网" />
      <TopBar />
      <LHeader>
        <Navigation />
      </LHeader>
      <LMain>
        <LLanding>
          <ColumnNewsList />
        </LLanding>
      </LMain>
      <LFooter>
        <Footer />
      </LFooter>
      <ScrollToTop />
    </>
  );
};

export default ColumnIndexPage;
