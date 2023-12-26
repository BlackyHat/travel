import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Contacts from "./components/contacts";
import Career from "./components/career";
import ChooseUs from "./components/choose-us";
import Gallery from "./components/gallery";

export default function Home() {
  return (
    <main className="mx-auto h-screen max-w-[1440px]">
      <Hero />
      <About />
      <Services />
      <Career />
      {/* <ChooseUs /> */}
      <Gallery />
      <Contacts />
    </main>
  );
}
