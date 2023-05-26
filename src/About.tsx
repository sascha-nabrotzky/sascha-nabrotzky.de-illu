import React, { useState } from "react";
import deranfang from "../src/assets/images/DerAnfang.jpg";
import { ReactComponent as AngleRight } from "../src/assets/images/angle-right.svg";

const Home = () => {
    const [currentMail, setMail] = useState("")

    function addMail() {
        setMail('mailto:illustration@sascha-nabrotzky.de')
    }

    return (
        <>
            <div className="md:col-start-2 md:col-span-1 max-md:px-4 text-lg tracking-wider">
                <h1 className="uppercase tracking-widest text-2xl mb-4">
                     Über mich
                </h1>
                <h2 className="mb-4">Zeichnerische Kreativität war schon immer sehr ausgeprägt bei mir ...</h2>
                <p>das merkten auch meine Lehrer, wenn sie mal meine Schulbücher oder Arbeitshefte in die Finger bekamen.</p>
                <p>
                  Neben meinem Hauptjob als Webdesigner (UI/UX) habe ich noch Illustration und das erstellen von Kinderbüchern als weitere Leidenschaft, 
                  welche ich als Hobby betreibe.
                </p>
                <a
                    className="flex mt-12 transition-color duration-300 text-teal-600 hover:text-terracotta"
                    href={`${currentMail}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={addMail}
                >
                    Kontakt
                    <AngleRight className="h-7"/>
                </a>
            </div>
            <div className="md:col-start-3 md:col-span-2 flex overflow-hidden place-items-center h-96 md:h-72 lg:h-80 xl:h-[30rem] 2xl:h-[38rem]">
                <img className="w-full" src={deranfang} alt="Collage" loading="lazy"/>
            </div>
        </>
    );
}

export default Home;
