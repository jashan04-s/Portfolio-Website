import React from 'react'
import './experience.css'

const Experience = () => {
  
    return (
    <div className = "experience" id ="myExperience">
      <div className = "experience__header experience__header--font"> My Experience </div>
      <div className = "experience__content experience__content--font">
        <div className="internship__info">
            <div className="internship__name"> Web Developer at Kraya </div>
            <div className="internship__date"> May 2023 - August 2023 </div>
        </div>
        <div className = "internship__description">
            <div> <span className = "description__bullet--style"> 1 </span> Developed and Maintained a responsive website using HTML and CSS</div>
            <div> <span className = "description__bullet--style"> 2 </span> Colaborated with the design team to implement user interface mockups and ensure pixel perfect implementations of Figma designs </div>
        </div>
      </div>
    </div>
  )
}

export default Experience