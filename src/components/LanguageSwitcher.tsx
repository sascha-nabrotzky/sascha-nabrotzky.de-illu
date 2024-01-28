import React, { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageButton from "./LanguageButton";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const languages = [
    { lang: "de", label: "DE" },
    { lang: "en", label: "EN" },
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
    <>
      <div className="flex gap-2 mt-6 ml-4">
        {languages.map(({ lang, label }) => (
          <LanguageButton
            lang={lang}
            label={label}
            onClick={() => handleLanguageChange(lang)}
          />
        ))}
      </div>
    </>
  );
}

export default LanguageSwitcher;
