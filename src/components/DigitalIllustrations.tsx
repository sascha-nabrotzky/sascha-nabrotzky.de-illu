import React from "react";
import illuBilligfleisch from "../assets/images/Billigfleisch_400x600.webp";
import illuDreams from "../assets/images/Dreams_400x600.webp";
import illuArtenvielfalt from "../assets/images/Artenvielfalt.webp";
import illuKatzenHunde from "../assets/images/KatzenHunde_400x600.webp";

const DigitalIllustrations = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 col-start-1 md:col-span-4 gap-4 p-4 bg-stone-700">
      <h3 className="text-2xl col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 mb-2">
        Highlights digitale Illustrationen
      </h3>
      <figure>
        <img
          src={illuArtenvielfalt}
          alt="Illustration Armut in USA"
          loading="lazy"
          className=""
        />
        <figcaption className="mt-2 text-xs">
          Artenvielfalt (Coverillustration eines Magazins)
        </figcaption>
      </figure>
      <figure>
        <img
          src={illuBilligfleisch}
          alt="Illustration Billigfleisch"
          loading="lazy"
          className=""
        />
        <figcaption className="mt-2 text-xs">
          "Billigfleisch" (Wettbewerb Greenpeace)
        </figcaption>
      </figure>
      <figure>
        <img
          src={illuDreams}
          alt="Illustration Dreams"
          loading="lazy"
          className=""
        />
        <figcaption className="mt-2 text-xs">
          Dreams (Illustration aus einer Skizze)
        </figcaption>
      </figure>
      <figure>
        <img
          src={illuKatzenHunde}
          alt="Illustration Es regnet Katzen und Hunde"
          loading="lazy"
          className=""
        />
        <figcaption className="mt-2 text-xs">
          "Es regnet Katzen und Hunde" (Wettbewerb Rheinwerkverlag)
        </figcaption>
      </figure>
    </section>
  );
};

export default DigitalIllustrations;