import React from "react";
import Highlights from "./Highlights";

const imgs = [
  {
    figcaption: "sdfsdfaf asdffdsf",
    src: "https://placehold.co/400x600/333333/444444",
    alt: "sdasdf",
  },
  {
    figcaption: '"sdf sdfsd fs adfsd f',
    src: "https://placehold.co/400x600/333333/444444",
    alt: "asdfsdfgds",
  },
  {
    figcaption: "sd fs fdadsfksdh f",
    src: "https://placehold.co/400x600/333333/444444",
    alt: "asdfsdfsd",
  },
  {
    figcaption: '" asldfjldsj flkjöds',
    src: "https://placehold.co/400x600/333333/444444",
    alt: "asdsdfgdfsa",
  },
];

function ChildrensSketchbookIllustrations() {
  return (
    <Highlights cols={4} imgs={imgs} title="Highlights Kinderillustrationen" />
  );
}

export default ChildrensSketchbookIllustrations;
