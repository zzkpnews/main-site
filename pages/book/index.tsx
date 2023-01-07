import { BooksList } from "@/views/BookIndexPage";
import { LFooter, LHeader, LLanding, LMain } from "@/views/layout";
import { Footer, Navigation, PageSEO, TopBar } from "views/Common";

const BookIndexPage = () => {
  return (
    <>
      <PageSEO title="所有书刊 | 中原科技网" />
      <TopBar />
      <LHeader>
        <Navigation />
      </LHeader>
      <LMain>
        <LLanding>
          <BooksList />
        </LLanding>
      </LMain>
      <LFooter>
        <Footer />
      </LFooter>
    </>
  );
};

export default BookIndexPage;
