import React from "react";
import './introduction.css'

const Introduction = () => {
  return (
    <section className="Introduction">
      <div className="Introduction__Content">
        <h1>Seu nome</h1>
        <p>Seu cargo</p>
      </div>
      <img
        className="Introduction__Image"
        src="https://via.placeholder.com/150x150"
        alt="Sua imagem"
      />
    </section>
  );
};

export default Introduction;