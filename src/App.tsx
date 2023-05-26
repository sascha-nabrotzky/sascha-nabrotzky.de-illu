import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import About from "./About";
import Illustration from "./Illustration";
import Childrensbooks from "./Childrensbooks";
import { ReactComponent as InstaLogo } from "../src/assets/instagram-logo.svg";
import { ReactComponent as GlobeIcon } from "../src/assets/www-globe_white.svg";
import { ReactComponent as Logo } from "../src/assets/images/logo_sn.svg";
import colorSplat from "./assets/images/circle.png";
import "./App.css";

const App = () => {
    return (
        <Router>
            <div className="App relative grid h-screen grid-rows-[min-content_1fr]">

                <header className="relative flex justify-center mt-48 mb-24 md:mt-16 md:mb-28">
                    <Logo className="w-full max-w-md text-stone-200 z-10 pt-10" />
                    <img className="absolute h-64" src={colorSplat} alt="watercolor splat" />
                </header>

                <Navigation />

                <main className="grid gap-16 p-4 md:p-0 md:grid-cols-default text-stone-200">
                    <Routes>
                        <Route path="/" element={<Illustration />} />
                        <Route path="/kinderbuecher" element={<Childrensbooks />} />
                        <Route path="/ueber-mich" element={<About />} />
                    </Routes>
                </main>

                <footer className="flex justify-center pt-12 pb-10">
                    <a
                        className="mx-4 transition-color duration-300 text-stone-200 hover:text-terracotta"
                        href="https://sascha-nabrotzky.github.io"
                        target="_blank"
                        title="Zu meiner GitHub-Website"
                    >
                        <GlobeIcon className="h-8" />
                    </a>
                    <a
                        className="mx-4 transition-color duration-300 text-stone-200 hover:text-terracotta"
                        href="https://www.instagram.com/sascha_nabrotzky"
                        target="_blank"
                        title="Zu meinem Instagram-Account"
                    >
                        <InstaLogo className="h-8" />
                    </a>
                </footer>
            </div>
        </Router>
    );
};

export default App;
