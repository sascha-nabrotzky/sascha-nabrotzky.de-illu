import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Photography from "./Photography";
import instaLogo from "../src/assets/instagram-logo.svg";
import globeIcon from "../src/assets/www-globe_white.svg";
import "./App.css";

function App() {
  return (
    <Router>
    <div className="App grid h-screen grid-rows-[min-content_1fr]">
      <header className="flex p-4 mb-8">
        <div className="types flex flex-wrap justify-between">
          <h2 className="text-8xl font-sans mx-12">S</h2>
          <h2 className="text-8xl font-sans mx-12">A</h2>
          <h2 className="text-8xl font-sans mx-12">S</h2>
          <h2 className="text-8xl font-sans mx-12">C</h2>
          <h2 className="text-8xl font-sans mx-12">H</h2>
          <h2 className="text-8xl font-sans mx-12">A</h2>
          <h2 className="text-8xl font-serif mx-12">N</h2>
          <h2 className="text-8xl font-serif mx-12">A</h2>
          <h2 className="text-8xl font-serif mx-12">B</h2>
          <h2 className="text-8xl font-serif mx-12">R</h2>
          <h2 className="text-8xl font-serif mx-12">O</h2>
          <h2 className="text-8xl font-serif mx-12">T</h2>
          <h2 className="text-8xl font-serif mx-12">Z</h2>
          <h2 className="text-8xl font-serif mx-12">K</h2>
          <h2 className="text-8xl font-serif mx-12">Y</h2>
        </div>
      </header>

      <main className="grid gap-16 p-4 md:p-0 md:grid-cols-[minmax(2rem,_1fr)_repeat(2,_minmax(0,_30rem))_minmax(_2rem,_1fr)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photo" element={<Photography />} />
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
          href="https://www.instagram.com/sn.de.sign"
          target="_blank"
          title="Zu meinem Instagram-Account"
        >
          <img className="h-8" src={instaLogo} />
        </a>
      </footer>

      <div className="yellow-line w-56 -skew-x-12 bg-yellow-400 h-full fixed left-1/2 mix-blend-multiply pointer-events-none" />
    </div>
    </Router>
  );
}

export default App;
