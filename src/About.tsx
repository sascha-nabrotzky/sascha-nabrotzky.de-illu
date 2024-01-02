import React from "react";
import Profilfoto from "../src/assets/images/Sascha_Nabrotzky_sw.webp";
import MainLayout from "./components/MainLayout";

function About() {
  return (
    <MainLayout>
      <div className="md:col-start-2 md:col-span-1 max-md:px-4 text-lg tracking-wider">
        <h1 className="mb-4 uppercase tracking-widest text-2xl font-bold">
          Zeichnerische Kreativität ...
        </h1>
        <p className="font-serif">
          war schon immer sehr ausgeprägt bei mir, das merkten auch meine
          Lehrer, wenn sie mal meine Schulbücher oder Arbeitshefte in die Finger
          bekamen.
        </p>
        <p className="font-serif">
          Neben meinem Hauptjob als Webdesigner UI/UX, habe ich noch
          Illustration und das erstellen von Charakteren für Kinderbücher als
          weitere Leidenschaft, welche ich als Hobby und Ausgleich zum Alltag
          betreibe.
        </p>
      </div>
      <div className="md:col-start-3 md:col-span-2">
        <div className="md:rounded-l-xl overflow-hidden w-full max-h-[32rem]">
          <img
            src={Profilfoto}
            alt="Foto von Sascha Nabrotzky"
            loading="lazy"
            className="w-full"
          />
        </div>
      </div>
    </MainLayout>
  );
}

export default About;
