import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "./components/MainLayout";
import DigitalIllustrations from "./components/DigitalIllustrations";
import ChildrensIllustrations from "./components/ChildrensIllustrations";
import illuBiene from "../src/assets/images/Biene.webp";
import socMedImg from "../src/assets/images/SocMedImg.jpg";

function Illustration() {
  return (
    <>
      <Helmet>
        <title>Sascha Nabrotzky | Illustration</title>
        <meta
          name="description"
          content="Illustrationen aus Ladbergen für Kinderbücher, die die Fantasie beflügeln."
        />
        <meta
          name="keywords"
          content="Illustration, Kinderbücher, Ladbergen, Münster, Osnabrück"
        />

        <meta property="og:url" content="http://www.sascha-nabrotzky.de" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sascha Nabrotzky | Illustration" />
        <meta
          property="og:description"
          content="Illustrationen aus Ladbergen für Kinderbücher, die die Fantasie beflügeln."
        />
        <meta property="og:image" content={socMedImg} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="sascha-nabrotzky.de" />
        <meta property="twitter:url" content="http://www.sascha-nabrotzky.de" />
        <meta name="twitter:title" content="Sascha Nabrotzky | Illustration" />
        <meta
          name="twitter:description"
          content="Illustrationen aus Ladbergen: Tauchen Sie ein in meine farbenfrohe
          Welt!"
        />
        <meta name="twitter:image" content={socMedImg} />
      </Helmet>

      <MainLayout>
        <section className="md:col-start-2 md:col-span-1 max-md:px-4 text-lg tracking-wider">
          <h2 className="uppercase pb-2 mb-4 border-b border-pelorous-400 tracking-widest">
            Illustrationen aus Ladbergen
          </h2>
          <h1 className="uppercase tracking-widest text-2xl mb-4 font-bold">
            Willkommen in meiner skizzenartigen Welt!
          </h1>
          <p className="font-serif">
            Ich bin ein Illustrator, der sich auf die Verwendung von
            Wasser-/Gouache-Farben, Bunt- und Aquarellstiften spezialisiert hat
            und es liebt, die ursprüngliche Skizze beizubehalten, aber auch
            komplett digital arbeitet, wenn die Zeichnung weiterverabeitet
            werden soll.
            <br />
            Tauchen Sie ein in meine farbenfrohe Welt mit meinem einzigartigen
            Stil und lassen Sie sich von meinen Illustrationen verzaubern. Ich
            hoffe, dass Sie genauso viel Freude daran haben, meine Arbeiten zu
            entdecken, wie ich sie beim Erstellen hatte.
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
        <div className="md:col-start-3 md:col-span-1 max-md:px-4 text-lg tracking-wider">
          <h2 className="uppercase tracking-widest text-2xl mb-4 font-bold">
            Bereiche
          </h2>
          <p className="font-serif">
            Meine hauptsächlichen Bereiche sind{" "}
            <strong>Kinderbücher, Cover- und Editorial-Illustration</strong> in
            denen ich meine kreative Ader voll ausleben kann. Im Bereich
            Kinderbücher habe ich bereits einige eigene Projekte umgesetzt und
            konnte auch schon für eine Kindertagespflegeeinrichtung
            illustrieren.
          </p>
        </div>
        <DigitalIllustrations />
      </MainLayout>
    </>
  );
}

export default Illustration;
