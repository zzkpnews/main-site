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

export const BookContentPage = () => {
  return (
    <>
      <PageSEO title="中原科技网" />
      <Container>
        <DynamicBookReader />
      </Container>
    </>
  );
};

export default BookContentPage;
