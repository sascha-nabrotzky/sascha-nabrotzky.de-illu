import React from "react";
import deranfang from "../src/assets/DerAnfang.jpg";

function Photography() {
    return (
      <>
        <h1 className="absolute bottom-8 opacity-20 tracking-wider break-all font-serif text-8xl ml-16 transition-filter duration-300 hover:blur">
          Fotografie
        </h1>
        <div className="md:col-start-2 md:col-span-1 text-lg tracking-wider">
          <h3>Fotografie</h3>
          <p>
            Hier kommt ein Slider mit Fotos hin.
          </p>
        </div>
        <div className="md:col-start-3 md:col-span-2 flex overflow-hidden place-items-center max-h-96">
          <img className="w-full" src={deranfang} alt="Collage" />
        </div>
      </>
    )
};

export default Photography;