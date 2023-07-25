import React from 'react' ;
import "./hero.css" ;

import blob from "../../../assets/blob.svg";

const Hero = () => {
  return (
    <div className  = "hero hero--font">
      <div className = "hero__text">
        <div className = "hero__intro">
          Welcome to my creative corner!
        </div>
        <div className = "hero__body">
          I'm Gurjashan, a passionate software developer crafting immersive experiences that resonate and inspire. 
        </div>
        </div>
      <div className = "hero__image">
        <img src = {blob} className = "hero__blob" width = "500px"></img>
      </div>
    </div>
  )
}

export default Hero
