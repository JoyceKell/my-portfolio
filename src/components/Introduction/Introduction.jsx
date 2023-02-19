import React from "react";
import "./introduction.css";
import DownloadButton from "../downloadButton/downloadButton";

const Introduction = () => {
  return (
    <section className="Introduction  section-backgroundd">
      <div className="Introduction__Content">
        <h1>Joyce Silva</h1>
        <p>Fullstack Web Developer</p>
        <DownloadButton file="https://dl.dropboxusercontent.com/s/lo9k84cfkb6u6z3/joyce-pt.docx.pdf?dl=0" />
      </div>
    </section>
  );
};

export default Introduction;
