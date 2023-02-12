import React from "react";
import "./AboutMe.css";
const AboutMe = () => {
  return (
    <section className="AboutMe">
      <div className="contact">
        <div className="info">
          <h2>Sobre mim</h2>
          <p>
            Olá, Me chamo Joyce, tenho 22 anos e sou uma desenvolvedora
            Fullstack. Atualmente trabalho apenas com Node.js, entretanto, tive
            a oportunidade de ter uma breve experiência como estagiária
            utilizando React, Angular e até mesmo Ruby on Rails (Algo meio fora
            da linha do Javascript, mas que foi uma experiência incrível!), além
            de já ter trabalhado um pouco com design e criação de e-mail
            marketing. Tenho conhecimento de alguns frameworks CSS como tailwind
            e bootstrap além de sempre estar estudando sobre atualizações e
            novas tecnologias. Além disso, sou fã das metodologias ágeis e
            embora meu foco seja desenvolvimento, gosto muito de estudar sobre
            SCRUM!
          </p>
        </div>
        <div>
          <img
            className="imagem"
            src="../../assets/girl1.jpg"
            alt="background"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
