import React, { useEffect, useMemo, useState } from "react";
import type { MenuProps, IconProps } from "./navbar.types";

import "./navbar.css";
import star from "../../../assets/navbarstar.png";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Menu = ({ activeSectionStyle }: MenuProps) => (
  <nav className="navbar__right-links">
    <a href="#home" className="navbar__home navbar__link" style={activeSectionStyle.home}>
      <img src={star} className="navbar__icon" alt="star" />
      <div className="navbar__link__caption"> Home </div>
    </a>

    <a href="#skills" className="navbar__skills navbar__link" style={activeSectionStyle.skills}>
      <img src={star} className="navbar__icon" alt="star" />
      <div className="navbar__link__caption"> Skills </div>
    </a>

    <a href="#experience" className="navbar__experience navbar__link" style={activeSectionStyle.experience}>
      <img src={star} className="navbar__icon" alt="star" />
      <div className="navbar__link__caption"> Experience </div>
    </a>

    <a href="#projects" className="navbar__projects navbar__link" style={activeSectionStyle.projects}>
      <img src={star} className="navbar__icon" alt="star" />
      <div className="navbar__link__caption"> Projects </div>
    </a>
  </nav>
);

const NavbarLogo = ({ className }: IconProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouse = (event: MouseEvent) => {
    setMousePosition({
      x: event.clientX / window.innerWidth,
      y: event.clientY / window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--logo-translate-x", `${20 * mousePosition.x}%`);
    document.documentElement.style.setProperty("--logo-translate-y", `${60 * mousePosition.y}%`);
  }, [mousePosition]);

  return (
    <div className={`navbar__left navbar__left--font ${className ?? ""}`}>
      jashan.
      <div className="logo__effect_1"> jashan. </div>
      <div className="logo__effect_2">jashan. </div>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setMenuState] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth > 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const activeSectionStyle = useMemo(() => {
    const base = { borderBottom: "none" } as React.CSSProperties;
    const active = isDesktop ? ({ borderBottom: "2px solid orange" } as React.CSSProperties) : base;

    return {
      home: currentSection === "home" ? active : base,
      skills: currentSection === "skills" ? active : base,
      experience: currentSection === "experience" ? active : base,
      projects: currentSection === "projects" ? active : base,
    };
  }, [currentSection, isDesktop]);

  const activeSection = () => {
    const ids = ["home", "skills", "experience", "projects"];
    let current = "home";

    for (const id of ids) {
      const el = document.getElementById(id);
      if (!el) continue;

      const top = el.getBoundingClientRect().top + window.scrollY;
      if (window.scrollY >= top - 200) current = id;
    }

    setCurrentSection(current);
  };

  useEffect(() => {
    window.addEventListener("scroll", activeSection);
    activeSection(); // set initial
    return () => window.removeEventListener("scroll", activeSection);
  }, []);

  return (
    <div className="navbar navbar--background">
      <NavbarLogo className="navbar--logo" />

      <div className="navbar__right navbar__right--font">
        <div className="navbar__right-links">
          <Menu activeSectionStyle={activeSectionStyle} />
        </div>

        {isMenuOpen ? (
          <div className="navbar__menu">
            <div className="navbar__mobile-links" onClick={() => setMenuState(false)}>
              <div className="navbar_toggle__icons navbar__close_icon">
                <RxCross2 />
              </div>
              <Menu activeSectionStyle={activeSectionStyle} />
            </div>
          </div>
        ) : (
          <div
            className="navbar_toggle__icons navbar__hamburger_icon"
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