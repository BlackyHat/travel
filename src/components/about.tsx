import React from "react";
import content from "@/lib/content/about.json";
import { splitString } from "@/lib/splitString";

const About = () => {
  const { title, values, slogan } = content;

  const [firstWordTitle, restOfTitle] = splitString(title, 1);
  const [accentTeamValue, restOfTeamValue] = splitString(values[0], 4);
  const [accentTeamValue2, restOfTeamValue2] = splitString(values[1], 2);
  const [accentTeamValue3, restOfTeamValue3] = splitString(values[2], 3);

  return (
    <section id="about" className="hero-section container mx-auto py-14">
      <h2 className="text-4xl-secondary mb-2">
        {firstWordTitle}
        <span className="text-4xl-accent">{restOfTitle}</span>
      </h2>

      <p className="mb-5 w-[180px] text-left text-sm font-extralight">
        <span className="font-normal">{accentTeamValue}</span>
        {restOfTeamValue}
      </p>
      <p className="mb-10 w-[180px] text-left text-sm font-extralight">
        <span className="font-normal">{accentTeamValue2}</span>
        {restOfTeamValue2}
      </p>
      <div className="mb-10 ml-auto mr-0 w-[180px]  ">
        <p className="text-left text-sm font-normal uppercase">{slogan[0]}</p>
        <p className="text-right text-sm font-normal uppercase">{slogan[1]}</p>
        <p className="text-sm font-extralight -tracking-[0.01em]">
          {slogan[2]}
        </p>
      </div>
      <p className="w-[180px] text-left text-sm font-extralight">
        <span className="font-normal">{accentTeamValue3}</span>
        {restOfTeamValue3}
      </p>
    </section>
  );
};

export default About;
