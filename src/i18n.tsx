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
                    text1: "Ich bin Illustrator aus Ladbergen und habe mich mit meinem einzigartigen Stil mit Stiften, Wasserfarbe und Tinte auf die Erstellung von handgemachten Illustrationen für Websites, Kinderbücher und Editorial spezialisiert.",

                    title2: "Aus einer kleinen Idee ...",
                    text2a: "entstand ein Großprojekt und jetzt sind schon drei Kinderbücher von mir privat illustriert worden. Am Anfang stand das <strong>Characterdesign </strong> der Hauptfiguren und ein <strong>Farbschema</strong> wurde ausgearbeitet.",
                    text2b: "Für das vierte Buch, habe ich die drei vorherigen komplett überarbeitet und die verschiedenen Zeichenstile so gut es geht angeglichen. Alle Seiten enthalten doppleseitige Illustrationen.",

                    title3: "Storytelling",
                    text3: "Storytelling ist mir sehr wichtig, deshalb illustriere ich die Charaktere in verschiedenen Posen und setze sie dann in die gewünschte Umgebung. So ensteht eine Geschichte, die die Leser fesselt.",

                    title4: "Charakterdesign",
                    text4: "Seit dem zweiten Kinderbuch habe ich gemerkt, wie sehr eine Geschichte von den Charakteren lebt, also habe ich für mein viertes Buch die Charaktere noch einmal komplett überarbeitet und die verschiedenen Zeichenstile so gut es geht angeglichen.",
                    title5: "Jugendliche und älter",
                    text5: "Für die nicht mehr ganz so jungen Leser, habe ich ebenfalls während verschiedener Projekte Illustrationen erstellt. Meistens lag der Fokus auf großformatige Printmedien.",

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
                    text1a: "war schon immer sehr ausgeprägt bei mir, das merkten auch meine Lehrer, wenn sie mal meine Schulbücher oder Arbeitshefte in die Finger bekamen.",
                    text1b: "Neben meinem Hauptjob als Webdesigner UI/UX, habe ich noch Illustration und das erstellen von Charakteren für Kinderbücher als weitere Leidenschaft, welche ich als Hobby und Ausgleich zum Alltag betreibe.",
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
                    text1: "Ich bin Illustrator aus Ladbergen und habe mich mit meinem einzigartigen Stil mit Stiften, Wasserfarbe und Tinte auf die Erstellung von handgemachten Illustrationen für Websites, Kinderbücher und Editorial spezialisiert.",

                    title2: "Aus einer kleinen Idee ...",
                    text2a: "entstand ein Großprojekt und jetzt sind schon drei Kinderbücher von mir privat illustriert worden. Am Anfang stand das <strong>Characterdesign </strong> der Hauptfiguren und ein <strong>Farbschema</strong> wurde ausgearbeitet.",
                    text2b: "Für das vierte Buch, habe ich die drei vorherigen komplett überarbeitet und die verschiedenen Zeichenstile so gut es geht angeglichen. Alle Seiten enthalten doppleseitige Illustrationen.",

                    title3: "Storytelling",
                    text3: "Storytelling ist mir sehr wichtig, deshalb illustriere ich die Charaktere in verschiedenen Posen und setze sie dann in die gewünschte Umgebung. So ensteht eine Geschichte, die die Leser fesselt.",

                    title4: "Charakterdesign",
                    text4: "Seit dem zweiten Kinderbuch habe ich gemerkt, wie sehr eine Geschichte von den Charakteren lebt, also habe ich für mein viertes Buch die Charaktere noch einmal komplett überarbeitet und die verschiedenen Zeichenstile so gut es geht angeglichen.",
                    title5: "Jugendliche und älter",
                    text5: "Für die nicht mehr ganz so jungen Leser, habe ich ebenfalls während verschiedener Projekte Illustrationen erstellt. Meistens lag der Fokus auf großformatige Printmedien.",

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
                    title: "Artistic creativity ...",
                    text1a: "has always been very pronounced in me, which my teachers also noticed when they got their hands on my school books or workbooks.",
                    text1b: "In addition to my main job as a web designer UI / UX, I also have illustration and the creation of characters for children's books as another passion, which I pursue as a hobby and balance to everyday life.",
                },
            },
            highlights: {
                childrensIllustrations: {
                    title: "Characters for small children as a target group",
                    img1: "'Be brave' (part of an illustration series for a childcare center)",
                    img2: "'Be cheeky', digital illustration",
                    img3: "'Be relaxed', digital illustration for the cloakroom in a daycare center",
                    img4: "'Be nice', digital illustration with motivational saying for each child",
                },
                digitalIllustrations: {
                    title: "Characters in different illustrations",
                    img1: "Magazine cover 'Biodiversity' (sketch with ballpoint pen digitally colored)",
                    img2: "Poster 'Cheap meat' (Greenpeace competition)",
                    img3: "Poster 'Dreams' (small sketch digitally colored)",
                    img4: "Poster 'It\\'s raining cats and dogs' (watercolor and digitally assembled)",
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
