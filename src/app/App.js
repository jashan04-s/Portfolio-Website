import React from 'react' ;
import {Hero, Navbar, Skills, Experience, Projects, Contact} from "./components";

import "./App.css"


const App = () => {
  
  
  
  return (

    <div className =  "App">
      <Navbar/> 
      <Hero/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
    
  )
}

export default App
