import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import MainLayout from "./components/General/MainLayout";
import EditorialDigitalIllustrations_1 from "./components/EditorialDigitalIllustrations_1";
import EditorialDigitalIllustrations_2 from "./components/EditorialDigitalIllustrations_2";
import EditorialDigitalIllustrations_3 from "./components/EditorialDigitalIllustrations_3";
import EditorialDigitalIllustrations_4 from "./components/EditorialDigitalIllustrations_4";
import socMedImg from "../src/assets/images/SocMedImg.jpg";
import Scratchy from "../src/assets/images/Scratchy.webp";

const Illustration = () => {
    const { t } = useTranslation("pages", { keyPrefix: "editorial" });

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
                    <h1 className="uppercase text-2xl mb-4 font-bold tracking-wider">
                        {t("title")}
                    </h1>
                    <p className="font-serif">{t("text1")}</p>
                </div>

                <div className="md:col-start-3 md:col-span-1">
                    <div className="flex justify-center">
                        <img
                            src={Scratchy}
                            alt="Illustration Wort Scratchy"
                            loading="lazy"
                        />
                    </div>
                </div>

                <EditorialDigitalIllustrations_2 />

                <div className="md:col-start-2 md:col-span-2 mx-auto flex items-center justify-center h-96 aspect-square bg-white rounded-full">
                    <div className="flex justify-center">
                        Bild in Bearbeitung
                    </div>
                </div>

                <EditorialDigitalIllustrations_4 />

                <div className="md:col-start-3 md:col-span-1 max-md:px-4 text-lg tracking-wider">
                    <h1 className="uppercase text-2xl mb-4 font-bold tracking-wider">
                        {t("title_concept")}
                    </h1>
                    <p className="font-serif">{t("text_concept")}</p>
                </div>

                <EditorialDigitalIllustrations_1 />

                <div className="md:col-start-2 md:col-span-1 max-md:px-4 text-lg tracking-wider">
                    <h1 className="uppercase text-2xl mb-4 font-bold tracking-wider">
                        {t("title2")}
                    </h1>
                    <p className="font-serif">{t("text2")}</p>
                </div>

                <EditorialDigitalIllustrations_3 />

                <div className="md:col-start-2 md:col-span-2 mx-auto flex items-center justify-center h-96 aspect-square bg-white rounded-full">
                    <div className="flex justify-center">
                        Bild in Bearbeitung
                    </div>
                </div>
            </MainLayout>
        </>
    );
};

export default Illustration;
