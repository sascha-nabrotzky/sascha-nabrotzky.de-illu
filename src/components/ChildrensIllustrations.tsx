import React from "react";

const SketchbookIllustrations = () => {
  return (
    <section className="md:col-span-4">
      <div className="col-span-4 bg-line-top bg-repeat-x h-[30px]" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 col-start-1 gap-4 p-4 bg-pharlap-200 text-stone-700">
        <h3 className="text-2xl col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 mb-2">
          Highlights Kinderillustrationen
        </h3>
        <figure>
          <img
            src="https://placehold.co/400x600/333333/444444"
            alt="Illustration geometrische Statue"
            loading="lazy"
          />
          <figcaption className="mt-2 text-xs">
            sjfdlkj slkfjölfl ölsfjla
          </figcaption>
        </figure>
        <figure>
          <img
            src="https://placehold.co/400x600/333333/444444"
            alt="Illustration aus einem Fleck heraus"
            loading="lazy"
          />
          <figcaption className="mt-2 text-xs">
            sjöklfajsal kfjölsajfk jsölafl
          </figcaption>
        </figure>
        <figure>
          <img
            src="https://placehold.co/400x600/333333/444444"
            alt="Illustration versch. Häuser"
            loading="lazy"
          />
          <figcaption className="mt-2 text-xs">
            aklsöj dlkfj aöslkf jlaks
          </figcaption>
        </figure>
        <figure>
          <img
            src="https://placehold.co/400x600/333333/444444"
            alt="Illustration Es regnet Katzen und Hunde"
            loading="lazy"
          />
          <figcaption className="mt-2 text-xs">
            asjöldkfjlksa jfölk asld
          </figcaption>
        </figure>
      </div>
      <div className="col-span-4 bg-line-bottom bg-repeat-x h-[30px]" />
    </section>
  );
};

export default SketchbookIllustrations;
