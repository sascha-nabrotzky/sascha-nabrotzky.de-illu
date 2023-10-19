import React from "react";
import MainLayout from "./components/MainLayout";
import DigitalIllustrations from "./components/DigitalIllustrations";
import ChildrensIllustrations from "./components/ChildrensIllustrations";
import illuBiene from "../src/assets/images/Biene.webp";

function Illustration() {
  return (
    <MainLayout>
      <section className="md:col-start-2 md:col-span-1 max-md:px-4 text-lg tracking-wider">
        <h1 className="uppercase tracking-widest text-2xl mb-4">
          Illustrationen aus Ladbergen, die die Fantasie beflügeln
        </h1>
        <p className="font-serif">
          Ich erstelle Illustrationen hauptsächlich mit Wasser-/Gouachefarben
          und kombiniere diese mit Aquarellstiften.
        </p>
        <p className="font-serif">
          Der Reiz von Wasserfarben liegt darin, dass man diese nicht immer so
          kontrollieren kann und dadurch schnell schöne Zufälle erhält.
          <br />
          Bei meinen Kinderbüchern zeichne ich meist digital in einem
          handgemachten Stil.
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
          Meine Website befindet sich derzeit in Bearbeitung ...
        </h2>
        <p className="font-serif">
          und wird sich demnächst ändern, ich werde mehr den Stil fokussieren,
          der mir am meisten entspricht und den ich nach Außen hin präsentieren
          möchte. Alles andere findet man bei mir auf Instagram.
        </p>
      </div>
      <ChildrensIllustrations />
    </MainLayout>
  );
}

export default Illustration;
