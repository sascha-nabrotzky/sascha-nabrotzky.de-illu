import React from "react";
import { useTranslation } from "react-i18next";
import MainLayout from "./components/General/MainLayout";
import EditorialDigitalIllustrations from "./components/EditorialDigitalIllustrations";

function Illustration() {
  const { t } = useTranslation("pages", { keyPrefix: "editorial" });

  return (
    <MainLayout>
      <div className="md:col-start-2 md:col-span-1 max-md:px-4 text-lg tracking-wider">
        <h1 className="uppercase text-2xl mb-4 font-bold tracking-wider">
          {t("title")}
        </h1>
        <p className="font-serif">{t("text1")}</p>
      </div>

      <EditorialDigitalIllustrations />

      <div className="md:col-start-2 md:col-span-1 max-md:px-4 text-lg tracking-wider">
        <h1 className="uppercase text-2xl mb-4 font-bold tracking-wider">
          {t("title2")}
        </h1>
        <p className="font-serif">{t("text2")}</p>
      </div>
    </MainLayout>
  );
}

export default Illustration;
