import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { splitString } from "@/lib/splitString";

interface SectionProps {
  title: string;
  className?: string;
}

const SectionHeading: FC<SectionProps> = ({ title, className }) => {
  const [firstWordTitle, restOfTitle] = splitString(title, 1);

  return (
    <h2
      className={twMerge(
        "text-4xl-secondary md:text-5xl-secondary xl:text-6xl-secondary uppercase",
        className,
      )}
    >
      {firstWordTitle}
      <span className="text-4xl-accent md:text-5xl-accent xl:text-6xl-accent uppercase">
        {restOfTitle}
      </span>
    </h2>
  );
};
export default SectionHeading;
