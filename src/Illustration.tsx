import React from "react";
import MainLayout from "./components/MainLayout";
import DigitalIllustrations from "./components/DigitalIllustrations";
import ChildrensIllustrations from "./components/ChildrensIllustrations";
import CharacterDesignSketches from "./components/CharacterdesignSketches";
import illuBiene from "../src/assets/images/Biene.webp";

function Illustration() {
  return (
    <MainLayout>
      <section className="md:col-start-2 md:col-span-1 max-md:px-4 text-lg tracking-wider">
        <h2 className="uppercase pb-2 mb-4 border-b border-pelorous-400 tracking-widest">
          Illustrationen aus Ladbergen
        </h2>
        <h1 className="uppercase text-2xl mb-4 font-bold tracking-wider">
          Tauche ein in meine farbenfrohe Welt
        </h1>
        <p className="font-serif">
          Ich bin Illustrator und habe mich mit meinem einzigartigen Stil mit
          Stiften, Wasserfarbe und Tinte auf die Erstellung von Illustrationen
          mit interessanten Charakteren spezialisiert.
          <br />
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
      <ChildrensIllustrations />
      <div className="md:col-start-2">
        <h3 className="font-bold text-2xl uppercase tracking-wider">
          Charakterdesign
        </h3>
      </div>
      <div className="md:col-start-3 md:col-span-1 max-md:px-4 text-lg tracking-wider">
        <p className="font-serif">
          Lasse dich von meinen Charakteren und Illustrationen verzaubern. Ich
          hoffe, dass du genauso viel Freude daran hast, meine Arbeiten zu
          entdecken, wie ich sie beim Erstellen hatte.
        </p>
      </div>
      <CharacterDesignSketches />
      <DigitalIllustrations />
    </MainLayout>
  );
}

export default Illustration;
