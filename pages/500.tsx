import Head from "next/head";
import { TopBar, Navigation, ScrollToTop, Footer, PageSEO } from "views/Common";
import { ResourceNotFound } from "views/ErrorPage/components/ResourceNotFound";

import { LFooter, LHeader, LLanding, LMain } from "../layouts";
export default function Custom500() {
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
          <ResourceNotFound />
        </LLanding>
      </LMain>
      <LFooter>
        <Footer />
      </LFooter>
      <ScrollToTop />
    </>
  );
}
