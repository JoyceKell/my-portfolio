import React from "react";
import './header.css'
const Header = (props) => {
  return (
    <header className="Header">
      <nav>
        <ul>
          <li>
            <button onClick={() => props.scrollToSection('Introduction')}>Introduction</button>
            <button onClick={() => props.scrollToSection('Projects')}>Projects</button>
            <button onClick={() => props.scrollToSection('AboutMe')}>footer</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;