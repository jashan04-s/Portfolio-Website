import React from 'react' ;
import "./navbar.css" ;
import {FiAlignRight} from "react-icons/fi";
import {IoClose} from "react-icons/io5";

const Navbar = () => {

  const [isMenuOpen, setMenuState] = React.useState(false);


  return (
        <div className = "navbar navbar--background navbar--font">
          <div className = "navbar__left navbar__left--font"> jashan. </div>
          <div className= "navbar__right"> 
            
            
            { isMenuOpen ?
            <div className = "navbar__menu" onMouseLeave = {() => setMenuState(false)}>
              <div className = "nav__listItem"><a href = ""> About </a></div>
              <div className = "nav__listItem"><a href = ""> Experience </a></div>
              <div className = "nav__listItem"><a href = ""> Work </a></div>
              <div className = "nav__listItem"><a href = ""> Contact </a></div>
              <IoClose size = "50px" className = "react-icon"/>
            </div>
          :
            <FiAlignRight size = "50px" className = "react-icon" onMouseEnter = { () => setMenuState(true)}/>   
            }

          </div>
          
        </div>

  )
}

export default Navbar
