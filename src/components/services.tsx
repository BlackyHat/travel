"use client";
import { useState, useEffect } from "react";
import content from "@/lib/content/services.json";
import { splitString } from "@/lib/splitString";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { title, trips } = content;
  const [firstWordTitle, restOfTitle] = splitString(title, 1);

  const variants = [
    "services-slide-1",
    "services-slide-2",
    "services-slide-3",
    "services-slide-4",
    "services-slide-5",
  ];
  const formattedNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <section id="services" className={variants[currentSlide]}>
      <div className="section-wrapper">
        <div className="container mx-auto py-14">
          <h2 className="text-4xl-secondary mb-2">
            {firstWordTitle}
            <span className="text-4xl-accent">{restOfTitle}</span>
          </h2>
          <p className="mb-4 text-right text-[43px]/[52px] font-extralight">
            {formattedNumber(currentSlide + 1)}/
            <span className="font-thin">{formattedNumber(trips.length)}</span>
          </p>
          <div className="relative mb-3 h-[213px] w-full">
            <Image
              src={`/images/${trips[currentSlide].image}.png`}
              alt={trips[currentSlide].title}
              fill
            />
          </div>
          <p className="mb-6 text-right text-xs/[24px] font-extralight tracking-[0.2em]">
            {trips[currentSlide].slogan}
          </p>
          <ul className="mb-8 flex flex-col items-start gap-4">
            {trips.map((trip, idx) => (
              <li key={trip.title}>
                <button
                  type="button"
                  className={twMerge(
                    "relative text-xl/[17px] font-extralight uppercase text-white/50",
                    `${
                      currentSlide === idx
                        ? "activSlideButton pl-5 font-medium text-white/100"
                        : ""
                    }`,
                  )}
                  onClick={() => setCurrentSlide(idx)}
                >
                  {trip.title}
                </button>
              </li>
            ))}
          </ul>
          <p className="text-sm font-extralight tracking-wider">
            {trips[currentSlide].desc}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
