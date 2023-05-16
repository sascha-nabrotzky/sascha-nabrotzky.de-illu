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
        <h2 className="mb-4">Vieles digital, alles andere aber am Liebsten handgemacht</h2>
        <p>Hauptsächlich erstelle ich viele Illustrationen für Kinder, aber auch für den Editorial-Bereich habe ich schon einige Sachen gemacht.</p>
        <p>Grundsätzlich versuche ich den handgemachten, skizzenhaften Look meiner Illustrationen herauszuarbeiten, wenn ich digital arbeite oder erstelle meine diese direkt mit Aquarellstiften und Wasserfarben.</p>
        <p>Der Reiz der Wasserfarben liegt darin, dass man diese nicht immer so kontrollieren kann und immer etwas unvorhergesehnes passiert.</p>
      </div>
      <div className="md:col-start-3 md:col-span-2 h-96 md:h-72 lg:h-80 xl:h-[30rem] 2xl:h-[38rem]">
        <Carousel>
          <img
            src={image1}
            alt="Illustration Alebrije"
          />
          <img
            src={image2}
            alt="Illustration Tiere"
          />
          <img
            src={image3}
            alt="Illustration Artenvielfalt"
          />
          <img
            src={image4}
            alt="Illustration Hund"
          />
          <img
            src={image5}
            alt="Illustration Neantertalerjunge"
          />
          <img
            src={image6}
            alt="Illustration Morla"
          />
        </Carousel>
      </div>
    </>
  );
}

export default Illustration;
