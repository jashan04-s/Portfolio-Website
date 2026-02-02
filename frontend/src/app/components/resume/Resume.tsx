import React from 'react';
import { Link } from "react-router-dom";

import "./resume.css";

import resumePDF from "../../../assets/other/GurjashanSinghResume.pdf"





const Resume = () => {

    let DocumentHeight = window.innerHeight;

    return (
        <div className="pdf">
            <div className="pdf__container">
                <embed src={resumePDF} type="application/pdf" width="100%" height={DocumentHeight} />
            </div>
            <div className="pdf__buttons">
                <Link to="/" className="button__return-pdf"> Return </Link>
                <a href={resumePDF} className="button__download-pdf"> Download </a>
            </div>
        </div>

    );
}

export default Resume