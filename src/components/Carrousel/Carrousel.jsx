import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import chamadosImg from "../../assets/chamados.png";
import filmariaImg from "../../assets/filmaria.png";
import advicePng from "../../assets/advice.png";
import jogoDaVelha from "../../assets/jogodavelha.png";
import final from "../../assets/final.png";
import toDo from "../../assets/todo.png";
import "./Carrousel.css";

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t("Ticket System"),
      description: t("Desc Ticket"),
      image: chamadosImg,
      link: "https://react-js-do-zero-ao-avancado-na-pratica-8lk7.vercel.app/",
      github:
        "https://github.com/JoyceKell/ReactJs-do-zero-ao-avancado-na-pratica/tree/master/sistema-de-chamados",
      button: t("Button Github"),
    },
    {
      title: t("To-Do List"),
      description: t("Desc To-do"),
      image: toDo,
      link: "https://todo-list-app-alpha-ashy.vercel.app/",
      github: "https://github.com/JoyceKell/todo-list-app",
      button: t("Button Github"),
    },
    {
      title: t("Movies"),
      description: t("Desc Movies"),
      image: filmariaImg,
      link: "https://filmaria-projeto.netlify.app/",
      github:
        "https://github.com/JoyceKell/ReactJs-do-zero-ao-avancado-na-pratica/tree/master/filmaria",
      button: t("Button Github"),
    },
    {
      title: t("Advices"),
      description: t("Desc Advices"),
      image: advicePng,
      link: "https://advices-psi.vercel.app/",
      github: "https://github.com/JoyceKell/advices",
      button: t("Button Github"),
    },
    {
      title: t("Tic-Tac-Toe"),
      description: t("Desc Tik Tak Toe"),
      image: jogoDaVelha,
      link: "https://jogo-da-velha-beta-eight.vercel.app/",
      github: "https://github.com/JoyceKell/jogo-da-velha",
      button: t("Button Github"),
    },
    {
      title: t("This"),
      description: t("Final Desc"),
      image: final,
      link: "",
      github:
        "https://www.youtube.com/watch?v=rqS2vFuU6SE&ab_channel=InternationalCat",
      button: t("Button Cat"),
    },
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
      <h2>{t("Projects")}</h2>
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
            <a
              target={"blank"}
              className="imagemm"
              href={
                projects[currentProject].link
                  ? projects[currentProject].link
                  : null
              }
            >
              <img src={projects[currentProject].image} />
            </a>
            <span>{projects[currentProject].description}</span>
            <a
              className="view-project"
              target={"blank"}
              href={projects[currentProject].github}
            >
              {projects[currentProject].button}
            </a>
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
