import Head from 'next/head';
import { LContainer, LHeader, LLeftCol, LMain, LRightCol, LSlot } from '@layouts/index';
import { Navigation, TopBar } from 'views/Common';
import { VideoPlayer, VideoPlayList } from './components';

export default function VideoContentPageTemplate() {
  return (
    <div>
      <Head>
        <title>中原科技网</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <LHeader>
        <Navigation />
      </LHeader>
      <LMain size="large">
        <LContainer>
          <LLeftCol>
            <LSlot>
              <VideoPlayer />
            </LSlot>
          </LLeftCol>
          <LRightCol>
            <LSlot>
              <VideoPlayList />
            </LSlot>
          </LRightCol>
        </LContainer>
      </LMain>
    </div>
  );
}
