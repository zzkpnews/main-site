import { HomePageDebugData } from "@/debug/HomePage";
import {
  Footer,
  HeaderBackground,
  Navigation,
  PageSEO,
  PictureBox
} from "@/views/Common";
import {
  CreatorCard,
  CreatorHotListBox,
  CreatorWorksList
} from "@/views/CreatorProfilePage";
import {
  LBackground,
  LContainer,
  LFooter,
  LHeader,
  LLeftCol,
  LMain,
  LRightCol,
  LSlot
} from "@/views/layout";

const CreatorProfilePage = () => {
  return (
    <>
      <PageSEO title="张宇腾的创作 | 中原科技网" />
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
              <CreatorHotListBox data={HomePageDebugData.hotListBoxData} />
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
    </>
  );
};

export default CreatorProfilePage;
