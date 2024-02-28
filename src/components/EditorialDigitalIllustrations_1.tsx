import React from "react";
import { useTranslation } from "react-i18next";
import HighlightsLayout from "./General/HighlightsLayout";
import Brexit from "../assets/images/Brexit.webp";
import Handelskrieg from "../assets/images/Handelskrieg.webp";

const EditorialDigitalIllustrations_1 = () => {
    const { t } = useTranslation("highlights", {
        keyPrefix: "editorialDigitalIllustrations_1",
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

    return <HighlightsLayout cols={2} imgs={imgs} title={`${t("title")}`} />;
};

export default EditorialDigitalIllustrations_1;
