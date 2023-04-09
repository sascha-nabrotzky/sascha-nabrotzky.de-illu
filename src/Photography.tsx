import React from "react";
import { Carousel } from "flowbite-react";
import image1 from "../src/assets/images/1.jpg";
import image2 from "../src/assets/images/2.jpg";
import image3 from "../src/assets/images/3.jpg";
import image4 from "../src/assets/images/4.jpg";
import image5 from "../src/assets/images/5.jpg";

function Photography() {
  return (
    <>
      <h1 className="absolute bottom-8 opacity-20 tracking-wider break-all font-serif text-8xl ml-16 transition-filter duration-300 hover:blur">
        Fotografie
      </h1>
      <div className="md:col-start-2 md:col-span-1 text-lg tracking-wider">
        <h3>Fotografie</h3>
        <p>Hier kommt der Text zu den Fotos hin.</p>
      </div>
      <div className="md:col-start-3 md:col-span-2 h-96 md:h-72 lg:h-80 xl:h-[30rem] 2xl:h-[38rem]">
        <Carousel>
          <img
            src={image1}
            alt="..."
          />
          <img
            src={image2}
            alt="..."
          />
          <img
            src={image3}
            alt="..."
          />
          <img
            src={image4}
            alt="..."
          />
          <img
            src={image5}
            alt="..."
          />
        </Carousel>
      </div>
    </>
  );
}

export default Photography;
