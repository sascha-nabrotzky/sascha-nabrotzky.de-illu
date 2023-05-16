import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Illustration from "./Illustration";
import Childrensbooks from "./Childrensbooks";
import instaLogo from "../src/assets/instagram-logo.svg";
import globeIcon from "../src/assets/www-globe_white.svg";
import "./App.css";
import Navigation from "./Navigation";

const App = () => {
  return (
    <Router>
      <div className="App relative grid h-screen grid-rows-[min-content_1fr]">
        <header className="flex p-4 mb-8">
          <div className="types flex flex-wrap justify-between">
            <h2 className="text-4xl md:text-8xl font-sans mx-6 md:mx-12">S</h2>
            <h2 className="text-4xl md:text-8xl font-sans mx-6 md:mx-12">A</h2>
            <h2 className="text-4xl md:text-8xl font-sans mx-6 md:mx-12">S</h2>
            <h2 className="text-4xl md:text-8xl font-sans mx-6 md:mx-12">C</h2>
            <h2 className="text-4xl md:text-8xl font-sans mx-6 md:mx-12">H</h2>
            <h2 className="text-4xl md:text-8xl font-sans mx-6 md:mx-12">A</h2>
            <h2 className="text-4xl md:text-8xl font-serif mx-6 md:mx-12">N</h2>
            <h2 className="text-4xl md:text-8xl font-serif mx-6 md:mx-12">A</h2>
            <h2 className="text-4xl md:text-8xl font-serif mx-6 md:mx-12">B</h2>
            <h2 className="text-4xl md:text-8xl font-serif mx-6 md:mx-12">R</h2>
            <h2 className="text-4xl md:text-8xl font-serif mx-6 md:mx-12">O</h2>
            <h2 className="text-4xl md:text-8xl font-serif mx-6 md:mx-12">T</h2>
            <h2 className="text-4xl md:text-8xl font-serif mx-6 md:mx-12">Z</h2>
            <h2 className="text-4xl md:text-8xl font-serif mx-6 md:mx-12">K</h2>
            <h2 className="text-4xl md:text-8xl font-serif mx-6 md:mx-12">Y</h2>
          </div>
        </header>

        <Navigation />

        <main className="grid gap-16 p-4 md:p-0 md:grid-cols-default">
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

        <div className="max-md:hidden w-28 -skew-x-12 bg-yellow-400/40 h-full fixed left-1/4 mix-blend-multiply pointer-events-none" />
      </div>
    </Router>
  );
};

export default App;
