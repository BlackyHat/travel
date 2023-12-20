import React from "react";
import content from "@/lib/content/career.json";
import { splitString } from "@/lib/splitString";
import CareerForm from "./ui/career-form";

const Career = () => {
  const { title, desc, features_title, features } = content;
  const [firstWordTitle, restOfTitle] = splitString(title, 1);

  return (
    <section id="services" className="choose-us-section">
      <div className="section-wrapper">
        <div className="container mx-auto py-14">
          <h2 className="text-4xl-secondary mb-2">
            {firstWordTitle}
            <span className="text-4xl-accent">{restOfTitle}</span>
          </h2>
          <p className="mb-8 ml-24 w-[180px] text-left text-sm font-extralight">
            {desc}
          </p>
          <h3 className="mb-9 ml-24 text-left text-3xl font-extralight">
            {features_title}
          </h3>
          <ul className="ml-0 w-[180px]">
            {features.map(({ caption, overview }) => (
              <li className="mb-4" key={caption}>
                <h4 className="mb-2 text-right text-sm font-normal">
                  {caption}
                </h4>
                <p className="text-right text-xs/[20px] font-extralight">
                  {overview}
                </p>
              </li>
            ))}
          </ul>
          <div className="hidden md:block">
            <CareerForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
