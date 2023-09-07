import React from 'react' ;
import {Hero, Navbar, Skills, Projects, Contact} from "./components";

import "./App.css"


const App = () => {
  
  
  
  return (

    <div className =  "App">
      <Navbar/> 
      <Hero/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
    
  )
}

export default App
