import React from "react";
import "./footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const year = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="info">
        <h3>{t("Networking")}</h3>
        <p>
          {t("Footer 1")}{" "}
          <a href="https://www.linkedin.com/in/joyce-silva-3985951a3/">
            LinkedIn
          </a>{" "}
          {t("Footer 2")} <a href="mailto:joyccekelly5.0@gmail.com">email. </a>
          {t("Footer 3")}
        </p>
        <p>{t("Thanks")}</p>
      </div>
      <p>Copyright &copy; {year} Joyce Silva</p>
    </footer>
  );
};

export default Footer;
