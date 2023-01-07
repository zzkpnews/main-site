import {
  Footer,
  Navigation,
  PageSEO,
  ScrollToTop,
  TopBar
} from "@/views/Common";
import { Container, Row } from "@/views/layout/layout";
import { SearchBox } from "@/views/SearchPage";
import { useRouter } from "next/router";

const SearchPage = () => {
  const search_word = useRouter().query.word?.toString();
  return (
    <>
      <PageSEO title="搜索 | 中原科技网" />
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
