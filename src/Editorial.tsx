import React from "react";
import { useTranslation } from "react-i18next";
import MainLayout from "./components/General/MainLayout";
import EditorialDigitalIllustrations_1 from "./components/EditorialDigitalIllustrations_1";
import EditorialDigitalIllustrations_2 from "./components/EditorialDigitalIllustrations_2";
import EditorialDigitalIllustrations_3 from "./components/EditorialDigitalIllustrations_3";
import EditorialDigitalIllustrations_4 from "./components/EditorialDigitalIllustrations_4";
import Salmon from "../src/assets/images/Lachs.webp";
import NewYork from "../src/assets/images/NewYork.webp";
import BirdAbstract from "../src/assets/images/Vogel_abstrakt.webp";

const Illustration = () => {
    const { t } = useTranslation("pages", { keyPrefix: "editorial" });

    return (
        <>
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
                            src={NewYork}
                            alt="Illustration Wort NewYork"
                            loading="lazy"
                        />
                    </div>
                </div>

                <EditorialDigitalIllustrations_2 />

                <div className="md:col-start-2 md:col-span-2 mx-auto">
                    <div className="flex justify-center">
                        <img
                            src={Salmon}
                            alt="Illustration Wort Salmon"
                            loading="lazy"
                        />
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

                <div className="md:col-start-2 md:col-span-2 mx-auto">
                    <div className="flex justify-center">
                        <img
                            src={BirdAbstract}
                            alt="Illustration abstrakter Vogel"
                            loading="lazy"
                            className="animate-flying mb-6"
                        />
                    </div>
                </div>
            </MainLayout>
        </>
    );
};

export default Illustration;
