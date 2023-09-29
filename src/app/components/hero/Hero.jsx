import React from 'react' ;
import "./hero.css" ;

import Lottie from 'lottie-react';
import animationData from '../../../assets/lottieLaptop.json';

import linkedinIcon from '../../../assets/linkedinicon.png';
import githubIcon from '../../../assets/githubicon.png';
import emailIcon from '../../../assets/emailicon.png';

import {Link} from "react-router-dom";

const Hero = () => {
  

  return (
    <div className = "hero" id = "home">
      <div className = "hero__content">
        <div className = "hero__header hero__header--font">
          Hi, I'm <span className = "header__emphasis"> Gurjashan.</span>
        </div>
        <div className = "hero__text hero__text--font">
          Welcome to my creative corner! I'm a passionate software developer crafting immersive experiences that resonate and inspire.
        </div>
        <div className = "hero__items">
          <Link to =  "resume" className = "resumeButton">
            Resume
          </Link>
          <div className = "hero__socials">
            <img src = {githubIcon}/>
            <img src = {emailIcon}/>
            <img src = {linkedinIcon}/>
          </div>
        </div>
      </div>
      <div className = "hero__animation">
        <Lottie animationData = {animationData} style = {{width: 700}}/>
      </div>
    </div>
  )
}

export default Hero
