import React from "react";
import { Carousel } from "flowbite-react";
import image1 from "../src/assets/images/illuAlebrije.jpg";
import image2 from "../src/assets/images/illuAnimals.jpg";
import image3 from "../src/assets/images/IlluArten.jpg";
import image4 from "../src/assets/images/illuTheo.jpg";
import image5 from "../src/assets/images/illuNean.jpg";
import image6 from "../src/assets/images/illuMorla.jpg";

const Illustration = () => {
  return (
    <>
      <h1 className="absolute bottom-8 opacity-20 uppercase tracking-widest break-all font-serif text-8xl ml-8 md:ml-16 transition-filter duration-300 hover:blur">
        Illustration
      </h1>
      <div className="md:col-start-2 md:col-span-1 max-md:px-6 text-lg tracking-wider">
        <h2 className="mb-4">Vieles digital, alles andere aber am liebsten handgemacht</h2>
        <p>Ich erstelle Illustrationen sowohl im Bereich Kinderbuch als auch für den Bereich Editorial, wo ich eine Zeit lang für Bildagenturen kreativ werden durfte.</p>
        <p>Grundsätzlich versuche ich einen handgemachten, skizzenhaften Look in meinen digitalen Illustrationen herauszuarbeiten, oder arbeite direkt mit Aquarellstiften und Wasserfarben.</p>
        <p>Der Reiz der Wasserfarben liegt darin, dass man diese nicht immer so kontrollieren kann und immer etwas unvorhergesehnes passiert.</p>
      </div>
      <div className="md:col-start-3 md:col-span-2 h-96 md:h-72 lg:h-80 xl:h-[30rem] 2xl:h-[38rem]">
        <Carousel>
          <img
            src={image1}
            alt="Illustration Alebrije"
            loading="lazy"
          />
          <img
            src={image2}
            alt="Illustration Tiere"
            loading="lazy"
          />
          <img
            src={image3}
            alt="Illustration Artenvielfalt"
            loading="lazy"
          />
          <img
            src={image4}
            alt="Illustration Hund"
            loading="lazy"
          />
          <img
            src={image5}
            alt="Illustration Neantertalerjunge"
            loading="lazy"
          />
          <img
            src={image6}
            alt="Illustration Morla"
            loading="lazy"
          />
        </Carousel>
      </div>
    </>
  );
}

export default Illustration;
