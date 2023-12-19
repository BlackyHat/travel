import { FC, ReactNode } from "react";

interface SectionProps {
  bgImageUrl?: string;
  children: ReactNode;
}
const Section: FC<SectionProps> = ({ bgImageUrl, children }) => {
  return (
    <section id="about" className="hero-section">
      <div className="section-wrapper">
        <div className="container mx-auto py-14">{children}</div>
      </div>
    </section>
  );
};

export default Section;
