import React from "react";
import { Helmet } from "react-helmet-async";
import Profilfoto from "../src/assets/images/Sascha_Nabrotzky_sw.webp";
import MainLayout from "./components/MainLayout";
import socMedImg from "../src/assets/images/SocMedImg.jpg";

function About() {
  return (
    <>
      <Helmet>
        <title>Sascha Nabrotzky | Über mich</title>
        <meta
          name="description"
          content="Hier erfahrt ihr etwas mehr über mich und meine Leidenschaft für Illustrationen."
        />
        <meta
          name="keywords"
          content="Illustration, Kinderbücher, Ladbergen, Münster, Osnabrück"
        />

        <meta
          property="og:url"
          content="http://www.sascha-nabrotzky.de/#/kinderbuecher"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sascha Nabrotzky | Über mich" />
        <meta
          property="og:description"
          content="Illustrationen aus Ladbergen für Kinderbücher, die die Fantasie beflügeln oder zum Nachdenken anregen."
        />
        <meta property="og:image" content={socMedImg} />
        <meta property="og:image:width" content="651" />
        <meta property="og:image:height" content="400" />
        <meta property="og:image:type" content="image/jpeg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="sascha-nabrotzky.de" />
        <meta
          property="twitter:url"
          content="http://www.sascha-nabrotzky.de/#/kinderbuecher"
        />
        <meta name="twitter:title" content="Sascha Nabrotzky | Über mich" />
        <meta
          name="twitter:description"
          content="Illustrationen aus Ladbergen für Kinderbücher, die die Fantasie beflügeln oder zum Nachdenken anregen."
        />
        <meta name="twitter:image" content={socMedImg} />
      </Helmet>

      <MainLayout>
        <div className="md:col-start-2 md:col-span-1 max-md:px-4 text-lg tracking-wider">
          <h1 className="uppercase tracking-widest text-2xl mb-4">
            Zeichnerische Kreativität ...
          </h1>
          <p className="font-serif">
            war schon immer sehr ausgeprägt bei mir, das merkten auch meine
            Lehrer, wenn sie mal meine Schulbücher oder Arbeitshefte in die
            Finger bekamen.
          </p>
          <p className="font-serif">
            Neben meinem Hauptjob als Webdesigner UI/UX, habe ich noch
            Illustration und das erstellen von Kinderbüchern als weitere
            Leidenschaft, welche ich als Hobby und Ausgleich zum Alltag
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

        <div className="md:col-start-3 md:col-span-1 max-md:px-4 text-lg tracking-wider">
          <h2 className="uppercase tracking-widest text-2xl mb-4">Werdegang</h2>
          <p className="font-serif py-2">
            <span className="font-bold">Webdesigner UI/UX</span> im
            Private-Spa-Bereich
          </p>
          <p className="font-serif py-2">
            <span className="font-bold">Frontendentwickler</span> in einer
            Agentur
          </p>
          <p className="font-serif py-2">
            <span className="font-bold">Mediengestalter Digital und Print</span>{" "}
            bei einem Online-Shop
          </p>
          <p className="font-serif py-2">
            <span className="font-bold">Mediengestalter Digital und Print</span>{" "}
            bei einem Zeitungsverlag
          </p>
          <p className="font-serif py-2">
            <span className="font-bold">Schriftsetzer</span> in einer Druckerei
          </p>
          <p className="font-serif py-2">
            <span className="font-bold">Ausbildung Schriftsetzer</span> in einer
            Druckerei
          </p>
        </div>
      </MainLayout>
    </>
  );
}

export default About;
