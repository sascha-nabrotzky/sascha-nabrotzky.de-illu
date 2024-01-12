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
          text1:
            "Ich bin Illustrator aus Ladbergen und habe mich mit meinem einzigartigen Stil mit Stiften, Wasserfarbe und Tinte auf die Erstellung von Charakteren für Websites, Kinderbücher und Editorial spezialisiert.",
        },
      },
    },
    en: {
      pages: {
        illustration: {
          title: "Character design & illustration",
          text1:
            "I am an illustrator from Ladbergen and have specialized in creating characters for websites, children's books and editorial with my unique style with pens, watercolors and ink.",
        },
      },
    },
  },
});

export default i18next;
