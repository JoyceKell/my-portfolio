import React from "react";
import "./header.css";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../languageSelector/languageSelector";

export default function Header(props) {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="btn-group">
        <button onClick={() => props.scrollToSection("Introduction")}>
          {t("Home")}
        </button>

        <button onClick={() => props.scrollToSection("AboutMe")}>
          {t("About Me")}
        </button>
        <button onClick={() => props.scrollToSection("stack-link")}>
          {t("Stack")}
        </button>
        <button onClick={() => props.scrollToSection("Projects")}>
          {t("Projects")}
        </button>

        <LanguageSelector />
      </div>
    </header>
  );
}
