import React from "react";
import Highlights from "./Highlights";
import illuBilligfleisch from "../assets/images/Billigfleisch_400x600.webp";
import illuDreams from "../assets/images/Dreams_400x600.webp";
import illuArtenvielfalt from "../assets/images/Artenvielfalt.webp";
import illuKatzenHunde from "../assets/images/KatzenHunde_400x600.webp";

const imgs = [
  {
    figcaption:
      'Magazin-Cover "Artenvielfalt" (Skizze mit Kugelschreiber, digital koloriert)',
    src: illuArtenvielfalt,
    alt: "Artenvielfalt",
  },
  {
    figcaption: 'Poster "Billigfleisch" (Wettbewerb Greenpeace)',
    src: illuBilligfleisch,
    alt: "Billigfleisch",
  },
  {
    figcaption: 'Poster "Dreams" (kleine Skizze, digital koloriert)',
    src: illuDreams,
    alt: "Dreams",
  },
  {
    figcaption:
      'Poster "Es regnet Katzen und Hunde" (Wettbewerb Rheinwerkverlag (unter den 10 besten)))',
    src: illuKatzenHunde,
    alt: "Es regnet Katzen und Hunde",
  },
];

function DigitalIllustrations() {
  return (
    <Highlights
      cols={4}
      imgs={imgs}
      title="Highlights Cover-/Poster-Illustrationen"
    />
  );
}

export default DigitalIllustrations;
