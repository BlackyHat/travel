import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  containerStyles?: string;
}

const Section: FC<SectionProps> = ({
  id,
  className,
  containerStyles,
  children,
}) => {
  return (
    <section
      id={id}
      className={twMerge(
        "mx-auto text-sm md:text-base/5 xl:text-lg/6",
        className,
      )}
    >
      <div className="section-wrapper">
        <div
          className={twMerge(
            "container mx-auto max-w-[480px] py-14 md:grid md:max-w-[768px] md:py-16 xl:max-w-[1280px] xl:py-[104px]",
            containerStyles,
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
};
export default Section;
