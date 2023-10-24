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
            Tauchen Sie ein in meine farbenfrohe Welt!
          </h1>
          <p className="font-serif">
            Ich bin ein Illustrator, der sich auf die Verwendung von
            Gouache-Farben, Wasserfarben, Buntstiften und Aquarellstiften
            spezialisiert hat, aber auch digital arbeitet, wenn es professionell
            sein soll.
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
          <p className="font-serif">
            Auf meinen Seiten präsentiere ich stolz eine Auswahl meiner Werke,
            die meine kreative Reise und meinen einzigartigen Stil
            widerspiegeln. Tauchen Sie ein in meine farbenfrohe Welt und lassen
            Sie sich von meinen Illustrationen verzaubern. Ich hoffe, dass Sie
            genauso viel Freude daran haben, meine Arbeiten zu entdecken, wie
            ich sie beim Erstellen hatte. Viel Spaß beim Durchstöbern!
          </p>
        </div>
        <ChildrensIllustrations />
      </MainLayout>
    </>
  );
}

export default Illustration;
