
import Head from 'next/head';
import { TopBar, Navigation, ScrollToTop, Footer } from 'views/Common';
import { ResourceNotFound } from 'views/ErrorPage/components/ResourceNotFound';

import { LFooter, LHeader, LLanding, LMain } from '../layouts';
export default function Custom500() {
  return (
    <div>
      <Head>
        <title>服务器发生严重错误 | 中原科技网</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
