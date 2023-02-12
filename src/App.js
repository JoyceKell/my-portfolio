import React from "react";
import "./App.css";
import Carrousel from "./components/Carrousel/Carrousel";
import AboutMe from "./components/AboutMe/AboutMe";
import Introduction from "./components/Introduction/Introduction";
import Header from "./components/Header/Header";
import Stack from "./components/Stacks/Stack";
import Footer from "./components/Footer/Footer";

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
      <AboutMe />
      <Stack />
      <Carrousel />
      <Footer />
    </div>
  );
};

export default LandingPage;
