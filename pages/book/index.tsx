import { BookIndexPageTemplate } from "@/models/template";
import { BooksList } from "@/views/BookIndexPage";
import {
  Footer,
  Navigation,
  PageSEO,
  ScrollToTop,
  TopBar
} from "@/views/Common";
import { Container, Row } from "@/views/Layout";

const BookIndexPage = (props: BookIndexPageTemplate) => {
  return (
    <>
      <PageSEO title="所有书刊 | 中原科技网" />
      <TopBar />
      <Navigation />
      <Container>
        <Row>
          <BooksList initialData={props.book_list} />
        </Row>
      </Container>
      <Footer
        initialData={{ friends: props.page_common.website_summary.friends }}
      />
      <ScrollToTop />
    </>
  );
};

export default BookIndexPage;
