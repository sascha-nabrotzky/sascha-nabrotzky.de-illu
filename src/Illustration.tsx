import React from "react";
import MainLayout from "./components/MainLayout";
import DigitalIllustrations from "./components/DigitalIllustrations";
import AbstractIllustrations from "./components/AbstractIllustrations";
import illuBiene from "../src/assets/images/Biene.webp";

const Illustration = () => {
  return (
    <MainLayout>
      <section className="md:col-start-2 md:col-span-1 max-md:px-4 text-lg tracking-wider">
        <h1 className="uppercase tracking-widest text-2xl mb-4">
          Illustrationen aus Ladbergen, die die Fantasie beflügeln
        </h1>
        <p>
          Ich erstelle Illustrationen hauptsächlich mit Wasser-/Gouachefarben
          und kombiniere diese mit Aquarellstiften, ich es immer spannend
          Geschichten visuell und emotional zu erzählen.
        </p>
        <p>
          Der Reiz von Wasserfarben liegt darin, dass man diese nicht immer so
          kontrollieren kann und dadurch schnell schöne Zufälle erhält.
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
      <div className="md:col-start-3 md:col-span-1 max-md:px-4 text-lg tracking-wider">
        <h2 className="uppercase tracking-widest text-2xl mb-4">
          Mein Skizzenbuch ist immer dabei
        </h2>
        <p>
          In diesem zeichne ich auch ganz gerne in Mixed-Media-Technik, um jede
          Menge Farben und Zeichentechniken auszuprobieren, wenn die Ergebnisse
          dann auch schon gut genug sind, werden die "Versuche" auch sofort
          eingescannt und zu vollwertigen Illustrationen.
        </p>
      </div>
      <AbstractIllustrations />
    </MainLayout>
  );
};

export default Illustration;
