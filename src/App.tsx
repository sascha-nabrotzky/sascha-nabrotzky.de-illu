import React from "react";
import deranfang from "../src/assets/DerAnfang.jpg";
import instaLogo from "../src/assets/instagram-logo.svg";
import globeIcon from "../src/assets/www-globe_white.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <div className="types">
          <h2 className="letter thin sans">S</h2>
          <h2 className="letter thin sans">A</h2>
          <h2 className="letter thin sans">S</h2>
          <h2 className="letter thin sans">C</h2>
          <h2 className="letter thin sans">H</h2>
          <h2 className="letter thin sans">A</h2>
          <h2 className="letter">N</h2>
          <h2 className="letter">A</h2>
          <h2 className="letter">B</h2>
          <h2 className="letter">R</h2>
          <h2 className="letter">O</h2>
          <h2 className="letter">T</h2>
          <h2 className="letter">Z</h2>
          <h2 className="letter">K</h2>
          <h2 className="letter">Y</h2>
        </div>
      </header>
      <main>
        <h1>Grafikdesign &amp; Typografie</h1>
        <div className="text-normal">
          <h3>Hallo!</h3>
          <p>
            Neben meinem Hauptjob als Webdesigner (UI/UX) habe ich noch eine
            weitere Leidenschaft und zwar Grafikdesign und Typografie. In diesem
            Bereich experimentiere ich gerne mit handgemachten Collagen,
            Illustrationen, Schriften, Fotos und alles, was man kombinieren
            kann. Ich schärfe auf diesem Wege ebenfalls meine Intuition für
            UI-Design meiner Websites und Apps, die ich programmiere.
          </p>
        </div>
        <div className="image-right">
          <img src={deranfang} alt="Collage" />
        </div>
      </main>
      <footer>
        <a
          href="https://sascha-nabrotzky.github.io"
          target="_blank"
          title="Zu meiner GitHub-Website"
        >
          <img src={globeIcon} />
        </a>
        <a
          href="https://www.instagram.com/sn.de.sign"
          target="_blank"
          title="Zu meinem Instagram-Account"
        >
          <img src={instaLogo} />
        </a>
      </footer>
      <div className="yellow-line" />
    </div>
  );
}

export default App;
