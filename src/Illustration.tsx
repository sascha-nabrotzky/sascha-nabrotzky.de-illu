import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "./components/MainLayout";
import DigitalIllustrations from "./components/DigitalIllustrations";
import ChildrensIllustrations from "./components/ChildrensIllustrations";
import CharacterDesignSketches from "./components/CharacterdesignSketches";
import illuBiene from "../src/assets/images/Biene.webp";
import Theo from "../src/assets/images/Theo.webp";
import socMedImg from "../src/assets/images/SocMedImg.jpg";

function Illustration() {
  return (
    <>
      <Helmet>
        <title>Sascha Nabrotzky | Illustration & Charakterdesign</title>
        <meta
          name="description"
          content="Illustrationen und Charakterdesign aus Ladbergen: Tauchen Sie ein in meine farbenfrohe
          Welt!"
        />
        <meta
          name="keywords"
          content="Charakterdesign, Illustration, Kinderbücher, Ladbergen, Münster, Osnabrück"
        />
        <meta
          name="image"
          content={`http://www.sascha-nabrotzky.de${socMedImg}`}
        />
        <meta property="og:url" content="http://www.sascha-nabrotzky.de" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Sascha Nabrotzky | Illustration & Charakterdesign"
        />
        <meta
          property="og:description"
          content="Illustrationen und Charakterdesign aus Ladbergen: Tauchen Sie ein in meine farbenfrohe
          Welt!"
        />
        <meta
          property="og:image"
          content={`http://www.sascha-nabrotzky.de${socMedImg}`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="sascha-nabrotzky.de" />
        <meta property="twitter:url" content="http://www.sascha-nabrotzky.de" />
        <meta
          name="twitter:title"
          content="Sascha Nabrotzky | Illustration & Charakterdesign"
        />
        <meta
          name="twitter:description"
          content="Illustrationen und Charakterdesign aus Ladbergen: Tauchen Sie ein in meine farbenfrohe
          Welt!"
        />
        <meta
          name="twitter:image"
          content={`http://www.sascha-nabrotzky.de${socMedImg}`}
        />
      </Helmet>

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
        <div className="md:col-start-3 md:col-span-1">
          <div className="flex justify-center">
            <img src={Theo} alt="Characterdesign eines Hundes" loading="lazy" />
          </div>
        </div>
        <ChildrensIllustrations />
        <div className="md:col-start-2 max-md:px-4">
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
        <div className="md:col-start-2 md:col-span-2">
          <div className="flex justify-center">
            <img
              src={illuBiene}
              alt="Illustration Biene in Wasserfarben"
              loading="lazy"
              className="animate-flying mb-6"
            />
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default Illustration;
