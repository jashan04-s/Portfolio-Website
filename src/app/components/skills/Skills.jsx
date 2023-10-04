import React from "react";
import "./skills.css";

import PropTypes from "prop-types";

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

const DisplayIcons = ({skillIcon}) =>{
  
  return(<>
    {skillIcon.map((SkillIcon) => (
      <div className="icons">
        <div key = {SkillIcon}>
          <img src={icons[SkillIcon +"icon.png"]} />
        </div>
        <div className = "icon__caption"> {SkillIcon} </div>
      </div>
    )) 
  }
  </>
  );
  
}

DisplayIcons.propTypes = {
  skillIcon: PropTypes.arrayOf(PropTypes.string),
};

const DisplaySkills = ({ skillType, skillIcons }) => {
  

  return (
    <div className={"skill__" + skillType}>
      <div className={skillType + "__header"}> {skillType} </div>
      <div className={skillType + "__icons"}>
        <DisplayIcons skillIcon = {skillIcons} />
      </div>
    </div>
  );
};

DisplaySkills.propTypes = {
  skillType: PropTypes.string,
  skillIcons: PropTypes.arrayOf(PropTypes.string),
};




const Skills = () => {
  const FrontendIcons = ["html", "css", "javascript", "react", "tailwind", "nextjs"]
  const BackendIcons = ["mysql", "node"]
  const OtherIcons = ["c++", "c", "python", "matlab", "verilog"]
  const ToolIcons = ["webpack", "git"]

  return (
    <div id="skills">
      <div className="skill__header skill__header--font">My Skills</div>
      <div className="skill__header__text skill__header__text--font">
        Click on each icon to see my experience with each tool / programming
        language.
      </div>
      <div className="skills__container">
        <div className="skills skills--font">
          <DisplaySkills skillType = "frontend" skillIcons = {FrontendIcons} />
          <DisplaySkills skillType = "backend" skillIcons = {BackendIcons} />
          <DisplaySkills skillType = "tools" skillIcons = {ToolIcons} />
          <DisplaySkills skillType = "other" skillIcons = {OtherIcons} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
