import React from "react";
import { useTranslation } from "react-i18next";
import HighlightsLayout from "./General/HighlightsLayout";
import Plant from "../assets/images/Zimmerpflanze.webp";
import Tower from "../assets/images/Wolken_Turm.webp";
import Sword from "../assets/images/Schwert_Krone_Herz.webp";
import Space from "../assets/images/Weltraum.webp";

const EditorialDigitalIllustrations_3 = () => {
    const { t } = useTranslation("highlights", {
        keyPrefix: "editorialDigitalIllustrations_3",
    });

    const imgs = [
        {
            figcaption: `${t("sword")}`,
            src: Sword,
            alt: `${t("sword")}`,
        },
        {
            figcaption: `${t("plant")}`,
            src: Plant,
            alt: `${t("plant")}`,
        },
        {
            figcaption: `${t("tower")}`,
            src: Tower,
            alt: `${t("tower")}`,
        },
        {
            figcaption: `${t("space")}`,
            src: Space,
            alt: `${t("space")}`,
        },
    ];

    return <HighlightsLayout cols={4} imgs={imgs} title={`${t("title")}`} />;
};

export default EditorialDigitalIllustrations_3;
