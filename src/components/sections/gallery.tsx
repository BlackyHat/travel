import content from "@/lib/content/gallery.json";
import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";
import GallerySlider from "@/components/ui/gallery-slider";

const Gallery = () => {
  const { title } = content;

  return (
    <Section id="gallery" className="gallery-section" containerStyles="xl:px-0">
      <SectionHeading title={title} className="mb-6 md:mb-16 xl:mb-2" />
      <GallerySlider />
    </Section>
  );
};

export default Gallery;
