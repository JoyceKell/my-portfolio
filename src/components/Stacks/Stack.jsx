import React from "react";
import "./stack.css";
import { DiReact, DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const Stack = () => {
  return (
    <div className="home">
      <div className="stack">
        <h3 className="stack-title">My Technology Stack</h3>
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
          Essas são as tecnologias que mais tenho contato, Há um tempo atrás,
          tive a oportunidade de ter contato com outras tecnologias como Ruby on
          Rails, Postgresql e Angular. Entretanto hoje me mantenho focada nessas
          tecnologias citadas ao lado.
        </p>
      </div>
    </div>
  );
};

export default Stack;
