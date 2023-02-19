import React from "react";
import "./introduction.css";
import DownloadButton from "../downloadButton/downloadButton";
import { useTranslation } from "react-i18next";
const Introduction = () => {
  const { t } = useTranslation();
  return (
    <section className="Introduction  section-backgroundd">
      <div className="Introduction__Content">
        <h1>Joyce Silva</h1>
        <p>{t("Fullstack Web Developer")}</p>
        <DownloadButton file="https://dl.dropboxusercontent.com/s/lo9k84cfkb6u6z3/joycept.pdf" />
      </div>
    </section>
  );
};
export default Introduction;
