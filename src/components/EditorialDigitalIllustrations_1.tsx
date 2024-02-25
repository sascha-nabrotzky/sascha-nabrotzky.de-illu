import React from "react";
import { useTranslation } from "react-i18next";
import Highlights from "./General/Highlights";
import Brexit from "../assets/images/Brexit.webp";
import Handelskrieg from "../assets/images/Handelskrieg.webp";

function EditorialDigitalIllustrations() {
  const { t } = useTranslation("highlights", {
    keyPrefix: "editorilaDigitalIllustrations",
  });

  const imgs = [
    {
      figcaption: `${t("img1")}`,
      src: Brexit,
      alt: `${t("img1")}`,
    },
    {
      figcaption: `${t("img2")}`,
      src: Handelskrieg,
      alt: `${t("img2")}`,
    },
  ];

  return <Highlights cols={2} imgs={imgs} title={`${t("title")}`} />;
}

export default EditorialDigitalIllustrations;
