import Header from "../../components/header";

import { splitString } from "@/lib/splitString";
import content from "@/lib/content/hero.json";

const Hero = () => {
  const { places, journey, title, desc } = content;
  const heroPlaces = places.join(" / ");
  const heroBadge = journey.split(" ");

  const [firstWordTitle, restOfTitle] = splitString(title, 1);

  return (
    <div id="hero" className="hero-section mx-auto">
      <div className="section-wrapper">
        <div className="container mx-auto max-w-[480px] pb-14 md:grid md:max-w-[960px] xl:max-w-7xl xl:pb-[104px]">
          <Header />

          <section className="md:grid-cols-hero xl:grid-cols-hero-xl xl:pt-18 pt-9 md:grid md:gap-x-12 md:pt-16">
            <p className="md:text-5xl-secondary xl:text-6xl-secondary ml-auto mr-0 text-right text-[37px]/[45px] font-thin uppercase tracking-[0.05em] first-letter:font-medium md:mb-14 md:w-full md:tracking-[0.08em] md:max-xl:text-left xl:mb-[180px]">
              <span className="font-medium xl:pr-5">{heroBadge[0]}</span>
              {heroBadge[1]}
              <span className="-mr-1 -mt-2 block text-xs/[15px] font-light uppercase tracking-[0.8em] max-md:mb-6  md:text-sm/[17px] md:tracking-[1.85em] xl:text-base/5 xl:tracking-[2.28em]">
                {heroBadge[2]}
              </span>
            </p>

            <h1 className="text-4xl-secondary md:text-5xl-secondary xl:md:text-6xl-secondary uppercase max-md:mb-6 max-md:w-[280px] md:order-first md:row-span-2 md:mb-12 xl:mb-24">
              <span className="font-medium">{firstWordTitle}</span>
              {restOfTitle}
            </h1>
            <p className="text-[10px]/4 font-extralight max-md:mb-6 max-md:max-w-[160px] md:md:order-[4] md:self-end md:text-sm/4 md:tracking-widest md:max-xl:max-w-[270px] xl:text-base">
              {heroPlaces}
            </p>
            <p className="text-justify text-sm/5 font-extralight max-md:mb-6 max-md:max-w-[280px] md:mb-7 md:w-full md:text-justify md:text-base/5 xl:text-lg/6">
              {desc}
            </p>
            <a
              href="#contacts"
              className="link mx-auto flex items-center justify-center py-[18px] text-center text-lg font-bold uppercase leading-10 max-md:max-w-[280px] md:order-last md:w-full md:py-[14px] md:text-lg/[22px] xl:py-4 xl:text-[32px]/[39px]"
            >
              join now
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;
