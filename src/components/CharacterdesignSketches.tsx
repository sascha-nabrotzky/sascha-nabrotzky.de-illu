import React from "react";
import SketchesLayout from "../components/SketchesLayout";

const imgs = [
  {
    figcaption: "",
    src: "https://placehold.co/400x600",
    alt: "Placeholder",
  },
  {
    figcaption: "",
    src: "https://placehold.co/400x600",
    alt: "Placeholder",
  },
  {
    figcaption: "",
    src: "https://placehold.co/400x600",
    alt: "Placeholder",
  },
];

function characterDesignSketches() {
  return <SketchesLayout title="Skizzen" imgs={imgs} />;
}

export default characterDesignSketches;
