import React from "react";
import "./header.css";

export default function Header(props) {
  return (
    <header className="header">
      <div className="btn-group">
        <button onClick={() => props.scrollToSection("Introduction")}>
          Home
        </button>
        <button onClick={() => props.scrollToSection("AboutMe")}>
          Sobre mim
        </button>
        <button onClick={() => props.scrollToSection("stack-link")}>
          Stack
        </button>
        <button onClick={() => props.scrollToSection("Projects")}>
          Projetos
        </button>
      </div>
    </header>
  );
}
