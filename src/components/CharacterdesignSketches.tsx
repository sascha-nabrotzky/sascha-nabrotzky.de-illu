import React from "react";
import SketchesLayout from "./General/SketchesLayout";
import { useTranslation } from "react-i18next";
import Sketch1 from "../assets/images/Skizze1.webp";
import Sketch2 from "../assets/images/Skizze2.webp";
import Sketch3 from "../assets/images/Skizze3.webp";

const characterDesignSketches = () => {
    const { t } = useTranslation("sketches", {
        keyPrefix: "interactions",
    });

    const imgs = [
        {
            figcaption: `${t("img1")}`,
            src: Sketch1,
            alt: `${t("img1")}`,
        },
        {
            figcaption: `${t("img2")}`,
            src: Sketch3,
            alt: `${t("img2")}`,
        },
        {
            figcaption: `${t("img3")}`,
            src: Sketch2,
            alt: `${t("img3")}`,
        },
    ];

    return <SketchesLayout title={`${t("title")}`} imgs={imgs} />;
};

export default characterDesignSketches;
