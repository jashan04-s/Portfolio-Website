import React, { useEffect, useMemo, useRef, useState } from "react";
import "./projects.css";

import GoogleMapsClone from "../../../assets/projectimages/googlemapsclone.png";
import Kraya from "../../../assets/projectimages/kraya.png";
import PortfolioWebsite from "../../../assets/projectimages/portfoliowebsite.png";
import DE1SoCGame from "../../../assets/projectimages/DE1SoCGame.png";
import ColorizeImagesAI from "../../../assets/projectimages/ColorizeImagesAI.png";
import Grafana from "../../../assets/projectimages/Grafana.png";
import NEO from "../../../assets/projectimages/NEO.png";

import type { Project } from "./projects.types";

const projects: Project[] = [
    {
    name: "Home DevLab & AI Malware Detection",
    text:
      "Built a K3s Kubernetes cluster with Argo CD (GitOps-as-Code), deployed Prometheus + Grafana monitoring, and authored Ansible roles for reproducible setup. Created a secure VLAN lab  with remote teammate access via WireGuard and dashboards for CPU/memory throttling.",
    skills: "K3s, Kubernetes, Argo CD, Prometheus, Grafana, Ansible, eBPF, WireGuard",
    image: Grafana,
    urlCode: "https://github.com/jashan04-s/DevLab-Infra/tree/main/automation", // add link when ready
    urlDemo: "./error",
  },
  {
    name: "Colorizing Images with GAN",
    text:
    "Developed a U-Net-based cGAN using PyTorch to colorize grayscale images from the Kaggle dataset, incorporating recommended loss functions, utilizing CUDA cores, and optimizing with a pre-trained ResNet-34 as the encoder to address training time and GPU memory constraints.",
    skills: "Python, PyTorch, Numpy",
    image: ColorizeImagesAI,
    urlCode: "https://github.com/jashan04-s/APS360_Project",
    urlDemo: "https://autocolorization-aps360.streamlit.app",
  },
  {
    name: "Portfolio Website",
    text: "Crafted a sleek portfolio with React, Tyepscript, and CSS for user interaction.",
    skills: "React, CSS, TypeScript",
    image: PortfolioWebsite,
    urlCode: "https://github.com/jashan04-s/Portfolio-Website",
    urlDemo: "https://main.dravjozo4ipw2.amplifyapp.com",
  },
  {
    name: "N.E.O. — GPT Voice Assistant",
    text:
      "GPT-powered voice assistant with speech I/O and task-style interactions. Built to explore real-time UX and tool integrations.",
    skills: "OpenAI, Speech, Python",
    image: NEO,
    urlCode: "https://github.com/jashan04-s/N.E.O#",
    urlDemo: "./error",
  },
  {
    name: "Google Maps Clone",
    text:
      "Developed a feature-rich C++ Google Maps clone using OpenStreetMap API, applying Dijkstra's and A* algorithms, addressing memory leaks with Valgrind, and implementing multi-threading for a significant reduction in query time.",
    skills: "C++, Glade, Valgrind",
    image: GoogleMapsClone,
    urlCode: "./error",
    urlDemo: "./error",
  },
  {
    name: "Kraya",
    text:
      "Built a responsive landing page with HTML, CSS, and JavaScript, closely aligning with Figma designs and collaborating with a Git-based team.",
    skills: "HTML, CSS, JavaScript",
    image: Kraya,
    urlCode: "https://github.com/jashan04-s/kraya-website",
    urlDemo: "https://kraya-website.vercel.app/",
  },
  {
    name: "2D Game Clone on DE1-SoC Board",
    text:
      "Recreated a 2D game clone on the DE1-SoC board using C, implementing pixel buffers for off-screen rendering, 2D sprites for game levels, and secure integration of PS2 keyboard inputs for user control.",
    skills: "C",
    image: DE1SoCGame,
    urlCode: "https://github.com/jashan04-s/ECE243-Final_Project",
    urlDemo: "./error",
  },
];

const clamp01 = (n: number) => Math.max(0, Math.min(1, n));

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [progress, setProgress] = useState(0); // 0 → 1 across the section

  const totalPanels = projects.length;

  const sectionHeightVh = useMemo(() => `${totalPanels * 80}vh`, [totalPanels]);

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportH = window.innerHeight * 0.8;
      const total = rect.height - viewportH;
      const scrolled = -rect.top; // becomes positive once you scroll into it
      const p = total > 0 ? scrolled / total : 0;

      setProgress(clamp01(p));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Translate track based on progress.
  // Track width is N panels, so we move from 0% to -(N-1)*100%
  const translateX = useMemo(() => {
    const maxShift = (totalPanels - 1) * 100;
    return `translate3d(-${progress * maxShift}vw, 0, 0)`;
  }, [progress, totalPanels]);

  const openLink = (url: string) => window.open(url, "_blank", "noopener,noreferrer");

  return (
    <section
      className="projects_takeover"
      id="projects"
      ref={sectionRef}
      style={{ height: sectionHeightVh }}
    >
      <div className="projects_sticky">

        <div className="projects_track" ref={trackRef} style={{ transform: translateX }}>
          {projects.map((p, idx) => (
            <article
              key={p.name}
              className="project_panel"
              style={{ backgroundImage: `url(${p.image})` }}
            >
              <div className="project_overlay" />

              <div className="project_panelContent">
                <div className="project_kicker">
                  <span className="project_index">{idx + 1}</span>
                  <span className="project_total">/ {totalPanels}</span>
                </div>

                <h2 className="project_title">{p.name}</h2>

                <div className="project_meta">
                  <span className="project_metaLabel">Technologies:</span> {p.skills}
                </div>

                <p className="project_desc">{p.text}</p>

                <div className="project_actions">
                  {(p.urlCode !== "./error" && p.urlCode) && <button onClick={() => openLink(p.urlCode)}>Code</button>}
                  {(p.urlDemo !== "./error" && p.urlDemo) && <button onClick={() => openLink(p.urlDemo)}>Visit Website</button>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

  );
};

export default Projects;