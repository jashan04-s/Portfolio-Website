import React from 'react';
import {useState} from 'react';
import "./resume.css" ;


import { Document, Page, pdfjs } from "react-pdf";
import resumePDF from "../../../assets/other/GurjashanSinghResume.pdf"


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();



const Resume =  () => {

    return(
    <div className = "pdf">
        <Document file = {resumePDF} pageLayout = "singlePage">
            <Page pageNumber={1} height={1000} renderTextLayer = {false}/> 
        </Document>
        <div className = "buttons">
            <button className = "return"> Return </button>
            <button className = "return"> Download </button>
        </div>
    </div>
    
    );
}

export default Resume