import React from 'react'
import {BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from 'react-icons/bs';

import "./aboutskill.css" ;
import { useNavigate, useParams } from 'react-router-dom';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const icons = importAll(
  require.context("../../../assets/skillicons", false, /\.(png)$/)
);

const SkillsList = ["html","css","javascript", "react", "tailwindCSS", "nextjs", "mysql", "node", "c++", "c", "python", "matlab", "verilog", "webpack", "git"]

const displayNextPage = (currentSkill, forward = true) => {
  
  
  let currentIndex = SkillsList.indexOf(currentSkill)
  
  if(forward){
    currentIndex++
  }
  else{
    currentIndex--
  }
  
  if(currentIndex == SkillsList.length){
    currentIndex = 0
  }
  else if(currentIndex == -1){
    currentIndex =  SkillsList.length - 1
  }
  
  return '../about/' + SkillsList[currentIndex]
  
}



const Aboutskill = () => {
  
  const navigate = useNavigate();
  const { SkillName } = useParams();

  console.log(SkillName)
  return (
    <>
      <div className = "return" onClick = {() => navigate('../..')}> Return </div>
      <div className = "about--positioner">
        <div className= "about__right" onClick = {() => navigate(displayNextPage(SkillName, false))}> <BsFillArrowLeftSquareFill size = {56}/> </div>
        
        
        <div className = "about__card">
          <div className = "about__icon">
            <img className = "about__icon--size" src = {icons[SkillName + "icon.png"]}></img>
          </div>
          <div className = "about__information">
          <div className = "about__header"> {SkillName} </div>
          <div className = "about__content">
          She literature discovered increasing how diminution understood. Though and highly the enough county for man. Of it up he still court alone widow seems. Suspected he remainder rapturous my sweetness. All vanity regard sudden nor simple can. World mrs and vexed china since after often.
            </div>
          </div>
        </div>

        <div className= "about__left" onClick = {() => navigate(displayNextPage(SkillName))}> <BsFillArrowRightSquareFill size = {56}/>  </div>
      </div>
  </>
  )
}

export default Aboutskill
