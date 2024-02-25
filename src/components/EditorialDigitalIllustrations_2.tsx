import React from "react";
import { useTranslation } from "react-i18next";
import Highlights from "./General/Highlights";
import Runner from "../assets/images/Runner.webp";
import SmartCity from "../assets/images/SmartCity.webp";

function EditorialDigitalIllustrations() {
  const { t } = useTranslation("highlights", {
    keyPrefix: "editorilaDigitalIllustrations",
  });

  const imgs = [
    {
      figcaption: `${t("img3")}`,
      src: Runner,
      alt: `${t("img3")}`,
    },
    {
      figcaption: `${t("img4")}`,
      src: SmartCity,
      alt: `${t("img4")}`,
    },
  ];

  return <Highlights cols={2} imgs={imgs} title={`${t("title")}`} />;
}

export default EditorialDigitalIllustrations;
