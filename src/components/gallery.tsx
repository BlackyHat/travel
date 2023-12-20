import React from "react";
import content from "@/lib/content/gallery.json";
import { splitString } from "@/lib/splitString";
import GallerySlider from "./ui/gallery-slider2";

const Gallery = () => {
  const { title } = content;
  const [firstWordTitle, restOfTitle] = splitString(title, 1);

  return (
    <section id="gallery" className="hero-section">
      <div className="section-wrapper">
        <div className="container mx-auto py-14">
          <h2 className="text-4xl-secondary mb-2">
            {firstWordTitle}
            <span className="text-4xl-accent">{restOfTitle}</span>
          </h2>
          <GallerySlider />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
/**
 * sizes img
 * (min-width: 768px) 100vw, (max-width: 427px) min(100%, 387px), (max-height: 756px) min(100%, 387px), (min-aspect-ratio: 4672/7008) calc((calc(100vh - 175px)) * 0.666667), calc(100vw - 40px)
 */
