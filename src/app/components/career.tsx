import React from "react";

import CareerForm from "@/components/ui/career-form";
import { splitString } from "@/lib/splitString";
import content from "@/lib/content/career.json";

const Career = () => {
  const { title, desc, features_title, features } = content;
  const [firstWordTitle, restOfTitle] = splitString(title, 1);

  return (
    <section
      id="services"
      className="career-section text-sm md:text-base/5 xl:text-lg/6"
    >
      <div className="section-wrapper">
        <div className="container mx-auto max-w-[480px] py-14 md:grid md:max-w-[960px] md:grid-cols-3 md:gap-5 md:py-16 xl:mb-6 xl:max-w-7xl xl:grid-cols-4 xl:gap-6 xl:py-[104px]">
          <h2 className="text-4xl-secondary md:text-5xl-secondary xl:text-6xl-secondary mb-2 md:col-span-2 xl:col-span-3">
            {firstWordTitle}
            <span className="text-4xl-accent md:text-5xl-accent xl:text-6xl-accent">
              {restOfTitle}
            </span>
          </h2>

          <p className="ml-auto mr-0 text-left font-extralight max-md:mb-8 max-md:w-[64%] md:text-[13px]/5 xl:text-justify xl:text-lg/6">
            {desc}
          </p>
          <div className="xl:col-span-2">
            <h3 className="ml-auto mr-0 text-left text-3xl font-extralight uppercase max-md:mb-9 max-md:w-[64%] md:text-right md:max-xl:mb-14 xl:mb-12 xl:ml-0 xl:w-[50%] ">
              {features_title}
            </h3>

            <ul className="ml-0 max-md:w-[64%]">
              {features.map(({ caption, overview }) => (
                <li
                  className="mb-4 xl:grid xl:grid-cols-2 xl:gap-6"
                  key={caption}
                >
                  <h4 className="mb-2 text-right text-sm font-normal md:text-base/5">
                    {caption}
                  </h4>
                  <p className="text-right text-xs/5 font-extralight xl:text-left xl:text-xs/6">
                    {overview}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:col-span-2 md:flex md:items-end">
            <CareerForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
