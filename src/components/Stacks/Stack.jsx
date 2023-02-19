import React from "react";
import "./stack.css";
import { DiReact, DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const Stack = () => {
  const { t } = useTranslation();

  return (
    <div className="home section-background stack-link">
      <div className="stack">
        <h3 className="stack-title">{t("Stack")}</h3>
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
        <p>{t("Stack text 1")}</p>
        <p>
          {t("In My")} <a href="https://github.com/JoyceKell">Github</a>{" "}
          {t("Stack text 2")}
        </p>
      </div>
    </div>
  );
};

export default Stack;
