import { BookItem } from "@/models/data";
import { Avatar, InputNumber, Pagination } from "@arco-design/web-react";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { SizeMe } from "react-sizeme";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const BookReader = (props: { initialData: BookItem }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const [pagesCount, setPagesCount] = useState(0);

  return (
    <>
      <div
        className="overflow-x-auto overflow-y-scroll thin-scrollbar border-r border-l border-gray-300"
        style={{ height: "100vh" }}
      >
        <div className="py-5 border-b border-gray-300 sticky left-0 right-0">
          <a href={"/"}>
            <img
              src="/logo.png"
              className="mx-auto my-2 h-9"
              alt="zzkpnews-logo"
            />
          </a>
          <h2 className="text-red-700 text-lg text-center font-bold">
            {"书刊阅读器"}
          </h2>
        </div>

        <SizeMe monitorHeight refreshRate={128} refreshMode={"debounce"}>
          {(size) => (
            <>
              <Document
                onLoadSuccess={(pdf) => {
                  setPagesCount(pdf.numPages);
                }}
                file="http://localhost:3000/test.pdf"
              >
                <Page
                  width={size.size.width!}
                  height={size.size.height!}
                  scale={scale}
                  pageNumber={pageNumber}
                  renderMode="canvas"
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </Document>
            </>
          )}
        </SizeMe>

        <div className="flex justify-center my-3 border-t border-gray-300 sticky left-0 right-0">
          <div className="flex flex-col my-5">
            <div className="flex flex-col">
              <Avatar className="mx-auto shrink-0">P</Avatar>
              <div className="mx-auto text-lg my-2">{"中原科技网"}</div>
            </div>
            <div className="mx-auto my-auto text-gray-600">
              {"请注意作品版权"}
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-10 right-0 p-3 bg-white border">
        <div className="flex flex-col">
          <Pagination
            simple
            total={pagesCount}
            style={{ width: "10rem", margin: "10px 0" }}
            size="small"
            current={1}
            onChange={(num) => {
              setPageNumber(num);
            }}
          />
          <InputNumber
            mode="button"
            step={0.5}
            style={{ width: "8rem", margin: "10px auto" }}
            defaultValue={1}
            min={0.5}
            max={5}
            onChange={(num) => {
              setScale(num);
            }}
          />
        </div>
      </div>
    </>
  );
};
