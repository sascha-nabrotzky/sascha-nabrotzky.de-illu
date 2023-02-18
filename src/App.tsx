import React from "react";
import deranfang from "../src/assets/DerAnfang.jpg";
import instaLogo from "../src/assets/instagram-logo.svg";
import globeIcon from "../src/assets/www-globe_white.svg";
import "./App.css";

function App() {
  return (
    <div className="App grid">
      <header className="flex p-4">
        <div className="types flex flex-wrap justify-between">
          <h2 className="letter font-sans mx-12">S</h2>
          <h2 className="letter font-sans mx-12">A</h2>
          <h2 className="letter font-sans mx-12">S</h2>
          <h2 className="letter font-sans mx-12">C</h2>
          <h2 className="letter font-sans mx-12">H</h2>
          <h2 className="letter font-sans mx-12">A</h2>
          <h2 className="letter font-serif mx-12">N</h2>
          <h2 className="letter font-serif mx-12">A</h2>
          <h2 className="letter font-serif mx-12">B</h2>
          <h2 className="letter font-serif mx-12">R</h2>
          <h2 className="letter font-serif mx-12">O</h2>
          <h2 className="letter font-serif mx-12">T</h2>
          <h2 className="letter font-serif mx-12">Z</h2>
          <h2 className="letter font-serif mx-12">K</h2>
          <h2 className="letter font-serif mx-12">Y</h2>
        </div>
      </header>
      <main className="grid gap-16">
        <h1 className="absolute bottom-8 opacity-20 tracking-wider break-all font-serif ml-16">Grafikdesign &amp; Illustration</h1>
        <div className="text-lg tracking-wider">
          <h3>Hallo!</h3>
          <p>
            Neben meinem Hauptjob als Webdesigner (UI/UX) habe ich noch
            weitere Leidenschaften und zwar Grafikdesign und Illustration. In diesen
            Bereichen experimentiere ich gerne mit handgemachten Collagen,
            Illustrationen, Schriften, Fotos und alles, was man kombinieren
            kann. Ich schärfe auf diesem Wege ebenfalls meine Intuition für
            das UI-Design meiner Websites und Apps.
          </p>
        </div>
        <div className="image-right flex overflow-hidden place-items-center">
          <img className="w-full" src={deranfang} alt="Collage" />
        </div>
      </main>
      <footer className="flex justify-center p-4">
        <a className="mx-4 hover:opacity-50"
          href="https://sascha-nabrotzky.github.io"
          target="_blank"
          title="Zu meiner GitHub-Website"
        >
          <img src={globeIcon} />
        </a>
        <a className="mx-4 hover:opacity-50"
          href="https://www.instagram.com/sn.de.sign"
          target="_blank"
          title="Zu meinem Instagram-Account"
        >
          <img src={instaLogo} />
        </a>
      </footer>
      <div className="yellow-line bg-yellow-400" />
    </div>
  );
}

export default App;
