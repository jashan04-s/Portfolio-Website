import React from "react";
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";

import "./aboutskill.css";

import type { RouteParams, SkillDescriptionMap, SkillName } from "./aboutskill.types";

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (require as any).context("../../../assets/skillicons", false, /\.(png)$/) as RequireContext
);

const SkillsList: SkillName[] = [
  "html",
  "css",
  "javascript",
  "react",
  "tailwindCSS",
  "nextjs",
  "mysql",
  "node",
  "c++",
  "c",
  "python",
  "matlab",
  "verilog",
  "webpack",
  "git",
];

const SkillDescription: SkillDescriptionMap = {
  html: "As a web developer at Kraya, I utilized HTML to construct a responsive landing page for the company's website.",
  css: "I utilized CSS to style GTK widgets for my Google Maps clone, as well as in the development of my portfolio website and during my tenure in web development at KrayaDotShop Pvt. Ltd.",
  javascript: "I applied JavaScript proficiently at Kraya and within frameworks such as React and Node.js during the construction of my website.",
  react: "I employed React extensively in the development of my portfolio website.",
  tailwindCSS: "I recently learned Tailwind CSS, my first CSS framework, and I intend to leverage this skill in my future projects.",
  nextjs: "I recently learned Next JS, my first CSS framework, and I intend to leverage this skill in my future projects.",
  mysql: "I implemented a movie ticket booking system using Python-SQL connectivity, performing CRUD operations.",
  node: "I utilized Node.js in the development of portfolio website,for storing user feedback in MongoDB, managing a mailing list, and sending emails.",
  "c++":
    "In the creation of a Google Maps clone, I employed C++ to integrate the OpenStreetMap API, implement algorithms such as Dijkstra's and A* for pathfinding, and address memory leaks with Valgrind.",
  c: "For the development of a 2D game clone on the DE1-SoC board, I utilized C to recreate the game, implementing pixel buffers for off-screen rendering, incorporating 2D sprites for game levels.",
  python:
    "I employed Python for both a movie ticket booking application, incorporating GUI and backend functionalities with Python-SQL connectivity, and a machine learning project, where I built a U-Net-based cGAN using PyTorch, Numpy, and CUDA cores for efficient data processing.",
  matlab:
    "I employed MATLAB for diverse engineering labs and a specific project modeling Messi's free kick against Liverpool in the UCL 2019, demonstrating its versatile application in both academic and practical engineering contexts.",
  webpack: "Module bundler I use for all my web development projects",
  verilog:
    "I employed Verilog to design a simple processor based on the ARM instruction set, showcasing its versatility in addition to its use in various other engineering labs.",
  git: "I used github as version control software to store my code and work in teams with other developers",
};

function displayNextPage(currentSkill: SkillName, forward = true): string {
  let currentIndex = SkillsList.indexOf(currentSkill);

  currentIndex = forward ? currentIndex + 1 : currentIndex - 1;

  if (currentIndex === SkillsList.length) currentIndex = 0;
  if (currentIndex === -1) currentIndex = SkillsList.length - 1;

  return `../about/${SkillsList[currentIndex]}`;
}

const Aboutskill: React.FC = () => {
  const navigate = useNavigate();
  const { SkillName } = useParams<RouteParams>();

  const isSkillName = (value: string): value is SkillName =>
  Object.prototype.hasOwnProperty.call(SkillDescription, value);

  const skill: SkillName =
  SkillName && isSkillName(SkillName) ? SkillName : "html";

  const iconFile = `${skill}icon.png`;
  const iconSrc = icons[iconFile];

  return (
    <>
      <div className="return" onClick={() => navigate("../..")}>
        Return
      </div>

      <div className="about--positioner">
        <div className="about__right" onClick={() => navigate(displayNextPage(skill, false))}>
          <BsFillArrowLeftSquareFill size={56} />
        </div>

        <div className="about__card">
          <div className="about__icon">
            <img className="about__icon--size" src={iconSrc} alt={skill} />
          </div>

          <div className="about__information">
            <div className="about__header">{skill}</div>
            <div className="about__content">{SkillDescription[skill]}</div>
          </div>
        </div>

        <div className="about__left" onClick={() => navigate(displayNextPage(skill, true))}>
          <BsFillArrowRightSquareFill size={56} />
        </div>
      </div>
    </>
  );
};

export default Aboutskill;