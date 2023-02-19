import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translation.json";
import translationPT from "./locales/pt/translation.json";

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  pt: {
    translation: translationPT,
  },
};

i18n
  .use(initReactI18next) // passa o i18n para o react-i18next.
  .init({
    resources,
    lng: "pt", // idioma padrão.
    fallbackLng: "en", // idioma a ser usado se um idioma não estiver disponível.
    interpolation: {
      escapeValue: false, // não precisa escapar os valores da tradução.
    },
  });

export default i18n;
