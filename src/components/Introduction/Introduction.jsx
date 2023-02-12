import React from "react";
import './introduction.css'
import DownloadButton from "../downloadButton/downloadButton";

const Introduction = () => {
  
  return (
    <section className="Introduction  section-background">
      <div className="Introduction__Content">
        <h1>Joyce Silva</h1>
        <p>Fullstack Web Developer</p>
        <DownloadButton file="../../assets/cv.pdf"/>
      </div>
    </section>
  );
};

export default Introduction;