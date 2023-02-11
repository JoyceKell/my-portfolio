import React, { useState } from "react";
import './Carrousel.css'
const Projects = () => {
  const projects = [
    { title: "Projeto 1", description: "Descrição do projeto 1" },
    { title: "Projeto 2", description: "Descrição do projeto 2" },
    { title: "Projeto 3", description: "Descrição do projeto 3" },
    { title: "Projeto 4", description: "Descrição do projeto 4" },
    { title: "Projeto 5", description: "Descrição do projeto 5" }
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
      <div className="Projects__Carousel">
        {projects.map((project, index) => {
          if (index === currentProject) {
            return (
              <div key={index} className="Project">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            );
          }
        })}
      </div>
      <button onClick={handlePrev} disabled={currentProject === 0}>
        Anterior
      </button>
      <button
        onClick={handleNext}
        disabled={currentProject === projects.length - 1}
      >
        Próximo
      </button>
    </section>
  );
};

export default Projects;
