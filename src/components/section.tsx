import { FC, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

interface SectionProps {
  children: ReactNode;
  imagePath: StaticImageData;
}

const Section: FC<SectionProps> = ({ children, imagePath }) => {
  return (
    <section className="relative overflow-hidden ">
      <div className="absolute inset-0 z-0">
        <Image
          src={imagePath}
          layout="fill"
          objectFit="cover"
          alt="Background Image"
          priority
        />
      </div>
      <div className="relative z-10 h-screen px-5 py-14 bg-gradient-section">
        {children}
      </div>
    </section>
  );
};

export default Section;
