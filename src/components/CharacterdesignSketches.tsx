import React from "react";
import SketchesLayout from "../components/SketchesLayout";
import Sketch1 from "../assets/images/Skizze1.webp";
import Sketch2 from "../assets/images/Skizze2.webp";
import Sketch3 from "../assets/images/Skizze3.webp";

const imgs = [
  {
    figcaption: "",
    src: Sketch1,
    alt: "Placeholder",
  },
  {
    figcaption: "",
    src: Sketch3,
    alt: "Placeholder",
  },
  {
    figcaption: "",
    src: Sketch2,
    alt: "Placeholder",
  },
];

function characterDesignSketches() {
  return <SketchesLayout title="Skizzen" imgs={imgs} />;
}

export default characterDesignSketches;
