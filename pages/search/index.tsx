import {
  Footer,
  Navigation,
  PageSEO,
  ScrollToTop,
  TopBar,
} from "@/views/Common";
import { LFooter, LHeader, LLanding, LMain } from "@/views/layout";
import { SearchBox } from "@/views/SearchPage";
import { useRouter } from "next/router";

const SearchPage = () => {
  const search_word = useRouter().query.word?.toString();
  return (
    <>
      <PageSEO title="搜索 | 中原科技网" />
      <TopBar />
      <LHeader>
        <Navigation />
      </LHeader>
      <LMain>
        <LLanding>
          <SearchBox searchWord={search_word} />
        </LLanding>
      </LMain>
      <LFooter>
        <Footer />
      </LFooter>
      <ScrollToTop />
    </>
  );
};

export default SearchPage;
