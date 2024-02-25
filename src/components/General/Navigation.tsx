import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

function Navigation() {
    const { t } = useTranslation("navigation");
    const [translateNav, setTranslateNav] = useState(true);

    return (
        <>
            <div className="fixed top-4 lg:top-8 z-20">
                <nav className="hidden sm:flex flex-col gap-2 text-white tracking-widest uppercase">
                    <Link
                        to="/"
                        className="bg-pelorous-400 px-4 py-2 rounded-ee-xl hover:bg-pharlap-600 transition-colors duration-200 shadow-default"
                    >
                        {t("children")}
                    </Link>
                    <Link
                        to="/editorial"
                        className="bg-pelorous-400 px-4 py-2 rounded-ee-xl hover:bg-pharlap-600 transition-colors duration-200 shadow-default"
                    >
                        {t("editorial")}
                    </Link>
                    <Link
                        to="/ueber-mich"
                        className="bg-pelorous-400 px-4 py-2 rounded-ee-xl hover:bg-pharlap-600 transition-colors duration-200 shadow-default"
                    >
                        {t("about")}
                    </Link>
                </nav>

                <div
                    className={`sm:hidden fixed top-4 lg:top-8 z-20 flex ${
                        translateNav ? "-translate-x-[calc(100%-2.5rem)]" : null
                    } transition-transform duration-300`}
                >
                    <button
                        type="button"
                        className="flex flex-col h-10 w-10 p-3 justify-between bg-pelorous-400 order-2 rounded-r"
                        onClick={(): void => {
                            setTranslateNav(!translateNav);
                        }}
                    >
                        <div className="bg-white h-0.5 w-full" />
                        <div className="bg-white h-0.5 w-full" />
                        <div className="bg-white h-0.5 w-full" />
                    </button>

                    <nav className="flex flex-col bg-pelorous-400 text-white rounded-ee-xl order-1 shadow-default">
                        <Link
                            to="/"
                            className="py-3 px-4"
                            onClick={() => {
                                setTranslateNav(!translateNav);
                            }}
                        >
                            {t("children")}
                        </Link>
                        <Link
                            to="/editorial"
                            className="py-3 px-4"
                            onClick={() => {
                                setTranslateNav(!translateNav);
                            }}
                        >
                            {t("editorial")}
                        </Link>
                        <Link
                            to="/ueber-mich"
                            className="py-3 px-4"
                            onClick={() => {
                                setTranslateNav(!translateNav);
                            }}
                        >
                            {t("about")}
                        </Link>
                    </nav>
                </div>

                <LanguageSwitcher />
            </div>
        </>
    );
}

export default Navigation;
