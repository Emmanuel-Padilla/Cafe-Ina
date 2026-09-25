import { Hero } from "../sections/Hero";
import { Menu } from "../sections/Menu";
import { About } from "../sections/About";
import { Experience } from "../sections/Experience";
import { Featured } from "../sections/Featured";
import { Gallery } from "../sections/Gallery";
import { Contact } from "../sections/Contact";
import { Promotions } from "../sections/Promotions";
import { Events } from "../sections/Events";
import { Location } from "../sections/Location";
import { Social } from "../sections/Social";
import { Bakery } from "../sections/Bakery";

export function Home() {
  return (
    <>
      <Hero />
      <Menu />
      <Promotions />
      <About />
      <Bakery />
      <Featured />
      <Experience />
      <Events />
      <Gallery />
      <Location />
      <Social />
      <Contact />
    </>
  );
}
