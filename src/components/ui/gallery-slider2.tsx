"use client";
import { Children, useState, useRef, useEffect } from "react";
import content from "@/lib/content/gallery.json";

import Slider from "react-slick";
import Image from "next/image";

const GallerySlider = () => {
  const { slides } = content;
  const sliderRef = useRef<Slider>(null);
  // const next = () => {
  //   if (sliderRef.current) {
  //     sliderRef.current.slickNext();
  //   }
  // };

  // const previous = () => {
  //   if (sliderRef.current) {
  //     sliderRef.current.slickPrev();
  //   }
  // };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    vertical: false,
    verticalSwiping: false,
    // centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    // variableWidth: true,
    // className: "slider variable-width",
    className: "center",
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          vertical: true,
          verticalSwiping: true,
        },
      },
    ],
  };

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   className: "center-slide",
  //   arrows: false,
  //   initalSlide: 1,
  //   slidesToShow: 3,
  //   // centerMode: true,
  //   // centerPadding: "0",
  //   // focusOnSelect: true,
  //   // fade: true,
  //   // variableWidth: true,
  //   slidesToScroll: 1,
  //   vertical: false,
  //   verticalSwiping: false,
  //   responsive: [
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         vertical: true,
  //         verticalSwiping: true,
  //       },
  //     },
  //   ],
  // };
  return (
    <>
      {/* <div className="hidden md:block">
        <ul className="">
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
      </div> */}

      <Slider {...settings} ref={sliderRef} className="gallery-slider">
        {slides.map((slide) => (
          <div key={slide} className="relative h-full w-full">
            <Image
              src={`/images/${slide}.jpg`}
              alt={slide}
              fill
              sizes="(max-width: 480px) 100vw, (max-width: 767px) 440px, (max-width: 1279px) 458px,  (max-width: 1279px) 448px"
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default GallerySlider;
