import React, { useEffect, useState } from "react";
import "./hero.css";

import Lottie from "lottie-react";
import animationData from "../../../assets/lottieLaptop.json";

import linkedinIcon from "../../../assets/linkedinicon.png";
import githubIcon from "../../../assets/githubicon.png";
import emailIcon from "../../../assets/emailicon.png";

import { Link } from "react-router-dom";
import type { TypewriterProps } from "./hero.types";

function Typewriter({ text, speed = 250, pause = 800 }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    let timeoutId: number | undefined;

    const tick = () => {
      setDisplayedText(text.slice(0, i + 1));
      i += 1;

      if (i < text.length) {
        timeoutId = window.setTimeout(tick, speed);
      } else {
        timeoutId = window.setTimeout(() => {
          i = 0;
          setDisplayedText("");
          tick();
        }, pause);
      }
    };

    tick();

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [text, speed, pause]);

  return <span className="header__emphasis">{displayedText}</span>;
}

const Hero: React.FC = () => {
  return (
    <div className="hero hero-slider" id="home">
      <div className="hero__content">
        <div className="hero__header hero__header--font">
          Hi, I&apos;m <Typewriter text="Gurjashan." speed={250} />
        </div>

        <div className="hero__text hero__text--font">
          Welcome to my creative corner! I&apos;m a passionate software developer crafting immersive
          experiences that resonate and inspire.
        </div>

        <div className="hero__items">
          <Link to="resume" className="resumeButton">
            Résumé
          </Link>

          <div className="hero__socials">
            <a
              href="https://www.linkedin.com/in/gurjashan-singh-b45a88293"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinIcon} className="hero__socials__icon" alt="LinkedIn" />
            </a>

            <a href="#contactmeform">
              <img src={emailIcon} className="hero__socials__icon" alt="Email" />
            </a>

            <a href="https://github.com/jashan04-s" target="_blank" rel="noreferrer">
              <img src={githubIcon} className="hero__socials__icon" alt="GitHub" />
            </a>
          </div>
        </div>
      </div>

      <div className="hero__animation">
        <Lottie animationData={animationData} style={{ width: 700 }} />
      </div>
    </div>
  );
};

export default Hero;