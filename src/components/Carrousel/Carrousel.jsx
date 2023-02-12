import React, { useState } from "react";
import "./Carrousel.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Projects = () => {
  const projects = [
    { title: "Projeto 1", description: "Descrição do projeto 1" },
    { title: "Projeto 2", description: "Descrição do projeto 2" },
    { title: "Projeto 3", description: "Descrição do projeto 3" },
    { title: "Projeto 4", description: "Descrição do projeto 4" },
    { title: "Projeto 5", description: "Descrição do projeto 5" },
  ];

  const [currentProject, setCurrentProject] = useState(0);

  const handlePrev = () => {
    setCurrentProject(currentProject - 1);
  };

  const handleNext = () => {
    setCurrentProject(currentProject + 1);
  };

  return (
    <section className="Projects">
      <h2>Projetos</h2>
      <div className="carrousel-orientation">
        <button
          className="button-carrousel"
          onClick={handlePrev}
          disabled={currentProject === 0}
        >
          <AiOutlineArrowLeft fontSize={50} />
        </button>
        <div className="Projects__Carousel">
          <div key={currentProject} className="Project">
            <h3>{projects[currentProject].title}</h3>
            <p>{projects[currentProject].description}</p>
          </div>
        </div>
        <button
          className="button-carrousel"
          onClick={handleNext}
          disabled={currentProject === projects.length - 1}
        >
          <AiOutlineArrowRight fontSize={50} />
        </button>
      </div>
    </section>
  );
};

export default Projects;
