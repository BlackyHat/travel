import content from "@/lib/content/career.json";
import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";
import CareerForm from "@/components/ui/career-form";

const Career = () => {
  const { title, desc, features_title, features } = content;

  return (
    <Section
      id="career"
      className="career-section"
      containerStyles="md:grid-cols-3 md:gap-5 xl:grid-cols-4 xl:gap-6"
    >
      <SectionHeading
        title={title}
        className="max-md:mb-2 md:col-span-2 xl:col-span-3"
      />
      <p className="ml-auto mr-0 text-left font-extralight max-md:mb-8 max-md:w-[64%] md:text-[13px]/5 xl:text-justify xl:text-lg/6">
        {desc}
      </p>
      <div className="xl:col-span-2">
        <h3 className="ml-auto mr-0 text-left text-3xl font-extralight uppercase max-md:mb-9 max-md:w-[64%] md:text-right md:max-xl:mb-14 xl:mb-12 xl:ml-0 xl:w-[50%] ">
          {features_title}
        </h3>

        <ul className="ml-0 max-md:w-[64%]">
          {features.map(({ caption, overview }) => (
            <li className="mb-4 xl:grid xl:grid-cols-2 xl:gap-6" key={caption}>
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
    </Section>
  );
};

export default Career;
