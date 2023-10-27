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
      <div className = "about__card">
        <div className = "about__icon">
          <img className = "about__icon--shadow" src = {icons[SkillName + "icon.png"]} width = "300px"></img>
        </div>
        <div className = "about__information">
          Random Placeholder Content
        </div>
      </div>
    </div>
  )
}

export default Aboutskill
