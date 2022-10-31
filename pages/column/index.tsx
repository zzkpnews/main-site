import Head from 'next/head';
import { Footer } from '../../components/Utils/Footer';
import { Navigation } from '../../components/Utils/Navigation';
import { ScrollToTop } from '../../components/Utils/ScrollToTop';
import { ColumnLayout } from '../../layouts/ColumnLayout';

const LHeader = ColumnLayout.Header;
const LMain = ColumnLayout.Main;
const LFooter = ColumnLayout.Footer;
const LLanding = ColumnLayout.Landing;
const LContainer = ColumnLayout.Container;
const LLeftCol = ColumnLayout.LeftCol;
const LRightCol = ColumnLayout.RightCol;
const LSlot = ColumnLayout.Slot;
export default function ColumnPage() {
  return (
    <div>
      <Head>
        <title>所有专栏 | 中原科技网</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LHeader>
        <Navigation />
      </LHeader>
      <LMain>
        <LLanding>
        </LLanding>
      </LMain>
      <LFooter>
        <Footer />
      </LFooter>
      <ScrollToTop />
    </div>
  );
}
