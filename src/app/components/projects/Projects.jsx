import React, {useState} from "react";
import "./projects.css";
import gsap from 'gsap';


import GoogleMapsClone from "../../../assets/projectimages/googlemapsclone.png";
import Kraya from "../../../assets/projectimages/kraya.png";
import PortfolioWebsite from "../../../assets/projectimages/portfoliowebsite.png";
import DE1SoCGame from "../../../assets/projectimages/DE1SoCGame.png";
import ColorizeImagesAI from "../../../assets/projectimages/ColorizeImagesAI.png";

import {BsFillArrowRightCircleFill} from 'react-icons/bs';

const ProjectList = ["./portfoliowebsite.png","./googlemapsclone.png", "./kraya.png", "./DE1SoCGame.png", "./ColorizeImagesAI.png"]
const ImageList = [ PortfolioWebsite, GoogleMapsClone, Kraya, DE1SoCGame, ColorizeImagesAI]
const ProjectInfo = {
  name: [ "Colorizing Images with GAN", "Portfolio Website", "GoogleMapsClone", "Kraya", "2D Game Clone on DE1-SoC Board"],
  text: [ "Developed a U-Net-based cGAN using PyTorch to colorize grayscale images from the Kaggle dataset, incorporating recommended loss functions, utilizing CUDA cores, and optimizing with a pre-trained ResNet-34 as the encoder to address training time and GPU memory constraints.", 
  "Crafted a sleek MERN portfolio with AWS S3, MongoDB, GSAP animations, and Nodemailer for user interaction.", 
  "Developed a feature-rich C++ Google Maps clone using OpenStreetMap API, applying Dijkstra's and A* algorithms, addressing memory leaks with Valgrind, and implementing multi-threading for a significant reduction in query time",
  "Built a responsive landing page with HTML, CSS, and JavaScript, closely aligning with Figma designs and collaborating with a Git-based team.",
  "Recreated a 2D game clone on the DE1-SoC board using C, implementing pixel buffers for off-screen rendering, 2D sprites for game levels, and secure integration of PS2 keyboard inputs for user control." 
  ],
  skills: [ "Python, PyTorch, Numpy", "React, CSS, Express.js, Node.js, Nodemailer API", "C++, Glade, Valgrind", "HTML, CSS, Javascript","C"],
  urlCode: [ "https://github.com/jashan04-s/APS360_Project", "https://github.com/jashan04-s/Portfolio-Website", "./error", "https://github.com/jashan04-s/kraya-website", "https://github.com/jashan04-s/ECE243-Final_Project"],
  urlDemo: [ "https://autocolorization-aps360.streamlit.app", "https://main.dravjozo4ipw2.amplifyapp.com", "./error", "https://kraya-website.vercel.app/", "./error"]
}

const Projects = () => {
  let [projectIndex, setProjectIndex] = useState(1);
  let [projectDisplayUrl, setProjectDisplayUrl] = 
  useState(
    {backgroundImage: 'url(' + ProjectList[0] + ')'}
  );


  const displayNextProject = () => {
    
    let nextProjectIndex  = 0;
    if(projectIndex != ProjectList.length - 1){
      nextProjectIndex = projectIndex + 1;
    }
    
    
    
   

    gsap.fromTo('.project__content', { opacity: 1 }, { opacity: 0, duration: 0.5, onComplete: () => {
      // Once animation completes, update projectIndex and projectDisplayUrl
      setProjectIndex(nextProjectIndex);
      setProjectDisplayUrl({
        backgroundImage: 'url(' + ProjectList[nextProjectIndex] + ')'
      });
  
      // Animate the slide re-entry
      gsap.fromTo('.project__content', { opacity: 0 }, { opacity: 1, duration: 0.5 });
    }});
    
  }

  const showProjectGithub = () => {
    window.open(ProjectInfo.urlCode[projectIndex], '_blank');
  }

  const showProjectDemo = () => {
    window.open(ProjectInfo.urlDemo[projectIndex], '_blank');
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
                <button onClick = {showProjectDemo}> Visit Website </button>
                <button onClick = {showProjectGithub}> Code </button>
            </div>
          </div>
        </div>
        <div className="project__slider">
          <div className="slider__grid">
            <div className="grid__one">
              <img src={ImageList[(projectIndex + 1) % (ProjectList.length)]}  />
            </div>
            <div className="grid__two">
              <img src={ImageList[(projectIndex + 2) % (ProjectList.length)]} />
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
