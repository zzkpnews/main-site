import Head from 'next/head';
import { Divider } from '@arco-design/web-react';
import { Footer, Navigation, ScrollToTop, TopBar } from 'views/Common';
import { GroupPageNewsList } from './components';
import { LFooter, LHeader, LLanding, LMain } from '@layouts/index';

export default function GroupIndexPageTemplate() {
  return (
    <div>
      <Head>
        <title>{'专栏组 | 中原科技网'}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <LHeader>
        <Navigation />
      </LHeader>
      <LMain>
        <LLanding>
          <h1 className="text-xl font-bold">专栏组</h1>
          <Divider />
        </LLanding>
        <LLanding>
          <GroupPageNewsList />
        </LLanding>
      </LMain>
      <LFooter>
        <Footer></Footer>
      </LFooter>
      <ScrollToTop />
    </div>
  );
}