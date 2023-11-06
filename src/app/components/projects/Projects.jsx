import React from 'react';
import "./projects.css" ;

import GoogleMapsClone from "../../../assets/projectimages/googlemapsclone.png";
import Kraya from "../../../assets/projectimages/kraya.png";
import PortfolioWebsite from "../../../assets/projectimages/portfoliowebsite.png";

const Projects = () => {

    return (
        <div className = "projects" id = "projects">
            <div className = "projects__header projects__header--font">
                Projects
            </div>
            <div className = "project__content">
                <div className = "project__header">
                    Project Name
                </div>
                <div className = "projects__description">
                    BLAjsabjka dfa,snf cljegsbfjn csdfnANMS
                    SNKDKAshflknASM.Msd.s/sv
                    sdlakjfLasd
                </div>
                <div className = "projects__slider">
                    <div className = "slider__grid">
                        <div className = "grid__one">
                            <img src = {Kraya}  width = "300"/>
                        </div>
                        <div className = "grid__two">
                            <img src = {GoogleMapsClone} width = "300"/>
                        </div>
                        <div className = "grid__three">
                            <img src = {PortfolioWebsite} width = "300"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export default Projects