import React from "react";
import deranfang from "../src/assets/images/DerAnfang.jpg";

const Home = () => {
  return (
    <>
      <h1 className="absolute bottom-8 opacity-20 uppercase tracking-widest break-all font-serif text-8xl ml-8 md:ml-16 transition-filter duration-300 hover:blur">
        Über mich
      </h1>
      <div className="md:col-start-2 md:col-span-1 text-lg tracking-wider">
        <h2 className="mb-4">Zeichnerische Kreativität war schon immer sehr ausgeprägt bei mir ...</h2>
        <p>das merkten auch meine Lehrer, wenn sie mal meine Schulbücher oder Arbeitshefte in die Finger bekamen.</p>
        <p>
          Neben meinem Hauptjob als Webdesigner (UI/UX) habe ich noch Illustration und das erstellen von Kinderbüchern als weitere Leidenschaft, welche ich als Hobby betreibe.
        </p>
        <p></p>
      </div>
      <div className="md:col-start-3 md:col-span-2 flex overflow-hidden place-items-center h-96 md:h-72 lg:h-80 xl:h-[30rem] 2xl:h-[38rem]">
        <img className="w-full" src={deranfang} alt="Collage" />
      </div>
    </>
  );
}

export default Home;
