import { Pagination } from '@arco-design/web-react';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const BookReader = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = (config: { numPages: any }) => {
    setNumPages(config.numPages);
  };
  return (
    <>
      <div className="overflow-x-auto overflow-y-scroll thin-scrollbar border" style={{ height: '100vh' }}>
        <Document file="http://localhost:3000/test.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page
            scale={2}
            pageNumber={pageNumber}
            renderMode="canvas"
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
      <div className="fixed bottom-10 right-0 p-3 bg-white border">
        <div>
          <Pagination simple total={50} size="small" />
        </div>
      </div>
    </>
  );
};
