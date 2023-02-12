import React from "react";
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="info">
        <h3>Hey, vamos fazer networking, venha falar comigo!</h3>
        <p>
          Você pode entrar em contato comigo através do meu{" "}
          <a href="https://www.linkedin.com/in/joyce-silva-3985951a3/">
            LinkedIn
          </a>{" "}
          ou até mesmo através do meu{" "}
          <a href="mailto:joyccekelly5.0@gmail.com">email. </a>
          Estou a disposição para criar conexões e fazer amizades nesse
          maravilhoso mundo dev :)
        </p>
        <p>Obrigado por visitar meu portfólio!</p>
      </div>
      <p>Copyright &copy; {year} Joyce Silva</p>
    </footer>
  );
};

export default Footer;
