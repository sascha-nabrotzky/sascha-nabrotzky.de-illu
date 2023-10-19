import React from "react";
import Highlights from "./Highlights";
import illuBilligfleisch from "../assets/images/Billigfleisch_400x600.webp";
import illuDreams from "../assets/images/Dreams_400x600.webp";
import illuArtenvielfalt from "../assets/images/Artenvielfalt.webp";
import illuKatzenHunde from "../assets/images/KatzenHunde_400x600.webp";

const imgs = [
  {
    figcaption: "Artenvielfalt (Coverillustration eines Magazins)",
    src: illuArtenvielfalt,
    alt: "Artenvielfalt",
  },
  {
    figcaption: '"Billigfleisch" (Wettbewerb Greenpeace)',
    src: illuBilligfleisch,
    alt: "Billigfleisch",
  },
  {
    figcaption: "Dreams (Illustration aus einer Skizze)",
    src: illuDreams,
    alt: "Dreams",
  },
  {
    figcaption: '"Es regnet Katzen und Hunde" (Wettbewerb Rheinwerkverlag)',
    src: illuKatzenHunde,
    alt: "Es regnet Katzen und Hunde",
  },
];

function DigitalIllustrations() {
  return (
    <Highlights
      cols={4}
      imgs={imgs}
      title="Highlights Editorial-Illustrationen"
    />
  );
}

export default DigitalIllustrations;
