import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import MainLayout from "./components/MainLayout";
import DigitalIllustrations from "./components/DigitalIllustrations";
import ChildrensIllustrations from "./components/ChildrensIllustrations";
import CharacterDesignSketches from "./components/CharacterdesignSketches";
import illuBiene from "../src/assets/images/Biene.webp";
import Theo from "../src/assets/images/Theo.webp";
import socMedImg from "../src/assets/images/SocMedImg.jpg";

function Illustration() {
  const { t } = useTranslation("pages", { keyPrefix: "illustration" });

  return (
    <>
      <Helmet>
        <title>Sascha Nabrotzky | Charakterdesign & Illustration</title>
        <meta
          name="description"
          content="Entwickeln von Charakteren und Illustrationen für Kinderbücher, Editorial und vieles mehr - Illustrationen aus Ladbergen."
        />
        <meta
          name="keywords"
          content="Charakterdesign, Illustration, Kinderbücher, Editorial, Ladbergen, Münster, Osnabrück"
        />
        <meta
          name="image"
          content={`http://www.sascha-nabrotzky.de${socMedImg}`}
        />
        <meta property="og:url" content="http://www.sascha-nabrotzky.de" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Sascha Nabrotzky | Charakterdesign & Illustration"
        />
        <meta
          property="og:description"
          content="Entwickeln von Charakteren und Illustrationen für Kinderbücher, Editorial und vieles mehr - Illustrationen aus Ladbergen."
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
          content="Sascha Nabrotzky | Charakterdesign & Illustration"
        />
        <meta
          name="twitter:description"
          content="Entwickeln von Charakteren und Illustrationen für Kinderbücher, Spiele und vieles mehr."
        />
        <meta
          name="twitter:image"
          content={`http://www.sascha-nabrotzky.de${socMedImg}`}
        />
      </Helmet>

      <MainLayout>
        <section className="md:col-start-2 md:col-span-1 max-md:px-4 text-lg tracking-wider">
          <h1 className="uppercase text-2xl mb-4 font-bold tracking-wider">
            {t("title")}
          </h1>
          <p className="font-serif">
            Ich bin Illustrator aus Ladbergen und habe mich mit meinem
            einzigartigen Stil mit Stiften, Wasserfarbe und Tinte auf die
            Erstellung von Charakteren für Websites, Kinderbücher und Editorial
            spezialisiert.
          </p>
        </section>
        <div className="md:col-start-3 md:col-span-1">
          <div className="flex justify-center">
            <img src={Theo} alt="Characterdesign eines Hundes" loading="lazy" />
          </div>
        </div>
        <ChildrensIllustrations />
        <div className="md:col-start-3 md:col-span-1 max-md:px-4 text-lg tracking-wider">
          <p className="font-serif">
            Auf dem Weg zum fertigen Buch illustriere ich die Charaktere zuerst
            in verschiedenen Posen, um sie dann in der gewünschten Umgebung zu
            platzieren. So entsteht eine Geschichte, die die Kinder in ihren
            Bann zieht.
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
