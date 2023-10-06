import React from 'react'
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
      <div className = "about">
        <div className = "about__icon">
          <img src = {icons[SkillName + "icon.png"]}></img>
        </div>
        <div className = "about__information">
          Random Placeholder Content
        </div>
        </div>
    </div>
  )
}

export default Aboutskill
