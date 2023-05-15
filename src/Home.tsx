import React from "react";
import deranfang from "../src/assets/images/DerAnfang.jpg";

const Home = () => {
  return (
    <>
      <h1 className="absolute bottom-8 opacity-20 tracking-wider break-all font-serif text-8xl ml-8 md:ml-16 transition-filter duration-300 hover:blur">
        Über mich
      </h1>
      <div className="md:col-start-2 md:col-span-1 text-lg tracking-wider">
        <h3>Hallo!</h3>
        <p>
          Neben meinem Hauptjob als Webdesigner (UI/UX) habe ich noch Illustration und das erstellen von Kinderbüchern als weitere Leidenschaft.
        </p>
      </div>
      <div className="md:col-start-3 md:col-span-2 flex overflow-hidden place-items-center max-h-96">
        <img className="w-full" src={deranfang} alt="Collage" />
      </div>
    </>
  );
}

export default Home;
