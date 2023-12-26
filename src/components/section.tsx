import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

const Section: FC<SectionProps> = ({
  className,
  containerClassName,
  children,
}) => {
  return (
    <section className={twMerge("relative overflow-hidden", className)}>
      <div className="section-wrapper">
        <div
          className={twMerge(
            "container mx-auto max-w-[480px] py-14 md:grid md:max-w-[960px] md:py-16 xl:max-w-7xl xl:py-[104px]",
            containerClassName,
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
};
export default Section;
