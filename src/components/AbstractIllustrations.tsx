import React from "react";
import illuSketchGeom from "../assets/images/Sketch2.webp";
import illuSketchFleck from "../assets/images/Sketch3.webp";
import illuSketchHouse from "../assets/images/Sketch4.webp";
import illuSketchBirds from "../assets/images/Sketch1.webp";

const SketchbookIllustrations = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 col-start-1 md:col-span-4 gap-4 p-4 bg-stone-700">
      <h3 className="text-2xl col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 mb-2">
        Highlights Illustrationen Sketchbook
      </h3>
      <figure>
        <img
          src={illuSketchGeom}
          alt="Illustration geometrische Statue"
          loading="lazy"
        />
        <figcaption className="mt-2 text-xs">
          Geometrische Illustration "Statue" 
        </figcaption>
      </figure>
      <figure>
        <img
          src={illuSketchFleck}
          alt="Illustration aus einem Fleck heraus"
          loading="lazy"
        />
        <figcaption className="mt-2 text-xs">
        Illustration aus einem Fleck heraus
        </figcaption>
      </figure>
      <figure>
        <img
          src={illuSketchHouse}
          alt="Illustration versch. Häuser"
          loading="lazy"
        />
        <figcaption className="mt-2 text-xs">
          Häuser in versch. Techniken
        </figcaption>
      </figure>
      <figure>
        <img
          src={illuSketchBirds}
          alt="Illustration Es regnet Katzen und Hunde"
          loading="lazy"
        />
        <figcaption className="mt-2 text-xs">
          Vögel in versch. Techniken
        </figcaption>
      </figure>
    </section>
  );
};

export default SketchbookIllustrations;
