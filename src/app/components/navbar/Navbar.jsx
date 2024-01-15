import React, { useEffect } from "react";
import {PropTypes } from "prop-types";

import "./navbar.css";
import star from "../../../assets/navbarstar.png";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Menu = ({activeSectionStyle}) => {
  
  return (
    <>
      <a href="#home" className= "navbar__home navbar__link" style = {activeSectionStyle.home}>
        <img src={star} className="navbar__icon" />
        <div className="navbar__link__caption"> Home </div>
      </a>

      <a href="#skills" className="navbar__skills navbar__link" style = {activeSectionStyle.skills}>
        <img src={star} className="navbar__icon" />
        <div className="navbar__link__caption"> Skills </div>
      </a>

      <a href="#experience" className="navbar__experience navbar__link" style = {activeSectionStyle.experience}>
        <img src={star} className="navbar__icon" />
        <div className="navbar__link__caption"> Experience </div>
      </a>

      <a href="#projects" className="navbar__projects navbar__link" style = {activeSectionStyle.projects}>
        <img src={star} className="navbar__icon" />
        <div className="navbar__link__caption"> Projects </div>
      </a>
    </>
  );
};



const NavbarLogo = () => {
  
  const handleMouse = (event) => {
    setMousePosition({
      x: event.clientX / window.innerWidth,
      y: event.clientY / window.innerHeight,
    });
  };

  const [mousePosition, setMousePosition] = React.useState({});

  useEffect(() => {
      window.addEventListener("mousemove", handleMouse);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);
  
  document.documentElement.style.setProperty('--logo-translate-x', 8 * mousePosition.x + "%")
  document.documentElement.style.setProperty('--logo-translate-y', 12 * mousePosition.x + "%")
  
  return (
    <div className="navbar__left navbar__left--font">
      jashan.
      <div className="logo__effect_1"> jashan. </div>
      <div className="logo__effect_2">jashan. </div>
    </div>
  );
};



const Navbar = () => {
  const [isMenuOpen, setMenuState] = React.useState(false);
  const [currentSection, setCurrentSection] = React.useState('home');
  
  let activeSectionStyle = {
    home: {},
    skills: {},
    experience: {},
    projects: {}
  }

  if(window.innerWidth > 1024) activeSectionStyle[currentSection] = {borderBottom: '2px solid orange'};

 

  function activeSection(){
    let allSections = ['.hero', '.skill_section', '.experience', '.projects'];
    
    allSections = allSections.map((section) => document.querySelector(section));
    

    allSections.forEach((section) => {
      const sectionTop = section.offsetTop;
      
      if(window.scrollY > sectionTop - 200){
        setCurrentSection(`${section.id}`);
      }
    })
  }

  

  useEffect(()=>{
    window.addEventListener('scroll', activeSection)

    return () => {
      window.removeEventListener('scroll', activeSection)
    }
  })

  return (
    <div className="navbar navbar--background">
      <NavbarLogo />
      <div className="navbar__right navbar__right--font">
        <div className="navbar__right-links">
          <Menu className="navbar__right__menu" activeSectionStyle = {activeSectionStyle}/>
        </div>

        {isMenuOpen ? (
          <div className="navbar__menu">
            <div
              className="navbar__mobile-links"
              onClick={() => setMenuState(false)}
            >
              <div className = "navbar_toggle__icons navbar__close_icon">
                {" "}
                <RxCross2/>{" "}
              </div>
              <Menu activeSectionStyle = {activeSectionStyle} />
            </div>
          </div>
        ) : (
          <div
            className = "navbar_toggle__icons navbar__hamburger_icon"
            onClick={() => setMenuState(true)}
          >
            <RxHamburgerMenu />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
