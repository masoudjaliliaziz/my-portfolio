import Info from "./_components/Info";
import Skill from "./_components/Skill";
import Navbar from "./_components/Navbar";
import AboutMeSection from "./_components/AboutMeSection";

export default function Home() {
  return (
    <div className="w-full h-full bg-gradient-to-tr from-[#591f16] to-black flex flex-col ">
      <Navbar />

      <Info />
      <Skill />
      <AboutMeSection />
    </div>
  );
}
