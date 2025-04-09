import Info from "./_components/Info";
import Skill from "./_components/Skill";
import Navbar from "./_components/Navbar";
import AboutMeSection from "./_components/AboutMeSection";
import Projects from "./_components/Projects";
import Contact from "./_components/Contact";

export const metadata = {
  title: "My Portfolio",
};

export default function Home() {
  return (
    <div className="w-full h-full bg-gradient-to-tr from-[#591f16] to-black flex flex-col scroll-smooth">
      <Navbar />

      <Info />
      <Skill />
      <AboutMeSection />
      <Projects />
      <Contact />
    </div>
  );
}
