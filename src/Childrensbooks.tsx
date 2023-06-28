import React from "react";
import image1 from "../src/assets/images/Book4.webp";
import image2 from "../src/assets/images/Book1.webp";
import image3 from "../src/assets/images/Book2.webp";
import image4 from "../src/assets/images/Book3.webp";

const Childrensbooks = () => {
    return (
        <>
            <div className="md:col-start-2 md:col-span-1 max-md:px-4 text-lg tracking-wider">
                <h1 className="uppercase tracking-widest text-2xl mb-4">
                     Kinderbücher
                </h1>
                <h2 className="mb-3">Aus einer Idee entstand eine Zusammenarbeit ...</h2>
                <p>und jetzt sind schon drei Kinderbücher von mir privat illustriert worden. 
          Am Anfang stand das Characterdesign der Hauptfiguren und ein Farbschema wurde ausgearbeitet. Die Skizzen wurden eingescannt und digital weiterverarbeitet, um Farben und Hintergründe besser anpassen zu können.</p>
                <p>Für das vierte Buch, habe ich die drei vorherigen komplett überarbeitet und die verschiedenen Zeichenstile so gut es geht angeglichen. Alle Seiten enthalten doppleseitige Illustrationen.</p>
            </div>
            <div className="md:col-start-3 md:col-span-2 h-96 md:h-72 lg:h-80 xl:h-[30rem] 2xl:h-[38rem]">
                <p className="text-xs text-center text-gray-400 w-full tracking-widest">Swipe down / Website under contruction</p>
            </div>
            <section className="grid grid-cols-1 sm:grid-cols-2 col-start-1 md:col-span-4 gap-4 p-4 bg-stone-700">
                <h3 className="text-2xl col-span-1 sm:col-span-2 mb-2">Übersicht meiner Kinderbücher</h3>
                <figure>
                    <img
                        src={image2}
                        alt="Mein erstes Kinderbuch"
                        loading="lazy"
                    />
                    <figcaption className="mt-2 text-xs">Mein erstes Kinderbuch</figcaption>
                </figure>
                <figure>
                    <img
                        src={image3}
                        alt="Mein zweites Kinderbuch"
                        loading="lazy"
                    />
                    <figcaption className="mt-2 text-xs">Mein zweites Kinderbuch</figcaption>
                </figure>
                <figure>
                    <img
                        src={image4}
                        alt="Mein drittes Kinderbuch"
                        loading="lazy"
                    />
                    <figcaption className="mt-2 text-xs">Mein drittes Kinderbuch</figcaption>
                </figure>
                <figure>
                    <img
                        src={image1}
                        alt="Mein viertes Kinderbuch"
                        loading="lazy"
                    />
                    <figcaption className="mt-2 text-xs">Mein viertes Kinderbuch</figcaption>
                </figure>
            </section>
        </>
    );
}

export default Childrensbooks;
