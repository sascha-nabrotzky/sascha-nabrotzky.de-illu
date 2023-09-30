import React from "react";
import Profilfoto from "../src/assets/images/Sascha_Nabrotzky_sw.webp";
import MainLayout from "./components/MainLayout";

const About = () => {
  return (
    <MainLayout>
      <div className="md:col-start-2 md:col-span-1 max-md:px-4 text-lg tracking-wider">
        <h1 className="uppercase tracking-widest text-2xl mb-4">Über mich</h1>
        <h2 className="mb-4">
          Zeichnerische Kreativität war schon immer sehr ausgeprägt bei mir ...
        </h2>
        <p>
          das merkten auch meine Lehrer, wenn sie mal meine Schulbücher oder
          Arbeitshefte in die Finger bekamen.
        </p>
        <p>
          Neben meinem Hauptjob als Full-Stack Designer habe ich noch
          Illustration und das erstellen von Kinderbüchern als weitere
          Leidenschaft, welche ich als Hobby und Ausgleich zum Alltag betreibe.
        </p>
      </div>
      <div className="md:col-start-3 md:col-span-2">
        <div className="flex justify-center">
          <div className="rounded-full overflow-hidden">
            <img
              src={Profilfoto}
              alt="Foto von Sascha Nabrotzky"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
