import Head from 'next/head';
import { ColumnNewsList } from './components';
import { LFooter, LHeader, LLanding, LMain } from '@layouts/index';
import { Footer, Navigation, ScrollToTop, TopBar } from 'views/Common';

export default function ColumnIndexPageTemplate() {
  return (
    <div>
      <Head>
        <title>所有专栏 | 中原科技网</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
    </div>
  );
}
