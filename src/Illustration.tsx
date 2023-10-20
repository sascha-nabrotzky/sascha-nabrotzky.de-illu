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
          content="Illustrationen aus Ladbergen für Kinderbücher, die die Fantasie beflügeln oder zum Nachdenken anregen."
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
          content="Illustrationen aus Ladbergen für Kinderbücher, die die Fantasie beflügeln oder zum Nachdenken anregen."
        />
        <meta property="og:image" content={socMedImg} />
        <meta property="og:image:width" content="651" />
        <meta property="og:image:height" content="400" />
        <meta property="og:image:type" content="image/jpeg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="sascha-nabrotzky.de" />
        <meta property="twitter:url" content="http://www.sascha-nabrotzky.de" />
        <meta name="twitter:title" content="Sascha Nabrotzky | Illustration" />
        <meta
          name="twitter:description"
          content="Illustrationen aus Ladbergen für Kinderbücher, die die Fantasie beflügeln oder zum Nachdenken anregen."
        />
        <meta name="twitter:image" content={socMedImg} />
      </Helmet>

      <MainLayout>
        <section className="md:col-start-2 md:col-span-1 max-md:px-4 text-lg tracking-wider">
          <h1 className="uppercase tracking-widest text-2xl mb-4">
            Illustrationen aus Ladbergen, die die Fantasie beflügeln
          </h1>
          <p className="font-serif">
            Ich erstelle Illustrationen häufig mit Wasser-/Gouachefarben und
            kombiniere diese mit Bunt- oder Aquarellstiften, diesen
            handgemachten Stil versuche ich auch bei meinen digitalen
            Zeichnungen beizubehalten.
          </p>
          <p className="font-serif">
            Der Reiz von Wasserfarben liegt darin, dass man diese nicht immer so
            kontrollieren kann und dadurch schnell schöne Zufälle erhält.
            <br />
            Bei meinen Kinderbüchern zeichne ich meist von Anfang an digital und
            kann <strong>komplette Buchprojekte</strong> von der Zeichnung über
            das Layout bis zum Druck komplett umsetzen.
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
            der mir am meisten entspricht und den ich nach Außen hin
            präsentieren möchte. Alles andere findet man bei mir auf Instagram.
          </p>
        </div>
        <ChildrensIllustrations />
      </MainLayout>
    </>
  );
}

export default Illustration;
