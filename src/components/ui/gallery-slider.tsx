"use client";
import { Children, useState, useRef, useEffect } from "react";
import content from "@/lib/content/gallery.json";

import Image from "next/image";
import { twMerge } from "tailwind-merge";

const GallerySlider = () => {
  const { slides } = content;
  const [currentSlide, setCurrentSlide] = useState(1);

  const nextSlideIdx = (idx: number) => {
    return slides.length - 1 === idx ? 0 : idx + 1;
  };
  const prevSlideIdx = (idx: number) => {
    return idx === 0 ? slides.length - 1 : idx - 1;
  };

  const next = () => {
    const next = nextSlideIdx(currentSlide);
    setCurrentSlide(next);
  };

  const previous = () => {
    const previous = prevSlideIdx(currentSlide);
    setCurrentSlide(previous);
  };

  return (
    <>
      <div className="hidden md:block">
        <ul className="flex flex-col gap-6 md:flex-row">
          <li>
            <button type="button" className="" onClick={previous}>
              PREV
            </button>
          </li>
          <li>
            <button type="button" className="" onClick={next}>
              next
            </button>
          </li>
        </ul>
      </div>

      <ul className="flex flex-col gap-6 md:flex-row">
        {slides.map((slide, idx) => (
          <li key={slide}>
            <div
              className={twMerge(
                "relative h-full w-full",
                `${currentSlide === idx ? "active" : ""}`,
                `${nextSlideIdx(idx) === idx ? "next" : ""}`,
                `${prevSlideIdx(idx) === idx ? "prev" : ""}`,
              )}
            >
              <Image
                src={`/images/${slide}.jpg`}
                alt={slide}
                fill
                sizes="(max-width: 480px) 100vw, (max-width: 767px) 440px, (max-width: 1279px) 458px,  (max-width: 1279px) 448px"
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GallerySlider;
