import React, {useState, useEffect} from "react";
import "./projects.css";

import GoogleMapsClone from "../../../assets/projectimages/googlemapsclone.png";
import Kraya from "../../../assets/projectimages/Kraya.png";
import PortfolioWebsite from "../../../assets/projectimages/portfoliowebsite.png";
import DE1SoCGame from "../../../assets/projectimages/DE1SoCGame.png";
import ColorizeImagesAI from "../../../assets/projectimages/ColorizeImagesAI.png";

import {BsFillArrowRightCircleFill} from 'react-icons/bs';

const ProjectList = ["./portfoliowebsite.png","./googlemapsclone.png", "Kraya.png", "./DE1SoCGame.png", "./ColorizeImagesAI.png"]
const ImageList = [ PortfolioWebsite, GoogleMapsClone, Kraya, DE1SoCGame, ColorizeImagesAI]
const ProjectInfo = {
  name: [ "Colorizing Images with GAN", "Portfolio Website", "GoogleMapsClone", "Kraya", "2D Game Clone on DE1-SoC Board"],
  text: [ "Developed a U-Net-based cGAN using PyTorch to colorize grayscale images from the Kaggle dataset, incorporating recommended loss functions, utilizing CUDA cores, and optimizing with a pre-trained ResNet-34 as the encoder to address training time and GPU memory constraints.", 
  "Crafted a sleek MERN portfolio with AWS S3, MongoDB, GSAP animations, and Nodemailer for user interaction.", 
  "Developed a feature-rich C++ Google Maps clone using OpenStreetMap API, applying Dijkstra's and A* algorithms, addressing memory leaks with Valgrind, and implementing multi-threading for a significant reduction in query time",
  "Built a responsive landing page with HTML, CSS, and JavaScript, closely aligning with Figma designs and collaborating with a Git-based team.",
  "Recreated a 2D game clone on the DE1-SoC board using C, implementing pixel buffers for off-screen rendering, 2D sprites for game levels, and secure integration of PS2 keyboard inputs for user control." 
  ],
  skills: [ "Python, PyTorch, Numpy", "React, CSS, Express.js, Node.js, Nodemailer API", "C++, Glade, Valgrind", "HTML, CSS, Javascript","C"]
}

const Projects = () => {
  let [projectIndex, setProjectIndex] = useState(1);
  let [projectDisplayUrl, setProjectDisplayUrl] = 
  useState(
    {backgroundImage: 'url(' + ProjectList[0] + ')'}
  );


  const displayNextProject = () => {
    
    if(projectIndex == ProjectList.length - 1){
      setProjectIndex(0);
    }
    else{
      console.log(projectIndex)
      setProjectIndex(projectIndex + 1)
      console.log(projectIndex)
    }
    
    
    setProjectDisplayUrl({
      backgroundImage: 'url(' + ProjectList[projectIndex] + ')'
    })

    console.log(projectDisplayUrl)
  }

  return (
    <div className="projects" id="projects">
      <div className="projects__header projects__header--font">Projects</div>
      <div className="project__content" style = {projectDisplayUrl}>
        <div className="project__container">
          <div className="project__name">{ProjectInfo.name[projectIndex]}</div>
          <div className="project__description">
            <div className = "description__tech">
                Technologies Used: {ProjectInfo.skills[projectIndex]}
            </div>
            <div className = "description__text">
              {ProjectInfo.text[projectIndex]}
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
              <img src={ImageList[(projectIndex) % (ProjectList.length)]} width="300" />
            </div>
            <div className="grid__two">
              <img src={ImageList[(projectIndex + 1) % (ProjectList.length)]} width="300" />
            </div>
            <div className="grid__three">
              <img src={ImageList[(projectIndex + 2) % (ProjectList.length)]} width="300" />
            </div>
          </div>
          <div className = "grid__navigation">
            <div className = "navigation__arrow"> 
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
