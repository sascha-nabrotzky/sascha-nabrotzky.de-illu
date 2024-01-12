import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  lng: "de",
  fallbackLng: "de",
  debug: false, // für Konsolenausgaben
  interpolation: {
    escapeValue: false,
  },
  resources: {
    de: {
      pages: {
        illustration: {
          title: "Charakterdesign & Illustration",
        },
      },
    },
    en: {
      pages: {
        illustration: {
          title: "Character design & illustration",
        },
      },
    },
  },
});

export default i18next;
