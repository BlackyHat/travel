"use client";
import Image from "next/image";
import Slider from "react-slick";
import content from "@/lib/content/gallery.json";
import SliderArrow from "./slider-arrow";

const GallerySlider = () => {
  const { slides } = content;

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    dots: false,
    nextArrow: <SliderArrow type="next" />,
    prevArrow: <SliderArrow type="prev" />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          vertical: true,
          verticalSwiping: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide} className="slide relative h-full w-full">
            <Image
              key={slide}
              src={`/images/${slide}.webp`}
              alt={slide}
              sizes="(max-width: 767px) 100vw, (min-width: 768px) 60vw, (min-width: 1280px) 608px"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default GallerySlider;
