import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navigation from "./Navigation";
import About from "./About";
import Illustration from "./Illustration";
import Childrensbooks from "./Childrensbooks";
import Impressum from "./Impressum";
import Datenschutz from "./Datenschutz";
import { ReactComponent as InstaLogo } from "../src/assets/icons/instagram-logo.svg";
import { ReactComponent as GlobeIcon } from "../src/assets/icons/www-globe_white.svg";
import { ReactComponent as MailIcon } from "../src/assets/icons/mail.svg";
import { ReactComponent as Logo } from "../src/assets/images/logo_sn.svg";
import colorSplat from "./assets/images/circle.png";
import "./App.css";

const App = () => {
    const [currentMail, setMail] = useState("");

    function addMail() {
        setMail('mailto:illustration@sascha-nabrotzky.de')
    }

    return (
        <Router>
            <div className="App relative grid h-screen grid-rows-[min-content_1fr_min-content]">

                <Navigation />

                <header className="relative flex justify-center mt-48 mb-24 md:mt-16 md:mb-28">
                    <Logo className="w-full max-w-md text-stone-200 z-10 pt-10" />
                    <img className="absolute h-60 sm:h-64" src={colorSplat} alt="watercolor splat" />
                </header>

                <main className="grid gap-16 p-4 md:p-0 md:grid-cols-default text-stone-200">
                    <Routes>
                        <Route path="/" element={<Illustration />} />
                        <Route path="/kinderbuecher" element={<Childrensbooks />} />
                        <Route path="/ueber-mich" element={<About />} />
                        <Route path="/impressum" element={<Impressum />} />
                        <Route path="/datenschutz" element={<Datenschutz />} />
                    </Routes>
                </main>

                <footer className="flex flex-col items-center pt-16 pb-10">
                    <div className="flex">
                        <a
                            className="mx-4 transition-color duration-200 text-stone-200 hover:text-terracotta"
                            href="https://sascha-nabrotzky.github.io"
                            target="_blank"
                            title="Zu meiner GitHub-Website"
                        >
                            <GlobeIcon className="h-8" />
                        </a>
                        <a
                            className="mx-4 transition-color duration-200 text-stone-200 hover:text-terracotta"
                            href="https://www.instagram.com/sascha_nabrotzky"
                            target="_blank"
                            title="Zu meinem Instagram-Account"
                        >
                            <InstaLogo className="h-8" />
                        </a>
                        <a
                            className="mx-4 transition-color duration-300 text-stone-200 hover:text-terracotta"
                            href={`${currentMail}`}
                            target="_blank"
                            rel="noreferrer"
                            title="Schreib mir eine E-Mail"
                            onClick={addMail}
                        >
                            <MailIcon className="h-8" />
                        </a>
                    </div>
                    <div className="flex mt-6 pt-5 border-t border-stone-200">
                        <Link to="/impressum"className="text-stone-200 hover:text-terracotta transition-color duration-200 uppercase tracking-widest text-xs mx-4">Impressum</Link>
                        <Link to="/datenschutz"className="text-stone-200 hover:text-terracotta transition-color duration-200 uppercase tracking-widest text-xs mx-4">Datenschutz</Link>
                    </div>
                </footer>
            </div>
        </Router>
    );
};

export default App;
