import React from "react";
import SketchesLayout from "../components/SketchesLayout";
import Sketch1 from "../assets/images/Skizze1.webp";
import Sketch2 from "../assets/images/Skizze2.webp";
import Sketch3 from "../assets/images/Skizze3.webp";

const imgs = [
  {
    figcaption: "",
    src: Sketch1,
    alt: "Skizze eines Hasen mit einem Eichhörnchen auf dem Kopf",
  },
  {
    figcaption: "",
    src: Sketch3,
    alt: "Skizze eines Bären der seinen Schattne umarmt",
  },
  {
    figcaption: "",
    src: Sketch2,
    alt: "Skizze eines Eichhörnchens",
  },
];

function characterDesignSketches() {
  return (
    <SketchesLayout
      title="Skizzen für verschiedene Interaktionen"
      imgs={imgs}
    />
  );
}

export default characterDesignSketches;
