import React from 'react' ;
import "./navbar.css" ;
import star from "../../../assets/navbarstar.png"
import {RxHamburgerMenu, RxCross2} from 'react-icons/rx';


const Menu = () =>{
  return(<>
    <a href = "#home" className = "navbar__home navbar__link"> 
        <img src = {star} className = "navbar__icon"/> 
        <div className = "navbar__link__caption"> Home </div>
    </a> 
            
    <div className = "navbar__skills navbar__link"> 
      <img src = {star} className = "navbar__icon"/> 
      <div className = "navbar__link__caption"> Skills </div>
    </div> 
            
    <div className = "navbar__portfolio navbar__link"> 
      <img src = {star} className = "navbar__icon"/> 
      <div className = "navbar__link__caption"> Projects </div>
    </div>
            
    <div className = "navbar__contact"> 
      Contact Me
    </div>
    </>
  )
}


const Navbar = () => {

  const [isMenuOpen, setMenuState] = React.useState(false);


  return (
        <div className = "navbar navbar--background">
          <div className = "navbar__left navbar__left--font"> jashan. </div>
          <div className= "navbar__right navbar__right--font">
            <div className = "navbar__right-links">
              <Menu className = "navbar__right__menu"/>
            </div>


            {isMenuOpen ? 
            <div className = "navbar__menu">
            <div className = "navbar__mobile-links" onClick = {() => setMenuState(false)}>
              <div className = "navbar__close_icon"> <RxCross2 size = {56}/> </div>
                <Menu/>
              </div>
            </div>
              : 
            <div className = "navbar__hamburger_icon" onClick = {() => setMenuState(true)}>
              <RxHamburgerMenu size = {56}/>
            </div>
            }


          </div>
        </div>

  )
}

export default Navbar
