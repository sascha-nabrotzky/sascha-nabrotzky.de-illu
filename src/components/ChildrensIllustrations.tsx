import React from "react";
import { useTranslation } from "react-i18next";
import Highlights from "./Highlights";
import seiMutig from "../assets/images/Sei_mutig.webp";
import seiNett from "../assets/images/Sei_nett.webp";
import seiFrech from "../assets/images/Sei_frech.webp";
import seiEntspannt from "../assets/images/Sei_entspannt.webp";

function ChildrensSketchbookIllustrations() {
    const { t } = useTranslation("highlights", {
        keyPrefix: "childrensIllustrations",
    });

    const imgs = [
        {
            figcaption: `${t("img1")}`,
            src: seiMutig,
            alt: `${t("img1")}`,
        },
        {
            figcaption: `${t("img2")}`,
            src: seiFrech,
            alt: `${t("img2")}`,
        },
        {
            figcaption: `${t("img3")}`,
            src: seiEntspannt,
            alt: `${t("img3")}`,
        },
        {
            figcaption: `${t("img4")}`,
            src: seiNett,
            alt: `${t("img4")}`,
        },
    ];

    return <Highlights cols={4} imgs={imgs} title={`${t("title")}`} />;
}

export default ChildrensSketchbookIllustrations;
