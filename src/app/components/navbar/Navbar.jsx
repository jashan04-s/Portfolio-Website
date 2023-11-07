import React, { useEffect } from "react";
import "./navbar.css";
import star from "../../../assets/navbarstar.png";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Menu = () => {
  return (
    <>
      <a href="#home" className="navbar__home navbar__link">
        <img src={star} className="navbar__icon" />
        <div className="navbar__link__caption"> Home </div>
      </a>

      <a href="#skills" className="navbar__skills navbar__link">
        <img src={star} className="navbar__icon" />
        <div className="navbar__link__caption"> Skills </div>
      </a>

      <a href="#myExperience" className="navbar__portfolio navbar__link">
        <img src={star} className="navbar__icon" />
        <div className="navbar__link__caption"> Experience </div>
      </a>

      <a href="#projects" className="navbar__portfolio navbar__link">
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

  return (
    <div className="navbar navbar--background">
      <NavbarLogo />
      <div className="navbar__right navbar__right--font">
        <div className="navbar__right-links">
          <Menu className="navbar__right__menu"/>
        </div>

        {isMenuOpen ? (
          <div className="navbar__menu">
            <div
              className="navbar__mobile-links"
              onClick={() => setMenuState(false)}
            >
              <div className="navbar__close_icon">
                {" "}
                <RxCross2 size={36} />{" "}
              </div>
              <Menu />
            </div>
          </div>
        ) : (
          <div
            className="navbar__hamburger_icon"
            onClick={() => setMenuState(true)}
          >
            <RxHamburgerMenu size={56} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
