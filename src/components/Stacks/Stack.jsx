import React from "react";
import "./stack.css";
import { DiReact, DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const Stack = () => {
  return (
    <div className="home section-background stack-link">
      <div className="stack">
        <h3 className="stack-title">Principais Tecnologias</h3>
        <ul className="stack-list">
          <li className="stack-item">
            <DiReact size={50} className="image" />
            React
          </li>
          <li className="stack-item">
            <FaNodeJs size={50} className="image" />
            Node.js
          </li>
          <li className="stack-item">
            <AiFillGithub size={50} className="image" />
            Github
          </li>
          <li className="stack-item">
            <DiMongodb size={50} className="image" />
            MongoDB
          </li>
        </ul>
      </div>
      <div className="conteudo">
        <p>
          Essas são as minhas tecnologias favoritas e, consequentemente, as que
          mais tenho contato atualmente. seja através de estudos, seja através
          do trabalho.
        </p>
        <p>
          No meu <a href="https://github.com/JoyceKell">Github</a> você pode
          encontrar alguns projetos que fiz (no momento a maioria pessoais) e
          conhecer melhor sobre as tecnologias e funcionalidades que tive
          contato.
        </p>
      </div>
    </div>
  );
};

export default Stack;
