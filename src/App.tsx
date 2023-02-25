import React from "react";
import deranfang from "../src/assets/DerAnfang.jpg";
import instaLogo from "../src/assets/instagram-logo.svg";
import globeIcon from "../src/assets/www-globe_white.svg";
import "./App.css";

function App() {
  return (
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
        <h1 className="absolute bottom-8 opacity-20 tracking-wider break-all font-serif text-8xl ml-16 transition-filter duration-300 hover:blur">
          Grafikdesign &amp; Illustration
        </h1>
        <div className="md:col-start-2 md:col-span-1 text-lg tracking-wider">
          <h3>Hallo!</h3>
          <p>
            Neben meinem Hauptjob als Webdesigner (UI/UX) habe ich noch weitere
            Leidenschaften und zwar Grafikdesign und Illustration. In diesen
            Bereichen experimentiere ich gerne mit handgemachten Collagen,
            Illustrationen, Schriften, Fotos und alles, was man kombinieren
            kann. Ich schärfe auf diesem Wege ebenfalls meine Intuition für das
            UI-Design meiner Websites und Apps.
          </p>
        </div>
        <div className="md:col-start-3 md:col-span-2 flex overflow-hidden place-items-center max-h-96">
          <img className="w-full" src={deranfang} alt="Collage" />
        </div>
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
  );
}

export default App;
