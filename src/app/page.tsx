import Hero from "@/sections/hero";
import About from "@/sections/about";
import Services from "@/sections/services";
import Contacts from "@/sections/contacts";
import Career from "@/sections/career";
import ChooseUs from "@/sections/choose-us";
import Gallery from "@/sections/gallery";

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
