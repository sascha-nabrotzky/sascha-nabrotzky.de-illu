import React from "react";
import Highlights from "./Highlights";
import illuBilligfleisch from "../assets/images/Billigfleisch_400x600.webp";
import illuDreams from "../assets/images/Dreams_400x600.webp";
import illuArtenvielfalt from "../assets/images/Artenvielfalt.webp";
import illuKatzenHunde from "../assets/images/KatzenHunde_400x600.webp";

const imgs = [
  {
    figcaption:
      'Magazin-Cover "Artenvielfalt" (Skizze mit Kugelschreiber digital koloriert)',
    src: illuArtenvielfalt,
    alt: 'Magazin-Cover "Artenvielfalt" (Skizze mit Kugelschreiber digital koloriert)',
  },
  {
    figcaption: 'Poster "Billigfleisch" (Wettbewerb Greenpeace)',
    src: illuBilligfleisch,
    alt: 'Poster "Billigfleisch" (Wettbewerb Greenpeace)',
  },
  {
    figcaption: 'Poster "Dreams" (kleine Skizze digital koloriert)',
    src: illuDreams,
    alt: 'Poster "Dreams" (kleine Skizze digital koloriert)',
  },
  {
    figcaption:
      'Poster "Es regnet Katzen und Hunde" (Wasserfarbe und digital zusammengestellt)',
    src: illuKatzenHunde,
    alt: 'Poster "Es regnet Katzen und Hunde" (Wasserfarbe und digital zusammengestellt)',
  },
];

function DigitalIllustrations() {
  return (
    <Highlights
      cols={4}
      imgs={imgs}
      title="Charaktere in verschiedenen Illustrationen"
    />
  );
}

export default DigitalIllustrations;
