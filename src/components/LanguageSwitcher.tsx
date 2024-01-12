import React, { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const languages = [
    { lang: "de", label: "Deutsch" },
    { lang: "en", label: "English" },
  ];

  const getLanguage = useCallback((): void => {
    const lang = window.sessionStorage.getItem("lang");
    if (lang) {
      i18n.changeLanguage(lang);
    } else {
      i18n.changeLanguage("de");
    }
  }, [i18n]);

  useEffect(() => {
    getLanguage();
  }, [getLanguage]);

  function handleLanguageChange(lang: string) {
    i18n.changeLanguage(lang);
    window.sessionStorage.setItem("lang", lang);
  }

  return (
    <select
      className="bg-pharlap-300 mt-8 px-4 py-2 hover:bg-pharlap-400 transition-colors duration-200"
      onChange={(event) => handleLanguageChange(event.target.value)}
      value={i18n.language}
    >
      {languages.map(({ lang, label }) => (
        <option key={lang} value={lang}>
          {label}
        </option>
      ))}
    </select>
  );
}

export default LanguageSwitcher;
