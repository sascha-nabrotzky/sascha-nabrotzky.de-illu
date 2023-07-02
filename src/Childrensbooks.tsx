import React from "react";
import Book4 from "../src/assets/images/Book4.webp";
import SpreadEating from "../src/assets/images/SpreadpageEating.webp"
import SpreadBlowing from "../src/assets/images/SpreadpageBlowing.webp"
import SpreadWiese from "../src/assets/images/SpreadpageWiese.webp"
import SpreadForest from "../src/assets/images/SpreadpageForest.webp"

const Childrensbooks = () => {
    return (
        <>
            <div className="md:col-start-2 md:col-span-1 max-md:px-4 text-lg tracking-wider">
                <h1 className="uppercase tracking-widest text-2xl mb-4">
                     Kinderbücher
                </h1>
                <h2 className="mb-3">Aus einer Idee entstand eine Zusammenarbeit ...</h2>
                <p>
                    und jetzt sind schon drei Kinderbücher von mir privat illustriert worden. 
                    Am Anfang stand das Characterdesign der Hauptfiguren und ein Farbschema wurde ausgearbeitet. Die Skizzen wurden eingescannt und digital weiterverarbeitet, um Farben und Hintergründe besser anpassen zu können.
                </p>
                <p>
                    Für das vierte Buch, habe ich die drei vorherigen komplett überarbeitet und die verschiedenen Zeichenstile so gut es geht angeglichen. Alle Seiten enthalten doppleseitige Illustrationen.
                </p>
            </div>
            <div className="md:col-start-3 md:col-span-1">
                <div className="flex justify-center">
                    <img
                        src={Book4}
                        alt="Cover meines vierten Kinderbuches"
                        loading="lazy"
                    />
                </div>
            </div>

            <section className="grid grid-cols-1 sm:grid-cols-2 col-start-1 md:col-span-4 gap-4 p-4 bg-stone-700">
                <h3 className="text-2xl col-span-1 sm:col-span-2 mb-2 uppercase tracking-wider">&bdquo;Die Puschelblüte&ldquo;</h3>
                <figure>
                    <img
                        src={SpreadEating}
                        className="w-full"
                        alt="Doppelseite meines zweiten Kinderbuches"
                        loading="lazy"
                    />
                    <figcaption className="mt-2 text-xs">Doppelseite meines zweiten Kinderbuches</figcaption>
                </figure>
                <figure>
                    <img
                        src={SpreadBlowing}
                        className="w-full"
                        alt="Doppelseite meines zweiten Kinderbuches"
                        loading="lazy"
                    />
                    <figcaption className="mt-2 text-xs">Doppelseite meines zweiten Kinderbuches</figcaption>
                </figure>
            </section>

            <div className="md:col-start-3 md:col-span-1 max-md:px-4 text-lg tracking-wider">
                <h2 className="uppercase tracking-widest text-2xl mb-4">Digitale Arbeitsweise</h2>
                <p>Wenn es darauf ankommt und speziell bei meinen Kinderbüchern arbeite ich von Anfang an digital, denn nur so
                    kann ich leichter Korrekturen durchführen, wenn noch etwas auffallen sollte. Für den Druck der Bücher muss ich eh alles
                    digital vorliegen haben und ich spare mir die Übertragung aus dem Analogen.
                </p>
            </div>


            <section className="grid grid-cols-1 sm:grid-cols-2 col-start-1 md:col-span-4 gap-4 p-4 bg-stone-700">
                <h3 className="text-2xl col-span-1 sm:col-span-2 mb-2 uppercase tracking-wider">&bdquo;Wach auf kleiner Bär&ldquo;</h3>
                <figure>
                    <img
                        src={SpreadWiese}
                        className="w-full"
                        alt="Doppelseite meines zweiten Kinderbuches"
                        loading="lazy"
                    />
                    <figcaption className="mt-2 text-xs">Doppelseite meines ersten Kinderbuches</figcaption>
                </figure>
                <figure>
                    <img
                        src={SpreadForest}
                        className="w-full"
                        alt="Doppelseite meines zweiten Kinderbuches"
                        loading="lazy"
                    />
                    <figcaption className="mt-2 text-xs">Doppelseite meines ersten Kinderbuches</figcaption>
                </figure>
            </section>
        </>
    );
}

export default Childrensbooks;
