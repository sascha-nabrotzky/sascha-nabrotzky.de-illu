import React from "react";
import Highlights from "./Highlights";

const imgs = [
  {
    figcaption: "Artenvielfalt (Coverillustration eines Magazins)",
    src: "https://placehold.co/400x600/333333/444444",
    alt: "Artenvielfalt",
  },
  {
    figcaption: '"Billigfleisch" (Wettbewerb Greenpeace)',
    src: "https://placehold.co/400x600/333333/444444",
    alt: "Billigfleisch",
  },
  {
    figcaption: "Dreams (Illustration aus einer Skizze)",
    src: "https://placehold.co/400x600/333333/444444",
    alt: "Dreams",
  },
  {
    figcaption: '"Es regnet Katzen und Hunde" (Wettbewerb Rheinwerkverlag)',
    src: "https://placehold.co/400x600/333333/444444",
    alt: "Es regnet Katzen und Hunde",
  },
];

function ChildrensSketchbookIllustrations() {
  return (
    <Highlights cols={4} imgs={imgs} title="Highlights Kinder-Illustrationen" />
  );
}

export default ChildrensSketchbookIllustrations;
