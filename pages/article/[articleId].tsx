import Head from 'next/head';
import { ArticleNextListBox } from '../../components/ArticleContentPage/ArticleNextListBox';
import { ArticleReader } from '../../components/ArticleContentPage/ArticleReader';
import { BooksShowBox } from '../../components/Utils/BooksShowBox';
import { TopicBox } from '../../components/HomePage/TopicBox';
import { Footer } from '../../components/Utils/Footer';
import { Navigation } from '../../components/Utils/Navigation';
import { PictureBox } from '../../components/Utils/PictureBox';
import { ScrollToTop } from '../../components/Utils/ScrollToTop';
import { HomePageDebugData } from '../../debug/HomePage';
import { ArticleContentLayout } from '../../layouts/ArticleContentLayout';
const LHeader = ArticleContentLayout.Header;
const LMain = ArticleContentLayout.Main;
const LFooter = ArticleContentLayout.Footer;
const LLanding = ArticleContentLayout.Landing;
const LContainer = ArticleContentLayout.Container;
const LLeftCol = ArticleContentLayout.LeftCol;
const LRightCol = ArticleContentLayout.RightCol;
const LSlot = ArticleContentLayout.Slot;

export default function ArticleContentPage() {
  return (
    <div>
      <Head>
        <title>中原科技网</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LHeader>
        <Navigation />
      </LHeader>
      <LMain>
        <LContainer>
          <LLeftCol>
            <LSlot>
              <ArticleReader />
            </LSlot>
            <LSlot></LSlot>
          </LLeftCol>
          <LRightCol>
            <LSlot>
              <PictureBox data={HomePageDebugData.leftBottomPictureBoxData}></PictureBox>
            </LSlot>
            <LSlot>
              <ArticleNextListBox data={HomePageDebugData.hotListBoxData} />
            </LSlot>
            <LSlot>
              <TopicBox />
            </LSlot>
            <LSlot>
              <BooksShowBox data={HomePageDebugData.booksShowBoxData} />
            </LSlot>
          </LRightCol>
        </LContainer>
      </LMain>
      <LFooter>
        <Footer />
      </LFooter>
      <ScrollToTop />
    </div>
  );
}
