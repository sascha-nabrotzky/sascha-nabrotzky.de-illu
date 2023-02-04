import React from "react";
import logo from "../src/assets/logo.svg";
import baerBuch from "../src/assets/BaerAbenteuerBuch.jpg";
import instaLogo from "../src/assets/instagram-logo.svg";
import globeIcon from "../src/assets/www-globe_white.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <img
          alt="Logo Sascha Nabrotzky Illustrationen"
          className="logo mb-2 mt-2"
          src={logo}
        />
      </header>
      <main>
        <h1>Illustration &amp; Charakter-Design</h1>
        <div className="text-normal">
          <h3>Hallo!</h3>
          <p>
            {" "}
            Neben meinem Hauptjob als Webdesigner (UI/UX) habe ich noch eine
            weitere Leidenschaft und zwar Illustration und Charakter-Design für
            Kinderbücher, welches ich als Hobby betreibe, wenn ich etwas Zeit
            freischaffen kann oder um den Kopf frei zu bekommen. Wie so viele
            kreative Menschen, habe auch ich seit kindesalter meine
            Zeichenstifte nie so richtig aus der Hand gelegt, später konnte ich
            in meiner Ausbildung das Kreative mit dem Computer verbinden.{" "}
          </p>
        </div>
        <div className="image-right">
          <img src={baerBuch} />
        </div>
      </main>
      <footer className="mt-1">
        <a
          href="https://sascha-nabrotzky.github.io"
          target="_blank"
          title="Zu meiner GitHub-Website"
        >
          <img src={globeIcon} />
        </a>
        <a
          href="https://www.instagram.com/sascha_nabrotzky"
          target="_blank"
          title="Zu meinem Instagram-Account"
        >
          <img src={instaLogo} />
        </a>
      </footer>
    </div>
  );
}

export default App;
