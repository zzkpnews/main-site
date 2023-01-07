import { HomePageDebugData } from "@/debug/HomePage";
import { ArticleNextListBox, ArticleReader } from "@/views/ArticleContentPage";
import {
  Footer,
  Navigation,
  PageSEO,
  PictureBox,
  ScrollToTop,
  TopBar
} from "@/views/Common";
import { BooksShowBox, TopicBox } from "@/views/HomePage";
import { LContainer, LFooter, LHeader, LLeftCol, LMain, LRightCol, LSlot, LStickySlot } from "@/views/layout";

export const ArticleContentPage = () => {
  return (
    <>
      <PageSEO title="中原科技网" />
      <TopBar />
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
              <PictureBox data={HomePageDebugData.leftBottomPictureBoxData} />
            </LSlot>
            <LSlot>
              <BooksShowBox data={HomePageDebugData.booksShowBoxData} />
            </LSlot>
            <LSlot>
              <TopicBox />
            </LSlot>
            <LStickySlot>
              <ArticleNextListBox data={HomePageDebugData.hotListBoxData} />
            </LStickySlot>
          </LRightCol>
        </LContainer>
      </LMain>
      <LFooter>
        <Footer />
      </LFooter>
      <ScrollToTop />
    </>
  );
};

export default ArticleContentPage;
