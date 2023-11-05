import React from "react";
import "./skills.css";

import PropTypes from "prop-types";
import {Link} from "react-router-dom";

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

const DisplayIcons = ({skillType, skillIcon}) =>{
  return(
  <>
    {skillIcon.map((SkillIconName) => (
      <div className="icons" key = {SkillIconName}>
        <Link to = {"./about/" + SkillIconName}>
        <div className = "icon__effect icon--positioner">
            <img className = "icons__img" src={icons[SkillIconName +"icon.png"]}  height= "100px" />
        </div>
        <div className = {"skill__" + skillType + "--text" + " icon__caption icon__caption--positioner"}  > {SkillIconName} </div>
        </Link>
      </div>
    )) 
  }
  </>
  );
  
}

DisplayIcons.propTypes = {
  skillIcon: PropTypes.arrayOf(PropTypes.string),
  skillType: PropTypes.arrayOf(PropTypes.string),
};

const DisplaySkills = ({ skillType, skillIcons }) => {
  

  return (
    <div className={"skill__" + skillType}>
      <div className={skillType + "__header"}> {skillType} </div>
      <div className={skillType + "__icons"}>
        <DisplayIcons skillIcon = {skillIcons} skillType={skillType} />
      </div>
    </div>
  );
};

DisplaySkills.propTypes = {
  skillType: PropTypes.string,
  skillIcons: PropTypes.arrayOf(PropTypes.string),
};

const Skills = () => {
  const FrontendIcons = ["html", "css", "javascript", "react", "tailwindCSS", "nextjs"]
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
