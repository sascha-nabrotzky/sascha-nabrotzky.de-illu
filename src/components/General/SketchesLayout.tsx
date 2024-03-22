import React from "react";

const sketchesLayout = ({
  imgs,
  title,
}: {
  imgs: { figcaption?: string; alt: string; src: string }[];
  title: string;
}) => {
  return (
    <section className="md:col-start-2 md:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8 border border-stone-300 bg-white rounded">
      <h4 className="sm:col-span-2 lg:col-span-3 text-xl">{title}</h4>
      {imgs.map((img, index) => (
        <div className="flex aspect-square overflow-hidden" key={index}>
          <img className="w-full object-cover" src={img.src} alt={img.alt} />
        </div>
      ))}
    </section>
  );
};

export default sketchesLayout;
