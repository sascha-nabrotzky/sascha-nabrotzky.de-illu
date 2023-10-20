import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "./components/MainLayout";
import Highlights from "./components/Highlights";
import Book4 from "../src/assets/images/Book4.webp";
import SpreadEating from "../src/assets/images/SpreadpageEating.webp";
import SpreadBlowing from "../src/assets/images/SpreadpageBlowing.webp";
import SpreadWiese from "../src/assets/images/SpreadpageWiese.webp";
import SpreadForest from "../src/assets/images/SpreadpageForest.webp";
import socMedImg from "../src/assets/images/SocMedImg.jpg";

const imgsBook1 = [
  {
    figcaption: "Doppelseite meines zweiten Kinderbuches",
    src: SpreadWiese,
    alt: "Doppelseite meines zweiten Kinderbuches",
  },
  {
    figcaption: "Doppelseite meines zweiten Kinderbuches",
    src: SpreadForest,
    alt: "Doppelseite meines zweiten Kinderbuches",
  },
];

const imgsBook2 = [
  {
    figcaption: "Doppelseite meines ersten Kinderbuches",
    src: SpreadEating,
    alt: "Doppelseite meines ersten Kinderbuches",
  },
  {
    figcaption: "Doppelseite meines ersten Kinderbuches",
    src: SpreadBlowing,
    alt: "Doppelseite meines ersten Kinderbuches",
  },
];

function Childrensbooks() {
  return (
    <>
      <Helmet>
        <title>Sascha Nabrotzky | Kinderbücher</title>
        <meta
          name="description"
          content="Dies sind meine bisherigen illustrierten Kinderbücher."
        />
        <meta
          name="keywords"
          content="Illustration, Kinderbücher, Ladbergen, Münster, Osnabrück"
        />

        <meta
          property="og:url"
          content="http://www.sascha-nabrotzky.de/#/kinderbuecher"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sascha Nabrotzky | Kinderbücher" />
        <meta
          property="og:description"
          content="Illustrationen aus Ladbergen für Kinderbücher, die die Fantasie beflügeln oder zum Nachdenken anregen."
        />
        <meta property="og:image" content={socMedImg} />
        <meta property="og:image:width" content="651" />
        <meta property="og:image:height" content="400" />
        <meta property="og:image:type" content="image/jpeg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="sascha-nabrotzky.de" />
        <meta
          property="twitter:url"
          content="http://www.sascha-nabrotzky.de/#/kinderbuecher"
        />
        <meta name="twitter:title" content="Sascha Nabrotzky | Kinderbücher" />
        <meta
          name="twitter:description"
          content="Illustrationen aus Ladbergen für Kinderbücher, die die Fantasie beflügeln oder zum Nachdenken anregen."
        />
        <meta name="twitter:image" content={socMedImg} />
      </Helmet>

      <MainLayout>
        <div className="md:col-start-2 md:col-span-1 max-md:px-4 text-lg tracking-wider">
          <h1 className="uppercase tracking-widest text-2xl mb-4">
            Aus einer kleinen Idee entstand ein Großprojekt ...
          </h1>
          <p className="font-serif">
            und jetzt sind schon drei Kinderbücher von mir privat illustriert
            worden. Am Anfang stand das Characterdesign der Hauptfiguren und ein
            Farbschema wurde ausgearbeitet. Die Skizzen wurden eingescannt und
            digital weiterverarbeitet, um Farben und Hintergründe besser
            anpassen zu können.
          </p>
          <p className="font-serif">
            Für das vierte Buch, habe ich die drei vorherigen komplett
            überarbeitet und die verschiedenen Zeichenstile so gut es geht
            angeglichen. Alle Seiten enthalten doppleseitige Illustrationen.
          </p>
        </div>
        <div className="md:col-start-3 md:col-span-1">
          <div className="flex justify-center">
            <img
              src={Book4}
              alt="Cover meines vierten Kinderbuches"
              loading="lazy"
            />
          </div>
        </div>

        <Highlights
          cols={2}
          imgs={imgsBook1}
          title="Wach auf, kleiner Bär, es ist Frühling!"
        />

        <div className="md:col-start-3 md:col-span-1 max-md:px-4 text-lg tracking-wider">
          <h2 className="uppercase tracking-widest text-2xl mb-4">
            Digitale Arbeitsweise
          </h2>
          <p className="font-serif">
            Wenn es darauf ankommt und speziell bei meinen Kinderbüchern arbeite
            ich von Anfang an digital, denn nur so kann ich leichter Korrekturen
            durchführen, wenn noch etwas auffallen sollte. Für den Druck der
            Bücher muss ich eh alles digital vorliegen haben und ich spare mir
            die Übertragung aus dem Analogen.
          </p>
        </div>

        <Highlights cols={2} imgs={imgsBook2} title="Die Puschelblüte" />
      </MainLayout>
    </>
  );
}

export default Childrensbooks;
