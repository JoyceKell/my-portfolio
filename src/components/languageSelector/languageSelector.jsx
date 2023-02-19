import React from "react";
import { useTranslation } from "react-i18next";
import "./languageSelector.css";
const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div class="language-dropdown">
      <div className="btn-group">
        <button class="language-dropdown__button">{t("Language")}</button>
      </div>
      <ul class="language-dropdown__list">
        <li class="language-dropdown__item">
          <span
            onClick={() => changeLanguage("en")}
            class="language-dropdown__link"
          >
            English
          </span>
        </li>
        <li class="language-dropdown__item">
          <span
            onClick={() => changeLanguage("pt")}
            class="language-dropdown__link"
          >
            Português
          </span>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSelector;
