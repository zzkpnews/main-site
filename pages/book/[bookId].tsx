import { BookContentPageTemplate } from "@/models/template";
import { PageSEO } from "@/views/Common";
import { Container } from "@/views/Layout";
import dynamic from "next/dynamic";

const DynamicBookReader = dynamic(
  () =>
    import("@/views/BookContentPage/BookReader").then((mod) => mod.BookReader),
  {
    ssr: false,
  }
);

export const BookContentPage = (props: BookContentPageTemplate) => {
  return (
    <>
      <PageSEO
        title={`${props.book.title} | 中原科技网书刊`}
        describe={props.book.citation}
        keywords={props.book.keywords}
      />
      <Container>
        <DynamicBookReader initialData={props.book} />
      </Container>
    </>
  );
};

export default BookContentPage;
