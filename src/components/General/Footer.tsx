import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import InstaLogo from "../../assets/icons/instagram-logo.svg?react"; //?react and svgr/client in vite-env.d.ts is needed to make the svg work
import BehanceLogo from "../../assets/icons/behance-logo.svg?react";
import LinkedInLogo from "../../assets/icons/linkedin-logo.svg?react";
import MailIcon from "../../assets/icons/mail.svg?react";

const Footer = () => {
    const { t } = useTranslation("footer");
    const [currentMail, setMail] = useState("anti@spam-mail.de");

    function addMail() {
        setMail("mailto:illustration@sascha-nabrotzky.de");
    }

    return (
        <footer className="flex flex-col items-center pt-16 pb-20">
            <div className="flex">
                <Link
                    className="mx-4 transition-color duration-200 text-stone-700 hover:text-pharlap-600"
                    to="https://www.instagram.com/sascha.illustrates"
                    target="_blank"
                    title={t("instagram")}
                >
                    <InstaLogo className="h-8" />
                </Link>
                <Link
                    className="mx-4 transition-color duration-200 text-stone-700 hover:text-pharlap-600"
                    to="https://www.behance.net/sascha-nabrotzky"
                    target="_blank"
                    title={t("behance")}
                >
                    <BehanceLogo className="h-8" />
                </Link>
                <Link
                    className="mx-4 transition-color duration-200 text-stone-700 hover:text-pharlap-600"
                    to="https://www.linkedin.com/in/sascha-nabrotzky/"
                    target="_blank"
                    title={t("linkedin")}
                >
                    <LinkedInLogo className="h-8" />
                </Link>
                <Link
                    className="mx-4 transition-color duration-300 text-stone-700 hover:text-pharlap-600"
                    to={`${currentMail}`}
                    target="_blank"
                    rel="noreferrer"
                    title={t("mail")}
                    onClick={addMail}
                >
                    <MailIcon className="h-8" />
                </Link>
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
};

export default Footer;
