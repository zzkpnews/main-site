import Footer from '@arco-design/web-react/es/Layout/footer';
import Head from 'next/head';
import { CreatorCard, CreatorWorksList } from './components';
import { HomePageDebugData } from '@debug/HomePage';
import { HotListBox, Navigation, HeaderBackground, PictureBox } from 'views/Common';
import { LBackground, LContainer, LFooter, LHeader, LLeftCol, LMain, LRightCol, LSlot } from '@layouts/index';

export default function CreatorProfilePageTemplate() {
  return (
    <div>
      <Head>
        <title>张宇腾的创作 | 中原科技网</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LHeader>
        <Navigation />
      </LHeader>
      <LBackground>
        <HeaderBackground />
      </LBackground>
      <LMain>
        <LContainer>
          <LLeftCol>
            <LSlot>
              <CreatorCard />
            </LSlot>
            <LSlot>
              <CreatorWorksList />
            </LSlot>
          </LLeftCol>
          <LRightCol>
            <LSlot>
              <HotListBox data={HomePageDebugData.hotListBoxData} />
            </LSlot>
            <LSlot>
              <PictureBox data={HomePageDebugData.leftBottomPictureBoxData} />
            </LSlot>
            <LSlot>
              <PictureBox data={HomePageDebugData.leftTopPictureBoxData} />
            </LSlot>
          </LRightCol>
        </LContainer>
      </LMain>
      <LFooter>
        <Footer />
      </LFooter>
    </div>
  );
}
