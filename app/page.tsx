import { ChevronLeft, ChevronRight } from "lucide-react";
import Info from "./_components/Info";
import Skill from "./_components/Skill";

export default function Home() {
  return (
    <div className="w-full h-full bg-gradient-to-tr from-[#591f16] to-black flex flex-col relative">
      <ChevronRight
        className="text-[#d76352] absolute  bottom-20 right-[-20px]"
        width={150}
        height={150}
      />
      <ChevronLeft
        className="text-[#d76352] absolute  top-20 right-90"
        width={150}
        height={150}
      />

      <Info />
      <Skill />
    </div>
  );
}
