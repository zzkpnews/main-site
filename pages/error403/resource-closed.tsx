import { ResourceClosed } from "@/views/Error403Page";
import { LContainer, LFooter, LHeader, LMain } from "@/views/layout";
import Footer from "@arco-design/web-react/es/Layout/footer";
import { Navigation, PageSEO, ScrollToTop, TopBar } from "views/Common";

const Error403Page = () => {
  return (
    <>
      <PageSEO title="内容已关闭 | 中原科技网" />
      <TopBar />
      <LHeader>
        <Navigation />
      </LHeader>
      <LMain>
        <LContainer>
          <ResourceClosed />
        </LContainer>
      </LMain>
      <LFooter>
        <Footer />
      </LFooter>
      <ScrollToTop />
    </>
  );
};

export default Error403Page;
