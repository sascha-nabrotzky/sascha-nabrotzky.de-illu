import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import InstaLogo from "../assets/icons/instagram-logo.svg?react"; //?react and svgr/client in vite-env.d.ts is needed to make the svg work
import MailIcon from "../assets/icons/mail.svg?react";

function Footer() {
  const { t } = useTranslation("footer");
  const [currentMail, setMail] = useState("anti@spam-mail.de");

  function addMail() {
    setMail("mailto:illustration@sascha-nabrotzky.de");
  }

  return (
    <footer className="flex flex-col items-center pt-16 pb-10">
      <div className="flex">
        <a
          className="mx-4 transition-color duration-200 text-stone-700 hover:text-pharlap-600"
          href="https://www.instagram.com/sascha.illustrates"
          target="_blank"
          title={t("instagram")}
        >
          <InstaLogo className="h-8" />
        </a>
        <a
          className="mx-4 transition-color duration-300 text-stone-700 hover:text-pharlap-600"
          href={`${currentMail}`}
          target="_blank"
          rel="noreferrer"
          title={t("mail")}
          onClick={addMail}
        >
          <MailIcon className="h-8" />
        </a>
      </div>
      <div className="flex mt-6 pt-5 border-t border-stone-700">
        <Link
          to="/impressum"
          className="text-stone-700 hover:text-pharlap-600 transition-color duration-200 uppercase tracking-widest text-xs mx-4"
        >
          {t("impressum")}
        </Link>
        <Link
          to="/datenschutz"
          className="text-stone-700 hover:text-pharlap-600 transition-color duration-200 uppercase tracking-widest text-xs mx-4"
        >
          {t("datenschutz")}
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
