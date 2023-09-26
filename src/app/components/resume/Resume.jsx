import React from 'react';
import resumePDF from "../../../assets/other/GurjashanSinghResume.pdf"
import "./resume.css" ;

const Resume =  () => {
    return(
    <div className = "pdf">
        <iframe src  = {resumePDF} width = "100%" height = "100%"></iframe>
    </div>
    );
}

export default Resume