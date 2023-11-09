import React from "react";
import MainLayout from "./components/MainLayout";
import DigitalIllustrations from "./components/DigitalIllustrations";
import ChildrensIllustrations from "./components/ChildrensIllustrations";
import illuBiene from "../src/assets/images/Biene.webp";

function Illustration() {
  return (
    <MainLayout>
      <section className="md:col-start-2 md:col-span-1 max-md:px-4 text-lg tracking-wider">
        <h2 className="uppercase pb-2 mb-4 border-b border-pelorous-400 tracking-widest">
          Illustrationen aus Ladbergen
        </h2>
        <h1 className="uppercase text-2xl mb-4 font-bold">
          Tauche ein in meine farbenfrohe Welt
        </h1>
        <p className="font-serif">
          Mit meinem einzigartigen Stil mit Stiften, Wasserfarbe und Tinte,
          erstelle ich für dich schöne und interessante Illustrationen für die
          Bereiche Kinderbücher, Editorial und Logodesign, aber auch vieles
          mehr. <br />
          Außderdem kann ich bei der Umsetzung deiner Buchidee helfen da ich
          schon drei Kinderbücher komplett illustriert und layoutet habe.
        </p>
        <ul className="mt-4 pl-6">
          <li className="mb-2 font-bold">Charakter-Design</li>
          <li className="mb-2 font-bold">Kinderbücher (komplett)</li>
          <li className="mb-2 font-bold">Editorial-Illustration</li>
          <li className="mb-2 font-bold">Logodesign</li>
        </ul>
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
      <div className="md:col-start-3 md:col-span-1 max-md:px-4 text-lg tracking-wider">
        <p className="font-serif">
          Lasse dich von meinen Illustrationen verzaubern. Ich hoffe, dass du
          genauso viel Freude daran hast, meine Arbeiten zu entdecken, wie ich
          sie beim Erstellen hatte.
        </p>
      </div>
      <DigitalIllustrations />
    </MainLayout>
  );
}

export default Illustration;
