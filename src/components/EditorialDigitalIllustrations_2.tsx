import React from "react";
import { useTranslation } from "react-i18next";
import Highlights from "./General/Highlights";
import Runner from "../assets/images/Runner.webp";
import SmartCity from "../assets/images/SmartCity.webp";

const EditorialDigitalIllustrations_2 = () => {
    const { t } = useTranslation("highlights", {
        keyPrefix: "editorialDigitalIllustrations_2",
    });

    const imgs = [
        {
            figcaption: `${t("img1")}`,
            src: Runner,
            alt: `${t("img1")}`,
        },
        {
            figcaption: `${t("img2")}`,
            src: SmartCity,
            alt: `${t("img2")}`,
        },
    ];

    return <Highlights cols={2} imgs={imgs} title={`${t("title")}`} />;
};

export default EditorialDigitalIllustrations_2;
