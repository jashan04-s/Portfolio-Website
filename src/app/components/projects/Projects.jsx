import React, {useState} from "react";
import "./projects.css";

import GoogleMapsClone from "../../../assets/projectimages/googlemapsclone.png";
import Kraya from "../../../assets/projectimages/kraya.png";
import PortfolioWebsite from "../../../assets/projectimages/portfoliowebsite.png";

import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs';

const ProjectList = ["http://localhost:3000/portfoliowebsite.png","http://localhost:3000/googlemapsclone.png", "http://localhost:3000/kraya.png"]



const Projects = () => {
  let [projectIndex, setProjectIndex] = useState(0);
  let [projectDisplayUrl, setProjectDisplayUrl] = 
  useState(
    {backgroundImage: "http://localhost:3000/portfoliowebsite.png"}
  );


  const displayNextProject = () => {
    if(projectIndex == ProjectList.length - 1){
      setProjectIndex(0);
    }
    else{
      setProjectIndex(projectIndex + 1)
    }
    console.log(projectIndex)
    
    setProjectDisplayUrl({
      backgroundImage: 'url(' + ProjectList[projectIndex] + ')'
    })

    console.log(projectDisplayUrl)
  }

  const displayLastProject = () => {
    if(projectIndex == 0){
      setProjectIndex(ProjectList.length - 1)
    }
    else{
      setProjectIndex(projectIndex - 1)
    }

    setProjectDisplayUrl({
      backgroundImage: 'url(' + ProjectList[projectIndex] + ')'
    })
  }



  return (
    <div className="projects" id="projects">
      <div className="projects__header projects__header--font">Projects</div>
      <div className="project__content" style = {projectDisplayUrl}>
        <div className="project__container">
          <div className="project__name">Portfolio Website</div>
          <div className="project__description">
            <div className = "description__tech">
                Technologies Used: React, Vanilla CSS 
            </div>
            <div className = "description__text">
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasklhflj/o4jogi/nalka.dsngkj.sgbknsdrsaijfljjjjj
            </div>
            <div className = "description__button">
                <button> Visit Website </button>
                <button> Code </button>  
            </div>
          </div>
        </div>
        <div className="project__slider">
          <div className="slider__grid">
            <div className="grid__one">
              <img src={Kraya} width="300" />
            </div>
            <div className="grid__two">
              <img src={GoogleMapsClone} width="300" />
            </div>
            <div className="grid__three">
              <img src={PortfolioWebsite} width="300" />
            </div>
          </div>
          <div className = "grid__navigation">
            <div className = "navigation__arrow"> 
                
                    <div className = "arrow__left">
                        <BsFillArrowLeftCircleFill size= {48} color = "var(--primary-color)" onClick = {displayLastProject}/>
                    </div>
                
                <div className = "arrow__right">
                    <BsFillArrowRightCircleFill size= {48} color = "var(--primary-color)" onClick = {displayNextProject}/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
