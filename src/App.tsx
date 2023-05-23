import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Illustration from "./Illustration";
import Childrensbooks from "./Childrensbooks";
import instaLogo from "../src/assets/instagram-logo.svg";
import globeIcon from "../src/assets/www-globe_white.svg";
import { ReactComponent as Logo } from "../src/assets/images/logo_sn.svg";
import "./App.css";
import Navigation from "./Navigation";

const App = () => {
    return (
        <Router>
            <div className="App relative grid h-screen grid-rows-[min-content_1fr]">
                <header className="flex justify-center p-4 mt-48 md:mt-8 mb-8 md:mb-16">
                    <Logo className="w-full max-w-md text-white" />
                </header>

                <Navigation />

                <main className="grid gap-16 p-4 md:p-0 md:grid-cols-default text-white">
                    <Routes>
                        <Route path="/" element={<Illustration />} />
                        <Route path="/kinderbuecher" element={<Childrensbooks />} />
                        <Route path="/ueber-mich" element={<About />} />
                    </Routes>
                </main>

                <footer className="flex justify-center p-4 z-10">
                    <a
                        className="mx-4 transition-opacity duration-300 hover:opacity-50"
                        href="https://sascha-nabrotzky.github.io"
                        target="_blank"
                        title="Zu meiner GitHub-Website"
                    >
                        <img className="h-8" src={globeIcon} />
                    </a>
                    <a
                        className="mx-4 transition-opacity duration-300 hover:opacity-50"
                        href="https://www.instagram.com/sascha_nabrotzky"
                        target="_blank"
                        title="Zu meinem Instagram-Account"
                    >
                        <img className="h-8" src={instaLogo} />
                    </a>
                </footer>
            </div>
        </Router>
    );
};

export default App;
