import React from "react";
import { useTranslation } from "react-i18next";
import "./AboutMe.css";
const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <section className="AboutMe">
      <div className="contact">
        <div className="info">
          <h2>{t("About Me")}</h2>
          <p>{t("Intro")}</p>
        </div>
        <div>
          <img
            className="imagem"
            src={require("../../assets/girl1.jpg")}
            alt="background"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
