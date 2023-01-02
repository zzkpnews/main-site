import Head from "next/head";
import { TopBar, Navigation, ScrollToTop, Footer, PageSEO } from "views/Common";
import { ResourceNotFound } from "views/ErrorPage/components/ResourceNotFound";

import { LFooter, LHeader, LLanding, LMain } from "../layouts";
export default function Custom404() {
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
}
