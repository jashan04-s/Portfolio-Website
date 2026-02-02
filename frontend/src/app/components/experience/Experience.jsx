import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <div className="experience__header experience__header--font"> My Experience </div>
      <div className="experience__content experience__content--font role--primary">
        <div className="internship__info internship__info--left">
          <div className="internship__name"> Cloud RAN FV Intern</div>
          <div className="internship__company">@ Ericsson</div>
          <div className="internship__date"> October 2025 - Present (Part Time)</div>
        </div>
        <div className="internship__description">
          <div> <span className="description__bullet--style"> 1 </span>Driving productization of the tool: transitioning it from PoC to a funded, product-grade platform</div>
          <div> <span className="description__bullet--style"> 2 </span>Developed AI scheduling PoC, introduced TypeScript + Zod (frontend) and Marshmallow (backend) for stricter schema validation.</div>
          <div> <span className="description__bullet--style"> 3 </span> Responsible for the overall upkeep and stability of the tool, ensuring reliable deployments and continuous functionality, streamlined developer experience with bash scripts for common setup and maintenance tasks.</div>
        </div>
      </div>
      <div className="experience__content experience__content--font role--secondary">
        <div className="internship__description">
          <div>
            <span className="description__bullet--style"> 1 </span>Led frontend development of a MongoDB + Flask + React tool managing hardware resources, growing the user base from 200 to 800.
          </div>
          <div>
            <span className="description__bullet--style"> 2 </span>Introduced Vite and removed legacy packages, reducing build times drastically from 10 minutes to 3 minutes.
          </div>
          <div>
            <span className="description__bullet--style"> 3 </span>Unified UI with Ericsson Design System (EDS) and wrote React wrappers for third-party JS components; became a go-to contact across teams, advising on adoption and integration and helping connect the library with a Perl backend templating system.
          </div>
          <div>
            <span className="description__bullet--style"> 4 </span>Automated JSON-driven table and field configurations, reducing frontend codebase from 8000 to 3000 lines of code.
          </div>
          <div>
            <span className="description__bullet--style"> 5 </span>Managed Dockerized builds, NGINX configurations, SSL certificates, and Jenkins CI/CD pipelines for both staging and production environments.
          </div>
          <div>
            <span className="description__bullet--style"> 6 </span>Supported virtual DU test monitoring using JCAT logs, Moshell, Kubernetes CLI, and automated network data retrieval.
          </div>
        </div>
        <div className="internship__info  internship__info--right">
          <div className="internship__name"> Cloud RAN Integration Co-op</div>
          <div className="internship__company">@ Ericsson</div>
          <div className="internship__date"> May 2024 - September 2025 </div>
        </div>
      </div>
      <div className="experience__content experience__content--font role--primary">
        <div className="internship__info  internship__info--left">
          <div className="internship__name"> Web Developer </div>
          <div className="internship__company">@ Kraya</div>
          <div className="internship__date"> May 2023 - August 2023 </div>

        </div>
        <div className="internship__description">
          <div> <span className="description__bullet--style"> 1 </span> Developed and Maintained a responsive website using HTML, vanilla CSS and Javascript</div>
          <div> <span className="description__bullet--style"> 2 </span> Colaborated with the design team to implement user interface mockups and ensure pixel perfect implementations of Figma designs </div>
        </div>
      </div>
    </div>
  )
}

export default Experience