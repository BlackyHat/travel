import React from "react";
import content from "@/lib/content/about.json";
import { splitString } from "@/lib/splitString";
import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";

const About = () => {
  const { title, values, slogan } = content;

  const [accentTeamValue, restOfTeamValue] = splitString(values[0], 4);
  const [accentTeamValue2, restOfTeamValue2] = splitString(values[1], 2);
  const [accentTeamValue3, restOfTeamValue3] = splitString(values[2], 3);

  return (
    <Section id="about" className="about-section">
      <div className="md:grid-cols-hero xl:grid-cols-hero-xl md:grid md:gap-4 md:max-xl:mb-16 xl:mb-[72px] xl:w-[922px]">
        <SectionHeading title={title} className="max-md:mb-2" />
        <div className="xs:self-start md:row-span-2 xl:pt-4">
          <p className="text-left font-extralight max-md:mb-5 max-md:w-[180px] md:mb-4 xl:mb-6">
            <span className="font-normal">{accentTeamValue}</span>
            {restOfTeamValue}
          </p>
          <p className="text-left font-extralight max-md:mb-10 max-md:w-[180px]">
            <span className="font-normal">{accentTeamValue2}</span>
            {restOfTeamValue2}
          </p>
        </div>
        <div className="ml-0 mr-auto  hidden w-[180px] self-end md:w-[220px]  md:max-xl:block">
          <p className="text-left  uppercase">{slogan[0]}</p>
          <p className="text-right  uppercase">{slogan[1]}</p>
          <p className="font-extralight -tracking-[0.01em] md:tracking-[0.02em]">
            {slogan[2]}
          </p>
        </div>
      </div>

      <div className="xl:grid xl:grid-cols-2">
        <div className="order-last mb-10 ml-auto mr-0  w-[180px] md:max-xl:hidden xl:w-[296px] xl:self-start">
          <p className="text-left  uppercase">{slogan[0]}</p>
          <p className="text-right  uppercase">{slogan[1]}</p>
          <p className="font-extralight -tracking-[0.01em]">{slogan[2]}</p>
        </div>

        <p className="text-left font-extralight md:max-xl:ml-auto md:max-xl:mr-0 md:max-xl:w-[463px]">
          <span className="font-normal">{accentTeamValue3}</span>
          {restOfTeamValue3}
        </p>
      </div>
    </Section>
  );
};

export default About;
