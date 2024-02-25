import React from "react";

function Highlights({
  cols,
  imgs,
  title,
}: {
  cols: 2 | 4;
  imgs: { alt: string; src: string; figcaption: string }[];
  title: string;
}) {
  return (
    <section className="md:col-span-4">
      <div className="col-span-4 bg-line-top bg-repeat-x h-[30px]" />
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 ${
          cols === 4 ? "md:grid-cols-3 lg:grid-cols-4" : ""
        } col-start-1 gap-4 p-8 bg-pharlap-200 text-stone-700`}
      >
        <h3
          className={`text-2xl col-span-1 sm:col-span-2 ${
            cols === 4 ? "md:col-span-3 lg:col-span-4" : ""
          } mb-2`}
        >
          {title}
        </h3>
        {imgs.map((img: { alt: string; src: string; figcaption: string }) => (
          <figure key={img.alt}>
            <img
              className="w-full"
              src={img.src}
              alt={img.alt}
              loading="lazy"
            />
            <figcaption className="mt-2 text-sm">{img.figcaption}</figcaption>
          </figure>
        ))}
      </div>
      <div className="col-span-4 bg-line-bottom bg-repeat-x h-[30px]" />
    </section>
  );
}

export default Highlights;
