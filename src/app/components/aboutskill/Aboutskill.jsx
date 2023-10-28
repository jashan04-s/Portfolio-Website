import React from 'react'
import {BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from 'react-icons/bs';

import "./aboutskill.css" ;
import { useParams } from 'react-router-dom';

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






const Aboutskill = () => {
  
  const { SkillName } = useParams();

  console.log(SkillName)
  return (
    <div className = "about--positioner">
      <div className= "about__left"> <BsFillArrowLeftSquareFill size = {56}/> </div>
      <div className = "about__card">
        <div className = "about__icon">
          <img className = "about__icon--size" src = {icons[SkillName + "icon.png"]}></img>
        </div>
        <div className = "about__information">
        <div className = "about__header"> {SkillName} </div>
        <div className = "about__content">
        She literature discovered increasing how diminution understood. Though and highly the enough county for man. Of it up he still court alone widow seems. Suspected he remainder rapturous my sweetness. All vanity regard sudden nor simple can. World mrs and vexed china since after often.

Inhabit hearing perhaps on ye do no. It maids decay as there he. Smallest on suitable disposed do although blessing he juvenile in. Society or if excited forbade. Here name off yet she long sold easy whom. Differed oh cheerful procured pleasure securing suitable in. Hold rich on an he oh fine. Chapter ability shyness article welcome be do on service.
          </div>
        </div>
      </div>

      <div className= "about__left"> <BsFillArrowRightSquareFill size = {56}/>  </div>
    </div>
  )
}

export default Aboutskill
