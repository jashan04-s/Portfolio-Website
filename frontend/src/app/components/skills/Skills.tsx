import React from "react";
import "./skills.css";

import { Link } from "react-router-dom";
import type { DisplayIconsProps, DisplaySkillsProps } from "./skills.types";

type RequireContext = {
  keys: () => string[];
  (id: string): string;
};

function importAll(r: RequireContext) {
  const images: Record<string, string> = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const icons = importAll(
  (require as any).context("../../../assets/skillicons", false, /\.(png)$/) as RequireContext
);

const DisplayIcons: React.FC<DisplayIconsProps> = ({ skillType, skillIcon }) => {
  return (
    <>
      {skillIcon.map((SkillIconName) => {
        const fileName = `${SkillIconName}icon.png`;
        const src = icons[fileName];

        return (
          <div className="icons" key={SkillIconName}>
            <Link to={`./about/${SkillIconName}`}>
              <div className="icons__small--positioner">
                <div className="icon__effect icon--positioner">
                  <img className="icons__img" src={src} alt={SkillIconName} />
                </div>

                <div className={`skill__${skillType}--text icon__caption icon__caption--positioner`}>
                  {SkillIconName}
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

const DisplaySkills: React.FC<DisplaySkillsProps> = ({ skillType, skillIcons, className = "" }) => {
  return (
    <div className={`skill__${skillType} ${className}`}>
      <div className={`${skillType}__header`}>{skillType}</div>
      <div className={`${skillType}__icons`}>
        <DisplayIcons skillIcon={skillIcons} skillType={skillType} />
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const FrontendIcons = ["html", "css", "javascript", "react", "tailwindCSS", "nextjs"];
  const BackendIcons = ["mysql", "node"];
  const OtherIcons = ["c++", "c", "python", "matlab", "verilog"];
  const ToolIcons = ["webpack", "git"];

  return (
    <div className="skill_section" id="skills">
      <div className="skill__header skill__header--font">My Skills</div>

      <div className="skill__header__text skill__header__text--font">
        Click on each icon to see my experience with each tool / programming language.
      </div>

      <div className="skills__container">
        <div className="skills skills--font">
          <DisplaySkills className="frontend" skillType="frontend" skillIcons={FrontendIcons} />
          <DisplaySkills className="backend" skillType="backend" skillIcons={BackendIcons} />
          <DisplaySkills className="tools" skillType="tools" skillIcons={ToolIcons} />
          <DisplaySkills className="other" skillType="other" skillIcons={OtherIcons} />
        </div>
      </div>
    </div>
  );
};

export default Skills;