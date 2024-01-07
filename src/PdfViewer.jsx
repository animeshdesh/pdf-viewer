/* eslint-disable no-unused-vars */
import { useState } from "react";
import pdf from "./assets/LLD.pdf";
import "./pdfViewer.css";

import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

import { Document, Page } from "react-pdf";
import { Canvas, StyleSheet } from "@react-pdf/renderer";

import UpIcon from "./assets/up.svg";
import DownIcon from "./assets/down.svg";
import plusIcon from "./assets/plus.svg";
import minusIcon from "./assets/minus.svg";

const PdfViewer = () => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [screen, setScreen] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <div className="pdf-container">
        <div className="pdf-viewer-heading">View PDF : LLD.pdf</div>
        <div className="title-pdf-viewer-container">
          <div className="title-pdf-viewer">PDF</div>
        </div>
        <div className="pdf-viewer">
          <div className="pdf-display">
            <div className="main-pdf-viewer">
              <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                {/* <Canvas> */}
                <Page
                  pageNumber={pageNumber}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  height={500}
                  width={435}
                />
                {/* </Canvas> */}
              </Document>
            </div>
          </div>
          <div className="pdf-display-buttons">
            <div className="button-div">
              <div className="button-gap">
                <img
                  style={{ cursor: "pointer" }}
                  src={UpIcon}
                  alt="Up"
                  onClick={() => setPageNumber((prevData) => prevData + 1)}
                />
                <img
                  style={{ cursor: "pointer" }}
                  src={DownIcon}
                  alt="DownIcon"
                  onClick={() => setPageNumber((prevData) => prevData - 1)}
                />
              </div>
              Page {pageNumber}/{numPages}
            </div>
            <div className="button-div">
              <div className="button-gap">
                <img
                  src={plusIcon}
                  style={{ cursor: "pointer" }}
                  alt="plusIcon"
                />
                <img
                  src={minusIcon}
                  style={{ cursor: "pointer" }}
                  alt="minusIcon"
                />
              </div>
              Zoom 100%
            </div>
          </div>
        </div>
        <div className="buttons-container">
          <button className="buttonBlack">Cancel</button>
          <button className="buttonBlue">Print</button>
        </div>
        <p></p>
        <button>Test</button>
      </div>
    </>
  );
};

export default PdfViewer;
