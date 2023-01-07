import {
  ColumnContentArticleList,
  ColumnContentHotList,
  ColumnContentVideoList
} from "@/views/ColumnContentPage";
import {
  Footer,
  Navigation,
  PageSEO,
  ScrollToTop,
  TopBar
} from "@/views/Common";
import { LContainer, LFooter, LHeader, LLanding, LMain } from "@/views/layout";
import { Divider } from "@arco-design/web-react";

const ColumnContentPage = () => {
  return (
    <>
      <PageSEO title="社会 | 中原科技网" />
      <TopBar />
      <LHeader>
        <Navigation />
      </LHeader>
      <LMain>
        <LLanding>
          <h2 className="text-2xl font-bold text-red-700">社会</h2>
          <Divider />
        </LLanding>
        <LLanding>
          <ColumnContentHotList />
        </LLanding>
        <Divider />
        <LLanding>
          <ColumnContentArticleList />
        </LLanding>
        <Divider />
        <LLanding>
          <ColumnContentVideoList />
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

export default ColumnContentPage;
