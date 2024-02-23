import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

function Navigation() {
    const { t } = useTranslation("navigation");

    return (
        <div className="fixed top-4 lg:top-8 z-20">
            <nav className="flex flex-col gap-2 text-white tracking-widest uppercase">
                <Link
                    to="/"
                    className="bg-pelorous-400 px-4 py-2 rounded-ee-xl hover:bg-pharlap-600 transition-colors duration-200 shadow-default"
                >
                    {t("illustration")}
                </Link>
                <Link
                    to="/kinderbuecher"
                    className="bg-pelorous-400 px-4 py-2 rounded-ee-xl hover:bg-pharlap-600 transition-colors duration-200 shadow-default"
                >
                    {t("childrensBooks")}
                </Link>
                <Link
                    to="/ueber-mich"
                    className="bg-pelorous-400 px-4 py-2 rounded-ee-xl hover:bg-pharlap-600 transition-colors duration-200 shadow-default"
                >
                    {t("about")}
                </Link>
            </nav>
            <LanguageSwitcher />
        </div>
    );
}

export default Navigation;
