import { Navigation, PageSEO, TopBar } from "@/views/Common";
import {
  LContainer,
  LHeader,
  LLeftCol,
  LMain,
  LRightCol,
  LSlot
} from "@/views/layout";
import { PlayList, VideoPlayer } from "@/views/VideoContentPage";

export default function VideoContentPage() {
  return (
    <>
      <PageSEO title="视频新闻页面" />
      <TopBar />
      <LHeader>
        <Navigation />
      </LHeader>
      <LMain size="large">
        <LContainer>
          <LLeftCol>
            <LSlot>
              <VideoPlayer data={undefined} />
            </LSlot>
          </LLeftCol>
          <LRightCol>
            <LSlot>
              <PlayList data={undefined} />
            </LSlot>
          </LRightCol>
        </LContainer>
      </LMain>
    </>
  );
}
