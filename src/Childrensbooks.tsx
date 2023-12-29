import React from "react";
import MainLayout from "./components/MainLayout";
import Highlights from "./components/Highlights";
import Book4 from "../src/assets/images/Book4.webp";
import SpreadEating from "../src/assets/images/SpreadpageEating.webp";
import SpreadBlowing from "../src/assets/images/SpreadpageBlowing.webp";
import SpreadWiese from "../src/assets/images/SpreadpageWiese.webp";
import SpreadForest from "../src/assets/images/SpreadpageForest.webp";
import SpreadShadow1 from "../src/assets/images/SpreadpageShadow1.webp";
import SpreadShadow2 from "../src/assets/images/SpreadpageShadow2.webp";

const imgsBook1 = [
  {
    figcaption: "Doppelseite meines ersten Kinderbuches",
    src: SpreadWiese,
    alt: "Doppelseite meines ersten Kinderbuches 1a",
  },
  {
    figcaption: "Doppelseite meines ersten Kinderbuches",
    src: SpreadForest,
    alt: "Doppelseite meines ersten Kinderbuches 1b",
  },
];

const imgsBook2 = [
  {
    figcaption: "Doppelseite meines zweiten Kinderbuches",
    src: SpreadEating,
    alt: "Doppelseite meines zweiten Kinderbuches 2a",
  },
  {
    figcaption: "Doppelseite meines zweiten Kinderbuches",
    src: SpreadBlowing,
    alt: "Doppelseite meines zweiten Kinderbuches 2b",
  },
];

const imgsBook3 = [
  {
    figcaption: "Doppelseite meines dritten Kinderbuches",
    src: SpreadShadow1,
    alt: "Doppelseite meines dritten Kinderbuches 3a",
  },
  {
    figcaption: "Doppelseite meines dritten Kinderbuches",
    src: SpreadShadow2,
    alt: "Doppelseite meines dritten Kinderbuches 3b",
  },
];

function Childrensbooks() {
  return (
    <MainLayout>
      <div className="md:col-start-2 md:col-span-1 max-md:px-4 text-lg tracking-wider">
        <h1 className="mb-4 uppercase tracking-widest text-2xl font-bold">
          Aus einer kleinen Idee ...
        </h1>
        <p className="font-serif">
          entstand ein Großprojekt und jetzt sind schon drei Kinderbücher von
          mir privat illustriert worden. Am Anfang stand das{" "}
          <strong>Characterdesign </strong>
          der Hauptfiguren und ein <strong>Farbschema</strong> wurde
          ausgearbeitet. Die <strong>Skizzen </strong>
          wurden eingescannt und digital weiterverarbeitet, um Farben und
          Hintergründe besser anpassen zu können.
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
      <Highlights cols={2} imgs={imgsBook3} title="Das dunkle Etwas" />
      <div className="md:col-start-3 md:col-span-1 max-md:px-4 text-lg tracking-wider">
        <h2 className="mb-4 uppercase tracking-widest text-2xl font-bold">
          Charakterdesign
        </h2>
        <p className="font-serif">
          Seit dem zweiten Kinderbuch habe ich gemerkt, wie sehr eine Geschichte
          von dem Storytelling und den Charakteren lebt, also habe ich für mein
          drittes Kinderbuch "Das dunkle Etwas" Kurse bei einem ehemaligen
          Disney-Animator durchgearbeitet und jede Menge Bücher durchgewälzt,
          damit das Charakterdesign sehr glaubhaft ist.
        </p>
      </div>
      <Highlights cols={2} imgs={imgsBook2} title="Die Puschelblüte" />
      <div className="md:col-start-2 md:col-span-1 max-md:px-4 text-lg tracking-wider">
        <h2 className="mb-4 uppercase tracking-widest text-2xl font-bold">
          Digitale Arbeitsweise
        </h2>
        <p className="font-serif">
          Wenn es darauf ankommt und speziell bei meinen Kinderbüchern arbeite
          ich von Anfang an digital, denn nur so kann ich leichter Korrekturen
          durchführen, wenn noch etwas auffallen sollte. Für den Druck der
          Bücher muss ich eh alles digital vorliegen haben und ich spare mir die
          Übertragung aus dem Analogen.
        </p>
      </div>
      <Highlights
        cols={2}
        imgs={imgsBook1}
        title="Wach auf, kleiner Bär, es ist Frühling!"
      />
    </MainLayout>
  );
}

export default Childrensbooks;
