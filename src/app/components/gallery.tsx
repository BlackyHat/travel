import React from "react";

import content from "@/lib/content/gallery.json";
import { splitString } from "@/lib/splitString";

import GallerySlider from "@/components/ui/gallery-slider";

const Gallery = () => {
  const { title } = content;
  const [firstWordTitle, restOfTitle] = splitString(title, 1);

  return (
    <section id="gallery" className="gallery-section">
      <div className="section-wrapper">
        <div className="container mx-auto max-w-[480px] py-14 md:grid md:max-w-[960px] md:py-16 xl:max-w-7xl xl:py-[104px]">
          <h2 className="text-4xl-secondary md:text-5xl-secondary xl:text-6xl-secondary mb-2">
            {firstWordTitle}
            <span className="text-4xl-accent md:text-5xl-accent xl:text-6xl-accent">
              {restOfTitle}
            </span>
          </h2>
          <GallerySlider />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
