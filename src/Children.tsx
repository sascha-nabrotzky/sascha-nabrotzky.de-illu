import React from "react";
import { useTranslation } from "react-i18next";
import MainLayout from "./components/General/MainLayout";
import HighlightsLayout from "./components/General/HighlightsLayout";
import CharacterDesignSketches from "./components/CharacterdesignSketches";
import ChildrensIllustrations from "./components/ChildrensIllustrations";
import DigitalIllustrations from "./components/DigitalIllustrations";
import Book4 from "../src/assets/images/Book4.webp";
import SpreadEating from "../src/assets/images/SpreadpageEating.webp";
import SpreadBlowing from "../src/assets/images/SpreadpageBlowing.webp";
import SpreadWiese from "../src/assets/images/SpreadpageWiese.webp";
import SpreadForest from "../src/assets/images/SpreadpageForest.webp";
import SpreadShadow1 from "../src/assets/images/SpreadpageShadow1.webp";
import SpreadShadow2 from "../src/assets/images/SpreadpageShadow2.webp";
import Theo from "../src/assets/images/Theo.webp";
import illuBiene from "../src/assets/images/Biene.webp";
import { Helmet } from "react-helmet-async";
import socMedImg from "../src/assets/images/SocMedImg.jpg";

const Childrensbooks = () => {
    const { t } = useTranslation("pages", { keyPrefix: "children" });

    const imgsBook1 = [
        {
            figcaption: `${t("book1.img1")}`,
            src: SpreadWiese,
            alt: `${t("book1.img2")}`,
        },
        {
            figcaption: `${t("book1.img2")}`,
            src: SpreadForest,
            alt: `${t("book1.img3")}`,
        },
    ];

    const imgsBook2 = [
        {
            figcaption: `${t("book2.img1")}`,
            src: SpreadEating,
            alt: `${t("book2.img1")}`,
        },
        {
            figcaption: `${t("book2.img2")}`,
            src: SpreadBlowing,
            alt: `${t("book2.img2")}`,
        },
    ];

    const imgsBook3 = [
        {
            figcaption: `${t("book3.img1")}`,
            src: SpreadShadow1,
            alt: `${t("book3.img1")}`,
        },
        {
            figcaption: `${t("book3.img2")}`,
            src: SpreadShadow2,
            alt: `${t("book3.img2")}`,
        },
    ];

    return (
        <>
            <Helmet>
                <title>Sascha Nabrotzky | Illustration</title>
                <meta
                    name="description"
                    content="Entwickeln von Illustrationen für Kinderbücher, Editorial und vieles mehr - Illustrationen aus Ladbergen."
                />
                <meta
                    name="keywords"
                    content="Charakterdesign, Illustration, Kinderbücher, Editorial, Ladbergen, Münster, Osnabrück"
                />
                <meta
                    name="image"
                    content={`http://www.sascha-nabrotzky.de${socMedImg}`}
                />
                <meta
                    property="og:url"
                    content="http://www.sascha-nabrotzky.de"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Sascha Nabrotzky | Illustration"
                />
                <meta
                    property="og:description"
                    content="Entwickeln von Illustrationen für Kinderbücher, Editorial und vieles mehr - Illustrationen aus Ladbergen."
                />
                <meta
                    property="og:image"
                    content={`http://www.sascha-nabrotzky.de${socMedImg}`}
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="sascha-nabrotzky.de" />
                <meta
                    property="twitter:url"
                    content="http://www.sascha-nabrotzky.de"
                />
                <meta
                    name="twitter:title"
                    content="Sascha Nabrotzky | Charakterdesign & Illustration"
                />
                <meta
                    name="twitter:description"
                    content="Entwickeln von Illustrationen für Kinderbücher, Spiele und vieles mehr."
                />
                <meta
                    name="twitter:image"
                    content={`http://www.sascha-nabrotzky.de${socMedImg}`}
                />
            </Helmet>

            <MainLayout>
                <div className="md:col-start-2 md:col-span-1 max-md:px-4 text-lg tracking-wider">
                    <h1 className="mb-4 uppercase tracking-widest text-2xl font-bold">
                        {t("title1")}
                    </h1>
                    <p
                        className="font-serif"
                        dangerouslySetInnerHTML={{ __html: t("text1") }}
                    />
                </div>
                <div className="md:col-start-3 md:col-span-1">
                    <div className="flex justify-center">
                        <img
                            src={Theo}
                            alt="Characterdesign eines Hundes"
                            loading="lazy"
                        />
                    </div>
                </div>

                <ChildrensIllustrations />

                <div className="md:col-start-2 md:col-span-1">
                    <div className="flex justify-center">
                        <img src={Book4} alt={t("book1.img1")} loading="lazy" />
                    </div>
                </div>
                <div className="md:col-start-3 md:col-span-1 max-md:px-4 text-lg tracking-wider">
                    <h1 className="mb-4 uppercase tracking-widest text-2xl font-bold">
                        {t("title2")}
                    </h1>
                    <p
                        className="font-serif"
                        dangerouslySetInnerHTML={{ __html: t("text2a") }}
                    />
                    <p className="font-serif">{t("text2b")}</p>
                </div>

                <HighlightsLayout
                    cols={2}
                    imgs={imgsBook3}
                    title={t("book3.title")}
                />

                <div className="md:col-start-3 md:col-span-1 max-md:px-4 text-lg tracking-wider">
                    <h2 className="mb-4 uppercase tracking-widest text-2xl font-bold">
                        {t("title3")}
                    </h2>
                    <p className="font-serif">{t("text3")}</p>
                </div>

                <CharacterDesignSketches />

                <HighlightsLayout
                    cols={2}
                    imgs={imgsBook2}
                    title={t("book2.title")}
                />

                <div className="md:col-start-2 md:col-span-1 max-md:px-4 text-lg tracking-wider">
                    <h2 className="mb-4 uppercase tracking-widest text-2xl font-bold">
                        {t("title4")}
                    </h2>
                    <p className="font-serif">{t("text4")}</p>
                </div>

                <HighlightsLayout
                    cols={2}
                    imgs={imgsBook1}
                    title={t("book1.title")}
                />

                <div className="md:col-start-2 md:col-span-2">
                    <div className="flex justify-center">
                        <img
                            src={illuBiene}
                            alt="Illustration Biene in Wasserfarben"
                            loading="lazy"
                            className="animate-flying mb-6"
                        />
                    </div>
                </div>
            </MainLayout>
        </>
    );
};

export default Childrensbooks;
