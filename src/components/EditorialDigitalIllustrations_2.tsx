import React from "react";
import { useTranslation } from "react-i18next";
import HighlightsLayout from "./General/HighlightsLayout";
import Moth from "../assets/images/Motte.webp";
import Squid from "../assets/images/Tintenfisch.webp";
import Giant from "../assets/images/Riese.webp";
import Tree from "../assets/images/Baum_wandern.webp";

const EditorialDigitalIllustrations_2 = () => {
    const { t } = useTranslation("highlights", {
        keyPrefix: "editorialDigitalIllustrations_2",
    });

    const imgs = [
        {
            figcaption: `${t("moth")}`,
            src: Moth,
            alt: `${t("moth")}`,
        },
        {
            figcaption: `${t("tree")}`,
            src: Tree,
            alt: `${t("tree")}`,
        },
        {
            figcaption: `${t("squid")}`,
            src: Squid,
            alt: `${t("squid")}`,
        },
        {
            figcaption: `${t("giant")}`,
            src: Giant,
            alt: `${t("giant")}`,
        },
    ];

    return <HighlightsLayout cols={4} imgs={imgs} title={`${t("title")}`} />;
};

export default EditorialDigitalIllustrations_2;
