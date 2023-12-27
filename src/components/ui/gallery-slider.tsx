"use client";
import Slider from "react-slick";
import Image from "next/image";
import content from "@/lib/content/gallery.json";
import SliderArrow from "@/components/ui/slider-arrow";

const GallerySlider = () => {
  const { slides } = content;

  const settings = {
    accessibility: true,
    dots: false,
    arrows: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 750,
    autoplaySpeed: 3000,
    cssEase: "linear",
    autoplay: true,
    vertical: false,
    verticalSwiping: false,
    nextArrow: <SliderArrow type="next" />,
    prevArrow: <SliderArrow type="prev" />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          accessibility: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          vertical: true,
          verticalSwiping: true,
          arrows: false,
          speed: 750,
          autoplaySpeed: 3000,
          cssEase: "linear",
          autoplay: true,
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
              sizes="(max-width: 767px) 100vw, (min-width: 768px) 60vw, (min-width: 1280px) 50vw"
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
