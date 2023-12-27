"use client";
import { useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

import content from "@/lib/content/services.json";
import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { title, trips } = content;
  const variants = [
    "services-slide-1",
    "services-slide-2",
    "services-slide-3",
    "services-slide-4",
    "services-slide-5",
  ];
  const formattedNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <Section
      id="services"
      className={twMerge(
        "mx-auto text-sm md:text-base/5 xl:text-lg/6",
        variants[currentSlide],
      )}
    >
      <div className="md:grid-cols-hero md:mb-9 md:grid xl:grid-cols-2 xl:gap-1 ">
        <SectionHeading title={title} className="max-md:mb-6" />
        <p className="xl:text-6xl-accent text-right  text-[43px]/[52px] font-extralight max-md:mb-4 md:self-center md:text-[67px]/[81px] xl:text-left xl:font-extralight">
          {formattedNumber(currentSlide + 1)}/
          <span className="font-thin">{formattedNumber(trips.length)}</span>
        </p>
      </div>
      <div className="md:grid-cols-hero md:grid md:gap-5 xl:grid-cols-2 xl:gap-5">
        <div className="relative mb-3 h-[213px] w-full md:mb-6 md:h-[370px] xl:h-[429px]">
          <Image
            key={trips[currentSlide].image}
            className="animate-fade duration-500 ease-in-out"
            src={`/images/${trips[currentSlide].image}.webp`}
            alt={trips[currentSlide].title}
            sizes="(max-width: 767px) 100vw, (min-width: 768px) 60vw, (min-width: 1280px) 608px"
            fill
          />
        </div>
        <div className="flex h-[368px] flex-col justify-start xl:grid xl:grid-cols-2 xl:gap-5">
          <p className="flex-none text-right text-xs/6 font-extralight tracking-[0.2em] max-md:mb-6 md:text-left">
            {trips[currentSlide].slogan}
          </p>
          <ul className=" flex flex-none flex-col items-start gap-4 md:order-first md:mb-6">
            {trips.map((trip, idx) => (
              <li key={trip.title}>
                <button
                  type="button"
                  className={twMerge(
                    "relative text-xl/[17px] font-extralight uppercase text-white/50 md:text-left md:text-[22px]/[18px] xl:text-[28px]/6",
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
          <div className="flex grow items-end xl:col-start-2">
            <p className="text-justify font-extralight md:text-[13px]/5 xl:text-lg/6">
              {trips[currentSlide].desc}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
