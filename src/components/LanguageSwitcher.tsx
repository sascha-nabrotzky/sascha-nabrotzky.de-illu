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
      <div className="max-sm:fixed max-sm:top-4 max-sm:right-4 flex w-[fit-content] gap-2 sm:mt-6 sm:ml-4 max-sm:p-1 bg-pharlap-100">
        {languages.map(({ lang, label }) => (
          <LanguageButton
            lang={lang}
            label={label}
            onClick={() => handleLanguageChange(lang)}
            key={lang}
          />
        ))}
      </div>
    </>
  );
}

export default LanguageSwitcher;
