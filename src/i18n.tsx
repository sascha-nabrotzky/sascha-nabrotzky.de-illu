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
        illustration: "Illustration",
        childrensBooks: "Kinderbücher",
        about: "Über mich",
      },
      footer: {
        instagram: "Zu meinem Instagram-Account",
        mail: "Schreib mir eine E-Mail",
        impressum: "Impressum",
        datenschutz: "Datenschutz",
      },
      pages: {
        illustration: {
          title: "Charakterdesign & Illustration",
          text1:
            "Ich bin Illustrator aus Ladbergen und habe mich mit meinem einzigartigen Stil mit Stiften, Wasserfarbe und Tinte auf die Erstellung von Charakteren für Websites, Kinderbücher und Editorial spezialisiert.",
          text2:
            "Auf dem Weg zum fertigen Buch illustriere ich die Charaktere zuerst in verschiedenen Posen, um sie dann in der gewünschten Umgebung zu platzieren. So entsteht eine Geschichte, die die Kinder in ihren Bann zieht.",
        },
        childrensBooks: {
          title1: "Aus einer kleinen Idee ...",
          text1a:
            "entstand ein Großprojekt und jetzt sind schon drei Kinderbücher von mir privat illustriert worden. Am Anfang stand das <strong>Characterdesign </strong> der Hauptfiguren und ein <strong>Farbschema</strong> wurde ausgearbeitet. Die <strong>Skizzen </strong> wurden eingescannt und digital weiterverarbeitet, um Farben und Hintergründe besser anpassen zu können.",
          text1b:
            "Für das vierte Buch, habe ich die drei vorherigen komplett überarbeitet und die verschiedenen Zeichenstile so gut es geht angeglichen. Alle Seiten enthalten doppleseitige Illustrationen.",

          title2: "Charakterdesign",
          text2:
            "Seit dem zweiten Kinderbuch habe ich gemerkt, wie sehr eine Geschichte von dem Storytelling und den Charakteren lebt, also habe ich für mein viertes Buch die Charaktere noch einmal komplett überarbeitet und die verschiedenen Zeichenstile so gut es geht angeglichen.",
          title3: "Digitale Arbeitsweise",
          text3:
            "Wenn es darauf ankommt und speziell bei meinen Kinderbüchern arbeite ich von Anfang an digital, denn nur so kann ich leichter Korrekturen durchführen, wenn noch etwas auffallen sollte. Für den Druck der Bücher muss ich eh alles digital vorliegen haben und ich spare mir die Übertragung aus dem Analogen.",
          book1: {
            title: "Wach auf, kleiner Bär, es ist Frühling!",
            img1: "Doppelseite meines ersten Kinderbuches",
            img2: "Doppelseite meines ersten Kinderbuches",
          },
          book2: {
            title: "Die Puschelblüte",
            img1: "Doppelseite meines zweiten Kinderbuches",
            img2: "Doppelseite meines zweiten Kinderbuches",
          },
          book3: {
            title: "Das dunkle Etwas",
            img1: "Doppelseite meines dritten Kinderbuches",
            img2: "Doppelseite meines dritten Kinderbuches",
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
        childrensIllustrations: {
          title: "Charaktere für kleine Kinder als Zielgruppe",
          img1: '"Sei mutig" (Teil einer Illustrations-Serie für eine Kindertagespflege)',
          img2: '"Sei frech" digitale Illustration',
          img3: '"Sei entspannt" digitale Illustration für die Garderobe in einer Kita',
          img4: '"Sei nett" digitale Illustration mit Motivationsspruch für jedes Kind',
        },
        digitalIllustrations: {
          title: "Charaktere in verschiedenen Illustrationen",
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
        illustration: "Illustration",
        childrensBooks: "Children's books",
        about: "About me",
      },
      footer: {
        instagram: "To my Instagram account",
        mail: "Write me an email",
        impressum: "Imprint",
        datenschutz: "Privacy policy",
      },
      pages: {
        illustration: {
          title: "Character design & illustration",
          text1:
            "I am an illustrator from Ladbergen and have specialized in creating characters for websites, children's books and editorial with my unique style with pens, watercolors and ink.",
          text2:
            "On the way to the finished book, I first illustrate the characters in different poses and then place them in the desired environment. This creates a story that captivates the children.",
        },
        childrensBooks: {
          title1: "From a small idea ...",
          text1a:
            "a major project emerged and now three children's books have already been illustrated by me privately. At the beginning there was the <strong>character design</strong> of the main characters and a <strong>color scheme</strong> was developed. The <strong>sketches</strong> were scanned and digitally processed in order to be able to better adapt colors and backgrounds.",
          text1b:
            "For the fourth book, I completely revised the previous three and tried to match the different drawing styles as well as possible. All pages contain double-page illustrations.",

          title2: "Character design",
          text2:
            "Since the second children's book, I have noticed how much a story lives from the storytelling and the characters, so for my fourth book I completely revised the characters again and tried to match the different drawing styles as well as possible.",
          title3: "Digital workflow",
          text3:
            "When it matters and especially with my children's books, I work digitally from the start, because that's the only way I can make corrections more easily if something else should be noticed. For printing the books, I have to have everything digitally anyway and I save myself the transfer from analog.",
          book1: {
            title: "Wake up little bear, it's spring!",
            img1: "Double page of my first children's book",
            img2: "Double page of my first children's book",
          },
          book2: {
            title: "The fluffy flower",
            img1: "Double page of my second children's book",
            img2: "Double page of my second children's book",
          },
          book3: {
            title: "The dark something",
            img1: "Double page of my third children's book",
          },
        },
        about: {
          title: "Artistic creativity ...",
          text1a:
            "has always been very pronounced in me, which my teachers also noticed when they got their hands on my school books or workbooks.",
          text1b:
            "In addition to my main job as a web designer UI / UX, I also have illustration and the creation of characters for children's books as another passion, which I pursue as a hobby and balance to everyday life.",
        },
      },
      highlights: {
        childrensIllustrations: {
          title: "Characters for small children as a target group",
          img1: "Be brave (part of an illustration series for a childcare center)",
          img2: "Be cheeky digital illustration",
          img3: "Be relaxed digital illustration for the cloakroom in a daycare center",
          img4: "Be nice digital illustration with motivational saying for each child",
        },
        digitalIllustrations: {
          title: "Characters in different illustrations",
          img1: 'Magazine cover "Biodiversity" (sketch with ballpoint pen digitally colored)',
          img2: 'Poster "Cheap meat" (Greenpeace competition)',
          img3: 'Poster "Dreams" (small sketch digitally colored)',
          img4: 'Poster "It\'s raining cats and dogs" (watercolor and digitally assembled)',
        },
      },
      sketches: {
        interactions: {
          title: "Sketches for different interactions",
          img1: "Sketch of a rabbit with a squirrel on its head",
          img2: "Sketch of a bear hugging its shadow",
          img3: "Sketch of a squirrel",
        },
      },
    },
  },
});

export default i18next;
