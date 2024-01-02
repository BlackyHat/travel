import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Contacts from "@/components/sections/contacts";
import Career from "@/components/sections/career";
import ChooseUs from "@/components/sections/choose-us";
import Gallery from "@/components/sections/gallery";

export default function Home() {
  return (
    <main className="mx-auto h-screen max-w-[1440px]">
      <Hero />
      <About />
      <Services />
      <Career />
      <ChooseUs />
      <Gallery />
      <Contacts />
    </main>
  );
}
