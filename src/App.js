import React from "react";
import "./App.css";
import Carrousel from "./components/Carrousel/Carrousel";
import AboutMe from "./components/AboutMe/AboutMe";
import Introduction from "./components/Introduction/Introduction";
import Header from "./components/Header/Header";

const LandingPage = () => {
  const scrollToSection = (sectionClass) => {
    const section = document.querySelector(`.${sectionClass}`);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="LandingPage">
      <Header scrollToSection={scrollToSection} />
      <Introduction />
      <Carrousel />
      <AboutMe />
    </div>
  );
};

export default LandingPage;
