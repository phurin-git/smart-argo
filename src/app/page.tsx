import NavBar from "./ui/NavBar";
import Hero from "./ui/Hero";
import Introduction from "./ui/Introduction";
import FruitsVegetables from "./ui/FruitsVegetables";
import AgricultureMatters from "./ui/AgricultureMatters";
import OurProjects from "./ui/OurProjects";
import Testimonials from "./ui/Testimonials";
import Blog from "./ui/Blog";
import ContactUs from "./ui/ContactUs";
import Clients from "./ui/Clients";
import Leader from "./ui/Leader";
import Footer from "./ui/Footer";
import Modern from "./ui/Modern";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Introduction />
      <FruitsVegetables />
      <AgricultureMatters />
      <OurProjects />
      <Testimonials />
      <Modern />
      <Blog />
      <ContactUs />
      <Clients />
      <Leader />
      <Footer />
    </>
  );
}
