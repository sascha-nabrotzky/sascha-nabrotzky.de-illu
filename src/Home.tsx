import React from "react";
import deranfang from "../src/assets/DerAnfang.jpg";

function Home() {
    return (
        <>
        <h1 className="absolute bottom-8 opacity-20 tracking-wider break-all font-serif text-8xl ml-16 transition-filter duration-300 hover:blur">
          Grafikdesign &amp; Illustration
        </h1>
        <div className="md:col-start-2 md:col-span-1 text-lg tracking-wider">
          <h3>Hallo!</h3>
          <p>
            Neben meinem Hauptjob als Webdesigner (UI/UX) habe ich noch weitere
            Leidenschaften und zwar Grafikdesign, Fotografie und Illustration. In diesen
            Bereichen experimentiere ich gerne mit handgemachten Collagen,
            Illustrationen, Schriften, Fotos und alles, was man kombinieren
            kann. Ich schärfe auf diesem Wege ebenfalls meine Intuition für das
            UI-Design meiner Websites und Apps.
          </p>
        </div>
        <div className="md:col-start-3 md:col-span-2 flex overflow-hidden place-items-center max-h-96">
          <img className="w-full" src={deranfang} alt="Collage" />
        </div>
        </>
    )
};

export default Home;