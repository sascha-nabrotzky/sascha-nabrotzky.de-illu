import React from "react";
import illuBilligfleisch from "../src/assets/images/Billigfleisch_400x600.webp";
import illuDreams from "../src/assets/images/Dreams_400x600.webp";
import illuArtenvielfalt from "../src/assets/images/Artenvielfalt.webp";
import illuKatzenHunde from "../src/assets/images/KatzenHunde_400x600.webp";
import illuBiene from "../src/assets/images/Biene.webp";

const Illustration = () => {
    return (
        <>
            <section className="md:col-start-2 md:col-span-1 max-md:px-4 text-lg tracking-wider">
                <h1 className="uppercase tracking-widest text-2xl mb-4">
                    Illustrationen aus Ladbergen, die die Fantasie beflügeln
                </h1>
                <p>
                    Ich erstelle Illustrationen hauptsächlich im Bereich Kinderbuch, wo ich es immer spannend finde, 
                    Geschichten visuell und emotional zu erzählen.
                </p>
                <p>
                    Am liebsten kombiniere ich Wasserfarben mit Aquarellstiften, Wachspastell, Tinte, Buntstifte, 
                    Acrylfarben und Papiercollagen. <br/>
                    Der Reiz meiner recht intuitiven Mixed-Media-Technik liegt darin, dass man diese nicht immer so
                    kontrollieren kann, wenn man es zulässt und dadurch schnell schöne Zufälle erstellt.<br/>
                    Bei meinen Kinderbüchern arbeite ich meist digital und arbeite immer einen handgemachten, skizzenhaften Look heraus.
                </p>
            </section>
            <div className="md:col-start-3 md:col-span-2 h-96 md:h-72 lg:h-80 xl:h-[30rem] 2xl:h-[38rem]">
                <div className="flex justify-center">
                    <img
                        src={illuBiene}
                        alt="Illustration Biene in Wasserfarben"
                        loading="lazy"
                        className="animate-flying"
                    />
                </div>
            </div>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 col-start-1 md:col-span-4 gap-4 p-4 bg-stone-700">
                <h3 className="text-2xl col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 mb-2">Highlights digitale Illustrationen</h3>
                <figure>
                    <img
                        src={illuArtenvielfalt}
                        alt="Illustration Armut in USA"
                        loading="lazy"
                        className=""
                    />
                    <figcaption className="mt-2 text-xs">Artenvielfalt (Coverillustration eines Magazins)</figcaption>
                </figure>
                <figure>
                    <img
                        src={illuBilligfleisch}
                        alt="Illustration Billigfleisch"
                        loading="lazy"
                        className=""
                    />
                    <figcaption className="mt-2 text-xs">"Billigfleisch" (Wettbewerb Greenpeace)</figcaption>
                </figure>
                <figure>
                    <img
                        src={illuDreams}
                        alt="Illustration Dreams"
                        loading="lazy"
                        className=""
                    />
                    <figcaption className="mt-2 text-xs">Dreams (Illustration aus einer Skizze)</figcaption>
                </figure>
                <figure>
                    <img
                        src={illuKatzenHunde}
                        alt="Illustration Es regnet Katzen und Hunde"
                        loading="lazy"
                        className=""
                    />
                    <figcaption className="mt-2 text-xs">"Es regnet Katzen und Hunde" (Wettbewerb Rheinwerkverlag)</figcaption>
                </figure>
            </section>
        </>
    );
};

export default Illustration;
