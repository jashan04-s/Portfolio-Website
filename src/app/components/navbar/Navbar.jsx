import React from 'react' ;
import "./navbar.css" ;
import star from "../../../assets/navbarstar.png"

const Navbar = () => {

  const [isMenuOpen, setMenuState] = React.useState(false);


  return (
        <div className = "navbar navbar--background">
          <div className = "navbar__left navbar__left--font"> jashan. </div>
          <div className= "navbar__right navbar__right--font">
            <div className = "navbar__home"> 
             <img src = {star} className = "navbar__icon"/> Home
            </div> 
            <div className = "navbar__skills"> 
             <img src = {star} className = "navbar__icon"/> Skills
            </div> 
            <div className = "navbar__portfolio"> 
             <img src = {star} className = "navbar__icon"/> Projects
            </div>
            <div className = "navbar__contact"> 
              Contact Me
            </div>
          </div>
          
        </div>

  )
}

export default Navbar
