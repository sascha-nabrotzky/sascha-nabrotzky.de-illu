import React from "react";
import { useTranslation } from "react-i18next";
import HighlightsLayout from "./General/HighlightsLayout";
import illuBilligfleisch from "../assets/images/Billigfleisch_400x600.webp";
import illuDreams from "../assets/images/Dreams_400x600.webp";
import illuArtenvielfalt from "../assets/images/Artenvielfalt.webp";
import illuKatzenHunde from "../assets/images/KatzenHunde_400x600.webp";

const DigitalIllustrations = () => {
    const { t } = useTranslation("highlights", {
        keyPrefix: "digitalIllustrations",
    });

    const imgs = [
        {
            figcaption: `${t("img1")}`,
            src: illuArtenvielfalt,
            alt: `${t("img1")}`,
        },
        {
            figcaption: `${t("img2")}`,
            src: illuBilligfleisch,
            alt: `${t("img2")}`,
        },
        {
            figcaption: `${t("img3")}`,
            src: illuDreams,
            alt: `${t("img3")}`,
        },
        {
            figcaption: `${t("img4")}`,
            src: illuKatzenHunde,
            alt: `${t("img4")}`,
        },
    ];

    return <HighlightsLayout cols={4} imgs={imgs} title={`${t("title")}`} />;
};

export default DigitalIllustrations;
