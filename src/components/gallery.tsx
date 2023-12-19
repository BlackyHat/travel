import React from "react";
import content from "@/lib/content/gallery.json";
import { splitString } from "@/lib/splitString";

const Gallery = () => {
  const { title } = content;
  const [firstWordTitle, restOfTitle] = splitString(title, 1);

  return (
    <section id="about" className="hero-section container mx-auto py-14">
      <h2 className="text-4xl-secondary mb-2">
        {firstWordTitle}
        <span className="text-4xl-accent">{restOfTitle}</span>
      </h2>
    </section>
  );
};

export default Gallery;
