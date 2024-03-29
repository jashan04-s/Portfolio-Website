import React, { useLayoutEffect, useRef, useEffect, useState } from 'react' ;
import "./hero.css" ;

import gsap from "gsap";
import Lottie from 'lottie-react';
import animationData from '../../../assets/lottieLaptop.json';

import linkedinIcon from '../../../assets/linkedinicon.png';
import githubIcon from '../../../assets/githubicon.png';
import emailIcon from '../../../assets/emailicon.png';

import {Link} from "react-router-dom";



function Typewriter({text, speed}) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval;

    if (currentIndex < text.length + 1) {
      interval = setInterval(() => {
        setDisplayedText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, speed); 
    }
    else{
      setDisplayedText("");
      setCurrentIndex(0);
    }

    return () => clearInterval(interval);
  }, [currentIndex, text]);

  return (
    <span className = "header__emphasis">{displayedText}</span> 
  );
}

const Hero = () => {

  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(
      () => {
        const timeline1 = gsap.timeline()      
        timeline1.from(".hero-slider",{
          xPercent: "-100",
          duration: 1.2,
          delay: 0.5,
        }).from(".hero__content", {
          opacity: 0,
          y: "+=30",
          stagger: 0.5
        })
      }, comp
    )

    return () => ctx.revert();
  })

  return (
    <div className = "gsap--encloser" ref = {comp}>
      <div className = "hero hero-slider" id = "home">
        <div className = "hero__content">
          <div className = "hero__header hero__header--font">
            Hi, I'm <Typewriter text = "Gurjashan." speed = "250"/>
          </div>
          <div className = "hero__text hero__text--font">
            Welcome to my creative corner! I'm a passionate software developer crafting immersive experiences that resonate and inspire.
          </div>
          <div className = "hero__items">
            <Link to =  "resume" className = "resumeButton">
            Résumé
            </Link>
            <div className = "hero__socials">
              <a href = "https://www.linkedin.com/in/gurjashan-singh-b45a88293" target="_blank"><img src = {linkedinIcon} className= "hero__socials__icon"/></a>
              <a href = "#contactmeform"><img src = {emailIcon} className= "hero__socials__icon"/></a>
              <a href = "https://github.com/jashan04-s" target="_blank"><img src = {githubIcon} className= "hero__socials__icon"/></a>
            </div>
          </div>
        </div>
        <div className = "hero__animation">
          <Lottie animationData = {animationData} style = {{width: 700}}/>
        </div>
      </div>
    </div>
  )
}

export default Hero
