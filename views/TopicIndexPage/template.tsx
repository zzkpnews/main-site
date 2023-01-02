import Head from "next/head";
import { LFooter, LHeader, LLanding, LMain } from "@/layouts/index";
import { Footer, Navigation, ScrollToTop, TopBar } from "@/views/Common";
import { TopicNewsList } from "./components";

export default function TopicIndexPageTemplate() {
  return (
    <>
      <Head>
        <title>话题 | 中原科技网</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
}
