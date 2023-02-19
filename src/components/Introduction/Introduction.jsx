import React from "react";
import "./introduction.css";
import DownloadButton from "../downloadButton/downloadButton";

const Introduction = () => {
  return (
    <section className="Introduction  section-backgroundd">
      <div className="Introduction__Content">
        <h1>Joyce Silva</h1>
        <p>Fullstack Web Developer</p>
        <DownloadButton file="https://dl.dropboxusercontent.com/scl/fi/mcw9jy0090njxe5dg62pu/joyce-pt.docx?dl=0&rlkey=x9r2lrpf5phuywk47h5bg987f" />
      </div>
    </section>
  );
};

export default Introduction;
