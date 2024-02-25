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
      navigation: {
        editorial: "Editorial",
        children: "Kinder",
        about: "Über mich",
      },

      footer: {
        instagram: "Zu meinem Instagram-Account",
        mail: "Schreib mir eine E-Mail",
        impressum: "Impressum",
        datenschutz: "Datenschutz",
      },

      pages: {
        editorial: {
          title: "Editorial Illustrationen",
          text1: "Dieser Bereich befindet sich im Aufbau",
          title2: "Titel fehlt noch",
          text2: "Dieser Bereich befindet sich im Aufbau",
        },

        children: {
          title1: "Illustrationen für Editorial und Kinder",
          text1:
            "Ich bin Illustrator aus Ladbergen und habe mich mit meinem einzigartigen Stil mit Stiften, Wasserfarbe und Tinte auf die Erstellung von handgemachten Illustrationen für Websites, Kinderbücher und Editorial spezialisiert.",

          title2: "Aus einer kleinen Idee ...",
          text2a:
            "entstand ein Großprojekt und jetzt sind schon drei Kinderbücher von mir privat illustriert worden. Am Anfang stand das <strong>Characterdesign </strong> der Hauptfiguren und ein <strong>Farbschema</strong> wurde ausgearbeitet.",
          text2b:
            "Für das vierte Buch, habe ich die drei vorherigen komplett überarbeitet und die verschiedenen Zeichenstile so gut es geht angeglichen. Alle Seiten enthalten doppleseitige Illustrationen.",

          title3: "Storytelling",
          text3:
            "Storytelling ist mir sehr wichtig, deshalb illustriere ich die Charaktere in verschiedenen Posen und setze sie dann in die gewünschte Umgebung. So ensteht eine Geschichte, die die Leser fesselt.",

          title4: "Charakterdesign",
          text4:
            "Seit dem zweiten Kinderbuch habe ich gemerkt, wie sehr eine Geschichte von den Charakteren lebt, also habe ich für mein viertes Buch die Charaktere noch einmal komplett überarbeitet und die verschiedenen Zeichenstile so gut es geht angeglichen.",

          title5: "Jugendliche und älter",
          text5:
            "Für die nicht mehr ganz so jungen Leser, habe ich ebenfalls während verschiedener Projekte Illustrationen erstellt. Meistens lag der Fokus auf großformatige Printmedien.",

          book1: {
            title: "Wach auf, kleiner Bär, es ist Frühling!",
            img1: "Der kleine Bär entdeckt den Löwenzahn (Doppelseite)",
            img2: "Im dunklen Wald (Doppelseite)",
          },

          book2: {
            title: "Die Puschelblüte",
            img1: "Der kleine Bär und seine Mutter beim Kekseessen (Doppelseite)",
            img2: "Der kleine Bär bläst kräftig auf den Löwenzahn (Doppelseite)",
          },

          book3: {
            title: "Das dunkle Etwas",
            img1: "Der eigene Schatten ist nicht so schlimm (Doppelseite)",
            img2: "Mutter Bär zeigt was der Schatten ist (Doppelseite)",
          },
        },

        about: {
          title: "Zeichnerische Kreativität ...",
          text1a:
            "war schon immer sehr ausgeprägt bei mir, das merkten auch meine Lehrer, wenn sie mal meine Schulbücher oder Arbeitshefte in die Finger bekamen.",
          text1b:
            "Neben meinem Hauptjob als Webdesigner UI/UX, habe ich noch Illustration und das erstellen von Charakteren für Kinderbücher als weitere Leidenschaft, welche ich als Hobby und Ausgleich zum Alltag betreibe.",
        },
      },

      highlights: {
        editorialDigitalIllustrations_1: {
          title: "...",
          img1: "...",
          img2: "...",
        },

        editorialDigitalIllustrations_2: {
          title: "...",
          img1: "...",
          img2: "...",
        },

        childrensIllustrations: {
          title: "Charaktere für kleine Kinder als Zielgruppe",
          img1: '"Sei mutig" (Teil einer Illustrations-Serie für eine Kindertagespflege)',
          img2: '"Sei frech" digitale Illustration',
          img3: '"Sei entspannt" digitale Illustration für die Garderobe in einer Kita',
          img4: '"Sei nett" digitale Illustration mit Motivationsspruch für jedes Kind',
        },

        digitalIllustrations: {
          title: "Illustrationen für Printmedien",
          img1: 'Magazin-Cover "Artenvielfalt" (Skizze mit Kugelschreiber digital koloriert)',
          img2: 'Poster "Billigfleisch" (Wettbewerb Greenpeace)',
          img3: 'Poster "Dreams" (kleine Skizze digital koloriert)',
          img4: 'Poster "Es regnet Katzen und Hunde" (Wasserfarbe und digital zusammengestellt)',
        },
      },

      sketches: {
        interactions: {
          title: "Skizzen für verschiedene Interaktionen",
          img1: "Skizze eines Hasen mit einem Eichhörnchen auf dem Kopf",
          img2: "Skizze eines Bären der seinen Schattne umarmt",
          img3: "Skizze eines Eichhörnchens",
        },
      },
    },

    en: {
      navigation: {
        editorial: "Editorial",
        children: "Children",
        about: "About me",
      },

      footer: {
        instagram: "To my Instagram account",
        mail: "Write me an e-mail",
        impressum: "Imprint",
        datenschutz: "Privacy",
      },

      pages: {
        editorial: {
          title: "Editorial Illustrations",
          text1: "This area is under construction",

          title2: "Title is still missing",
          text2: "This area is under construction",
        },

        children: {
          title1: "Illustrations for editorial and children",
          text1:
            "I am an illustrator from Ladbergen and have specialized in creating handmade illustrations for websites, children's books and editorial with my unique style using pens, watercolor and ink.",

          title2: "From a small idea ...",
          text2a:
            "a large project emerged and now three children's books have already been privately illustrated by me. At the beginning there was the <strong>character design</strong> of the main characters and a <strong>color scheme</strong> was worked out.",
          text2b:
            "For the fourth book, I completely revised the previous three and tried to harmonize the different drawing styles as best as possible. All pages contain double-sided illustrations.",

          title3: "Storytelling",
          text3:
            "Storytelling is very important to me, so I illustrate the characters in different poses and then place them in the desired environment. This creates a story that captivates the reader.",

          title4: "Character design",
          text4:
            "Since the second children's book, I have noticed how much a story lives from the characters, so for my fourth book I completely revised the characters and tried to harmonize the different drawing styles as best as possible.",

          title5: "Adolescents and older",
          text5:
            "During various projects, I also created illustrations for the not so young readers. The focus was mostly on large-format print media.",

          book1: {
            title: "Wake up, little bear, it's spring!",
            img1: "The little bear discovers the dandelion (double page)",
            img2: "In the dark forest (double page)",
          },

          book2: {
            title: "The fluff flower",
            img1: "The little bear and his mother eating cookies (double page)",
            img2: "The little bear blows hard on the dandelion (double page)",
          },

          book3: {
            title: "The dark something",
            img1: "The own shadow is not so bad (double page)",
            img2: "Mother bear shows what the shadow is (double page)",
          },
        },
      },

      highlights: {
        editorialDigitalIllustrations_1: {
          title: "",
          img1: "",
          img2: "",
        },

        editorialDigitalIllustrations_2: {
          title: "",
          img1: "",
          img2: "",
        },

        childrensIllustrations: {
          title: "Characters for small children as a target group",
          img1: '"Be brave" (part of an illustration series for a childminder)',
          img2: '"Be cheeky" digital illustration',
          img3: '"Be relaxed" digital illustration for the cloakroom in a daycare center',
          img4: '"Be nice" digital illustration with a motivational saying for every child',
        },

        digitalIllustrations: {
          title: "Illustrations for print media",
          img1: 'Magazine cover "Biodiversity" (sketch with ballpoint pen digitally colored)',
          img2: 'Poster "Cheap meat" (Greenpeace competition)',
          img3: 'Poster "Dreams" (small sketch digitally colored)',
          img4: 'Poster "It\'s raining cats and dogs" (watercolor and digitally assembled)',
        },
      },

      sketches: {
        interactions: {
          title: "Sketches for various interactions",
          img1: "Sketch of a rabbit with a squirrel on its head",
          img2: "Sketch of a bear hugging its shadow",
          img3: "Sketch of a squirrel",
        },
      },
    },
  },
});

export default i18next;
