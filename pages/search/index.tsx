import {
  Footer,
  Navigation,
  PageSEO,
  ScrollToTop,
  TopBar,
} from "@/views/Common";
import { Container, Row } from "@/views/Layout";
import { SearchBox } from "@/views/SearchPage";
import { useRouter } from "next/router";

const SearchPage = () => {
  const search_word = useRouter().query.word?.toString();
  return (
    <>
      <PageSEO
        title="搜索 | 中原科技网"
        describe="在中原科技网站内根据关键词，快速检索你需要的文章、视频、书刊信息。"
      />
      <TopBar />
      <Navigation />
      <Container>
        <Row>
          <SearchBox searchWord={search_word} />
        </Row>
      </Container>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default SearchPage;
