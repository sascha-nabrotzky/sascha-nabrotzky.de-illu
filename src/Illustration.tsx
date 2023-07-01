import React from "react";
import DigitalIllustrations from "./components/DigitalIllustrations";
import AbstractIllustrations from "./components/AbstractIllustrations";
import illuBiene from "../src/assets/images/Biene.webp";

const Illustration = () => {
  return (
    <>
      <section className="md:col-start-2 md:col-span-1 max-md:px-4 text-lg tracking-wider">
        <h1 className="uppercase tracking-widest text-2xl mb-4">
          Illustrationen aus Ladbergen, die die Fantasie beflügeln
        </h1>
        <p>
          Ich erstelle Illustrationen hauptsächlich im Bereich Kinderbuch, wo
          ich es immer spannend finde, Geschichten visuell und emotional zu
          erzählen.
        </p>
        <p>
          Am liebsten kombiniere ich Wasserfarben mit Aquarellstiften,
          Wachspastell, Tinte, Buntstifte, Acrylfarben und Papiercollagen.{" "}
          <br />
          Der Reiz meiner recht intuitiven Mixed-Media-Technik liegt darin, dass
          man diese nicht immer so kontrollieren kann, wenn man es zulässt und
          dadurch schnell schöne Zufälle erstellt.
          <br />
          Bei meinen Kinderbüchern zeichne ich meist digital und arbeite immer
          einen handgemachten, skizzenhaften Look heraus.
        </p>
      </section>
      <div className="md:col-start-3 md:col-span-2">
        <div className="flex justify-center">
          <img
            src={illuBiene}
            alt="Illustration Biene in Wasserfarben"
            loading="lazy"
            className="animate-flying"
          />
        </div>
      </div>
      <DigitalIllustrations />
      <div className="md:col-start-3 md:col-span-1 text-lg tracking-wider">
        <h2 className="uppercase tracking-widest text-2xl mb-4">Mein Sketchbook ist immer dabei</h2>
        <p>In diesem teste ich jede Menge Farben und Zeichentechniken, wenn die Ergebnisse dann auch schon gut genug sind, dann
          werden die "Versuche" auch sofort eingescannt und zu vollwertigen Illustrationen.
        </p>
      </div>
      <AbstractIllustrations />
    </>
  );
};

export default Illustration;
