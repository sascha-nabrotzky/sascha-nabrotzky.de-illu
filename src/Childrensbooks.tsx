import React from "react";
import { useTranslation } from "react-i18next";
import MainLayout from "./components/MainLayout";
import Highlights from "./components/Highlights";
import Book4 from "../src/assets/images/Book4.webp";
import SpreadEating from "../src/assets/images/SpreadpageEating.webp";
import SpreadBlowing from "../src/assets/images/SpreadpageBlowing.webp";
import SpreadWiese from "../src/assets/images/SpreadpageWiese.webp";
import SpreadForest from "../src/assets/images/SpreadpageForest.webp";
import SpreadShadow1 from "../src/assets/images/SpreadpageShadow1.webp";
import SpreadShadow2 from "../src/assets/images/SpreadpageShadow2.webp";

function Childrensbooks() {
  const { t } = useTranslation("pages", { keyPrefix: "childrensBooks" });

  const imgsBook1 = [
    {
      figcaption: "Doppelseite meines ersten Kinderbuches",
      src: SpreadWiese,
      alt: "Doppelseite meines ersten Kinderbuches 1a",
    },
    {
      figcaption: "Doppelseite meines ersten Kinderbuches",
      src: SpreadForest,
      alt: "Doppelseite meines ersten Kinderbuches 1b",
    },
  ];

  const imgsBook2 = [
    {
      figcaption: "Doppelseite meines zweiten Kinderbuches",
      src: SpreadEating,
      alt: "Doppelseite meines zweiten Kinderbuches 2a",
    },
    {
      figcaption: "Doppelseite meines zweiten Kinderbuches",
      src: SpreadBlowing,
      alt: "Doppelseite meines zweiten Kinderbuches 2b",
    },
  ];

  const imgsBook3 = [
    {
      figcaption: "Doppelseite meines dritten Kinderbuches",
      src: SpreadShadow1,
      alt: "Doppelseite meines dritten Kinderbuches 3a",
    },
    {
      figcaption: "Doppelseite meines dritten Kinderbuches",
      src: SpreadShadow2,
      alt: "Doppelseite meines dritten Kinderbuches 3b",
    },
  ];

  return (
    <MainLayout>
      <div className="md:col-start-2 md:col-span-1 max-md:px-4 text-lg tracking-wider">
        <h1 className="mb-4 uppercase tracking-widest text-2xl font-bold">
          {t("title1")}
        </h1>
        <p
          className="font-serif"
          dangerouslySetInnerHTML={{ __html: t("text1a") }}
        />
        <p className="font-serif">{t("text1b")}</p>
      </div>
      <div className="md:col-start-3 md:col-span-1">
        <div className="flex justify-center">
          <img
            src={Book4}
            alt="Cover meines vierten Kinderbuches"
            loading="lazy"
          />
        </div>
      </div>
      <Highlights cols={2} imgs={imgsBook3} title="Das dunkle Etwas" />
      <div className="md:col-start-3 md:col-span-1 max-md:px-4 text-lg tracking-wider">
        <h2 className="mb-4 uppercase tracking-widest text-2xl font-bold">
          {t("title2")}
        </h2>
        <p className="font-serif">{t("text2")}</p>
      </div>
      <Highlights cols={2} imgs={imgsBook2} title="Die Puschelblüte" />
      <div className="md:col-start-2 md:col-span-1 max-md:px-4 text-lg tracking-wider">
        <h2 className="mb-4 uppercase tracking-widest text-2xl font-bold">
          {t("title3")}
        </h2>
        <p className="font-serif">{t("text3")}</p>
      </div>
      <Highlights
        cols={2}
        imgs={imgsBook1}
        title="Wach auf, kleiner Bär, es ist Frühling!"
      />
    </MainLayout>
  );
}

export default Childrensbooks;
