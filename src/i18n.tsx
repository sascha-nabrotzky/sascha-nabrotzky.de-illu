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
                children: "Kinderbücher",
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
                    title: "Editorial-Illustrationen",
                    text1: "Ich bin Illustrator aus Ladbergen und habe mich mit meinem einzigartigen Stil mit Tinte, Stiften und Wasserfarbe auf die Erstellung von Illustrationen für Editorial und Kinderbücher spezialisiert.",

                    title2: "Stil",
                    text2: "Meine Editorial-Illustrationen sind meist dunkler und weniger farbenfroh gehalten, da das Thema meistens ernster ist.",

                    title_concept: "Konzept",
                    text_concept:
                        "Die Themen sind sehr vielfältig und reichen von politischen Themen, über Lifestyle bis hin zu Umweltthemen. Die Illustrationen werden entweder traditionell oder digital erstellt, je nach Anforderung oder Deadline.",
                },

                children: {
                    title1: "Illustrationen für Kinderbücher",
                    text1: "Wie meine Illustrationen für Editorial, haben auch meine Illustrationen für Kinderbücher einen eigenen handgemachten und bunteren Stil. Ich arbeite mit Stiften, Wasserfarbe und Tinte oder digital.",

                    title2: "Aus einer kleinen Idee ...",
                    text2a: "entstand ein großes Projekt und jetzt sind schon drei Kinderbücher von mir privat illustriert worden.",
                    text2b: "Für das vierte Buch, habe ich die drei vorherigen komplett überarbeitet und die verschiedenen Zeichenstile so gut es geht angeglichen. Alle Seiten enthalten doppleseitige Illustrationen.",

                    title3: "Storytelling",
                    text3: "Storytelling ist mir sehr wichtig, deshalb illustriere ich die Charaktere in verschiedenen Posen und setze sie dann in die gewünschte Umgebung. So ensteht eine Geschichte, die die Leser fesselt.",

                    title4: "Charakterdesign",
                    text4: "Geschichten leben ebenfalls von den Charakteren, deswegen lege ich besonders viel Wert auf die ausarbeitung von interessanten Figuren in meinen Geschichten.",

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
                    title: "Jahrelange Erfahrung",
                    text1a: "Als ausgebildeter Mediengestalter und aktuell als Webdesigner UI/UX, bin ich schon seit 1994 in der Medienbranche tätig.",
                    text1b: "Ich weiß was es heißt Deadlines einzuhalten und wie wichtig es ist, dass die Kunden zufrieden sind. Aufgrund meiner langjährigen Erfahrung, kann ich meine Kunden optimal beraten und unterstützen.",
                },
            },

            highlights: {
                editorialDigitalIllustrations_1: {
                    title: "Highlights III",
                    img1: "Thema Brexit",
                    img2: "Thema Handelskrieg",
                },

                editorialDigitalIllustrations_2: {
                    title: "Highlights I",
                    moth: "Motte",
                    space: "Weltraum",
                    giant: "Riese",
                    tree: "Baum",
                },

                editorialDigitalIllustrations_3: {
                    title: "Highlights IV",
                    plant: "Zimmerpflanze",
                    sword: "Schwert",
                    tower: "Turm",
                },

                editorialDigitalIllustrations_4: {
                    title: "Highlights II",
                    img1: "Vogel festgekettet",
                    img2: "Karte",
                    img3: "Katze frisst Maus",
                },

                childrensIllustrations: {
                    title: "Charaktere für kleine Kinder als Zielgruppe",
                    img1: '"Sei mutig" (Teil einer Illustrations-Serie für eine Kindertagespflege)',
                    img2: '"Sei frech" digitale Illustration',
                    img3: '"Sei entspannt" digitale Illustration für die Garderobe in einer Kita',
                    img4: '"Sei nett" digitale Illustration mit Motivationsspruch für jedes Kind',
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
                children: "Children's books",
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
                    text1: "I am an illustrator from Germany and have specialized in creating illustrations for editorial and children's books with my unique style using ink, pens and watercolor.",

                    title2: "Style",
                    text2: "My editorial illustrations are usually darker and less colorful, as the topic is usually more serious.",

                    title_concept: "Concept",
                    text_concept:
                        "The topics are very diverse and range from political topics, to lifestyle and environmental topics. The illustrations are created either traditionally or digitally, depending on the requirements or deadlines.",
                },

                children: {
                    title1: "Illustrations for children's books",
                    text1: "Like my illustrations for editorial, my illustrations for children's books have their own handmade style. I work with pens, watercolor and ink or digitally.",

                    title2: "From a small idea ...",
                    text2a: "a big project emerged and now three children's books have already been privately illustrated by me.",
                    text2b: "For the fourth book, I completely revised the previous three and tried to harmonize the different drawing styles as best as possible. All pages contain double-page illustrations.",

                    title3: "Storytelling",
                    text3: "Storytelling is very important to me, so I illustrate the characters in different poses and then place them in the desired environment. This creates a story that captivates the reader.",

                    title4: "Character design",
                    text4: "Stories also live from the characters, which is why I attach great importance to the development of interesting characters in my stories.",

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

                about: {
                    title: "Years of experience",
                    text1a: "As a trained media designer and currently as a web designer UI/UX, I have been working in the media industry since 1994.",
                    text1b: "I know what it means to meet deadlines and how important it is that customers are satisfied. Due to my many years of experience, I can optimally advise and support my customers.",
                },
            },

            highlights: {
                editorialDigitalIllustrations_1: {
                    title: "Highlights III",
                    img1: "Brexit topic",
                    img2: "Trade war topic",
                },

                editorialDigitalIllustrations_2: {
                    title: "Highlights I",
                    moth: "Moth",
                    space: "Space",
                    giant: "Giant",
                    tree: "Tree",
                },

                editorialDigitalIllustrations_3: {
                    title: "Highlights IV",
                    plant: "Houseplant",
                    sword: "Sword",
                    tower: "Tower",
                },

                editorialDigitalIllustrations_4: {
                    title: "Highlights II",
                    img1: "Bird chained up",
                    img2: "Map",
                    img3: "Cat eating mouse",
                },

                childrensIllustrations: {
                    title: "Characters for small children as a target group",
                    img1: '"Be brave" (part of an illustration series for a childminder)',
                    img2: '"Be cheeky" digital illustration',
                    img3: '"Be relaxed" digital illustration for the cloakroom in a daycare center',
                    img4: '"Be nice" digital illustration with a motivational saying for every child',
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
