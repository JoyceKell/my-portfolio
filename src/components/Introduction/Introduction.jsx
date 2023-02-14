import React from "react";
import "./introduction.css";
import DownloadButton from "../downloadButton/downloadButton";

const Introduction = () => {
  return (
    <section className="Introduction  section-backgroundd">
      <div className="Introduction__Content">
        <h1>Joyce Silva</h1>
        <p>Fullstack Web Developer</p>
        <DownloadButton file="https://dl.dropboxusercontent.com/s/3o8dtlg5wuiq35o/curriculo-pt.pdf" />
      </div>
    </section>
  );
};

export default Introduction;
