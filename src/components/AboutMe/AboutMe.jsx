import React from "react";
import './AboutMe.css'
const AboutMe = () => {
  return (
    <section className="AboutMe">
      <h2>Sobre mim</h2>
      <p>
        Entre em contato comigo pelo meu
        <a href="https://linkedin.com/in/seu-perfil-no-linkedin"> LinkedIn</a>{" "}
        ou envie-me um email para{" "}
        <a href="mailto:seu-email-pessoal@email.com">seu-email-pessoal@email.com</a>
      </p>
    </section>
  );
};

export default AboutMe;