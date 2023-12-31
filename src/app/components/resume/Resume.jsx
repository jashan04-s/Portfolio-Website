import React from 'react';
import {Link} from "react-router-dom";

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
        <div className = "pdf__container">
        <Document file = {resumePDF} pageLayout = "singlePage">
            <Page pageNumber={1} height={1000} renderTextLayer = {false}/> 
        </Document>
    </div>
        <div className = "pdf__buttons">
            <Link to = "/" className = "button__return-pdf"> Return </Link>
            <a href = {resumePDF} className= "button__download-pdf"> Download </a>
        </div>
    </div>
    
    );
}

export default Resume