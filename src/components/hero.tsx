import Header from "./header";
import content from "@/lib/content/hero.json";

const Hero = () => {
  const { places, journey, label, desc } = content;
  const heroPlaces = places.join(" / ");
  const heroBadge = journey.split(" ");

  const firstWordTitle = label.split(" ")[0];
  const restOfTitle = label.substring(firstWordTitle.length);

  return (
    <section className=" hero-section container mx-auto pb-14" id="hero">
      <Header />
      <p className="text-right text-[37px]/[45px] font-thin uppercase tracking-[0.05em] first-letter:font-medium">
        <span className="font-medium">{heroBadge[0]}</span>
        {heroBadge[1]}
      </p>
      <p className="-mr-1 -mt-2 mb-6 text-right text-xs/[15px] font-light uppercase tracking-[0.8em]">
        {heroBadge[2]}
      </p>

      <h1 className="mb-6 text-[40px]/[56px] font-thin uppercase tracking-wider">
        <span className="font-medium">{firstWordTitle}</span>
        {restOfTitle}
      </h1>
      <p className="mb-6 max-w-[160px] text-[10px]/[16px] font-extralight">
        {heroPlaces}
      </p>
      <p className="mb-6 text-justify text-sm/[20px] font-extralight">{desc}</p>
      <a
        href="#contacts"
        className="link max-w-80 block w-full px-16 py-[18px] text-center text-lg font-bold uppercase leading-10"
      >
        join now
      </a>
    </section>
  );
};

export default Hero;
