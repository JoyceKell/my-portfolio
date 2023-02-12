import React, { useState } from "react";
import "./Carrousel.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import chamadosImg from "../../assets/chamados.png";
import filmariaImg from "../../assets/filmaria.png";
import advicePng from "../../assets/advice.png";
import final from "../../assets/final.png";

const Projects = () => {
  const projects = [
    {
      title: "Sistema de chamados",
      description:
        "Sistema criado a fim de colocar em prática meus aprendizados. Utilizei firebase além de fazer deploy na Vercel.",
      image: chamadosImg,
      link: "https://react-js-do-zero-ao-avancado-na-pratica-8lk7.vercel.app/",
      github:
        "https://github.com/JoyceKell/ReactJs-do-zero-ao-avancado-na-pratica/tree/master/sistema-de-chamados",
      button: "ver projeto no github",
    },
    {
      title: "Filmaria",
      description:
        "Um projeto onde você pode visualizar alguns filmes, adicionar como favorito e(ou) ser redirecionado para os seus respectivos trailers, deploy realizado na netlify.",
      image: filmariaImg,
      link: "https://filmaria-projeto.netlify.app/",
      github:
        "https://github.com/JoyceKell/ReactJs-do-zero-ao-avancado-na-pratica/tree/master/filmaria",
      button: "ver projeto no github",
    },
    {
      title: "Advices",
      description:
        "Nesse projeto eu estava aprendendo a criar um dark-theme utilizando tailwind. O Sistema é básico, cosiste em clicar no botão e receber um conselho randomicamente.",
      image: advicePng,
      link: "https://advices-psi.vercel.app/",
      github: "https://github.com/JoyceKell/advices",
      button: "ver projeto no github",
    },
    {
      title: "E por enquanto é isso!",
      description:
        "Ainda não possuo muitos projetos, mas espero alimentar esse portfólio logo, logo. As vezes é dificil conciliar trabalho e faculdade, mas não devemos nos esquecer de sempre procurar um tempinho para aprender mais :)",
      image: final,
      link: "",
      github:
        "https://www.youtube.com/watch?v=rqS2vFuU6SE&ab_channel=InternationalCat",
      button: "ver vídeo de gatinhos fofos",
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
