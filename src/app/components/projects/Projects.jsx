import React from 'react';
import "./projects.css" ;

import GoogleMapsClone from "../../../assets/projectimages/googlemapsclone.png";
import Kraya from "../../../assets/projectimages/kraya.png";
import PortfolioWebsite from "../../../assets/projectimages/portfoliowebsite.png";

const Projects = () => {

    return (
        <div className = "projects">
            <div className = "projects__header projects__header--font">
                Projects
            </div>
            <div className = "projects__grid">
                <div className = "grid__one"> 
                    <img src = {Kraya} />
                </div>
                <div className = "grid__two"> 
                    <img src = {PortfolioWebsite} />
                </div>
                <div className = "grid__three"> 
                    <img src = {GoogleMapsClone} /> 
                </div>
            </div>
        </div>
    )
  }
  
  export default Projects