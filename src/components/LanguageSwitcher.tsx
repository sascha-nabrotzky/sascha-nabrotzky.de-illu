import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const languages = [
    { lang: "de", label: "Deutsch" },
    { lang: "en", label: "English" },
  ];

  function handleLanguageChange(lang: string) {
    i18n.changeLanguage(lang);
    window.sessionStorage.setItem("lang", lang);
  }

  return (
    <select
      className="bg-pharlap-600 mt-8 px-4 py-2 text-white hover:bg-pharlap-800 transition-colors duration-200"
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
