import About from "@/components/about";
import Career from "@/components/career";
import ChooseUs from "@/components/choose-us";
import Contacts from "@/components/contacts";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Services from "@/components/services";

export default function Home() {
  return (
    <main className="max-w-1600 mx-auto h-screen">
      {/* <Hero /> */}
      {/* <About /> */}
      {/* <Services /> */}
      {/* <Contacts /> */}
      {/* <Gallery /> */}
      <Career />
      <ChooseUs />
    </main>
  );
}
