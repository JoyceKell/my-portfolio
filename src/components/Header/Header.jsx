import React from "react";
import "./header.css";

export default function Header(props) {
  return (
    <header className="header">
      <div className="btn-group">
        <button onClick={() => props.scrollToSection("Introduction")}>
          Introduction
        </button>
        <button onClick={() => props.scrollToSection("stack")}>Stack</button>
        <button onClick={() => props.scrollToSection("Projects")}>
          Projects
        </button>
        <button onClick={() => props.scrollToSection("AboutMe")}>footer</button>
      </div>
    </header>
  );
}
