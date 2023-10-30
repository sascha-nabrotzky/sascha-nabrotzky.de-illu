import React from "react";
import Highlights from "./Highlights";
import seiMutig from "../assets/images/Sei_mutig.webp";
import seiNett from "../assets/images/Sei_nett.webp";
import seiFrech from "../assets/images/Sei_frech.webp";
import seiEntspannt from "../assets/images/Sei_entspannt.webp";

const imgs = [
  {
    figcaption:
      '"Sei mutig" (Teil einer Illustrations-Serie für eine Kindertagespflege)',
    src: seiMutig,
    alt: '"Sei mutig" (Teil einer Illustrations-Serie für eine Kindertagespflege)',
  },
  {
    figcaption: '"Sei frech" digitale Illustration',
    src: seiFrech,
    alt: '"Sei frech" digitale Illustration',
  },
  {
    figcaption:
      '"Sei entspannt" digitale Illustration für die Garderobe in einer Kita',
    src: seiEntspannt,
    alt: '"Sei entspannt" digitale Illustration für die Garderobe in einer Kita',
  },
  {
    figcaption:
      '"Sei nett" digitale Illustration mit Motivationsspruch für jedes Kind',
    src: seiNett,
    alt: '"Sei nett" digitale Illustration mit Motivationsspruch für jedes Kind',
  },
];

function ChildrensSketchbookIllustrations() {
  return (
    <Highlights cols={4} imgs={imgs} title="Highlights Kinder-Illustrationen" />
  );
}

export default ChildrensSketchbookIllustrations;
