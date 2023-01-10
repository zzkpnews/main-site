import { BooksList } from "@/views/BookIndexPage";
import { Container, Row } from "@/views/Layout";
import { Footer, Navigation, PageSEO, TopBar } from "views/Common";

const BookIndexPage = () => {
  return (
    <>
      <PageSEO title="所有书刊 | 中原科技网" />
      <TopBar />
      <Navigation />
      <Container>
        <Row>
          <BooksList />
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default BookIndexPage;
