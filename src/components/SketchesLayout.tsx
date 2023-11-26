import React from "react";

function sketchesLayout({
  imgs,
  title,
}: {
  imgs: { figcaption?: string; alt: string; src: string }[];
  title: string;
}) {
  return (
    <section className="md:col-start-2 md:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8 bg-white rounded">
      <h4 className="sm:col-span-2 lg:col-span-3 text-xl">{title}</h4>
      {imgs.map((img) => (
        <div className="flex aspect-square overflow-hidden">
          <img className="w-full object-cover" src={img.src} alt={img.alt} />
        </div>
      ))}
    </section>
  );
}

export default sketchesLayout;
