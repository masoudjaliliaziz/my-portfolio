import { Code2, Smartphone, Server, Palette, Zap } from "lucide-react";

export default function AboutMeSection() {
  return (
    <section
      id="about"
      className="w-full bg-black text-white py-16 px-4 md:px-20"
    >
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left - Services */}
        <div className="flex flex-col gap-10  pl-6">
          {[
            { icon: <Code2 size={36} />, text: "Website Development" },
            { icon: <Smartphone size={36} />, text: "App Development" },
            { icon: <Server size={36} />, text: "Website Hosting" },
            { icon: <Palette size={36} />, text: "UI/UX Design" },
            { icon: <Zap size={36} />, text: "Performance Optimization" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 hover:text-red-400 transition-all"
            >
              <div className="text-red-500">{item.icon}</div>
              <span className="text-lg md:text-xl font-medium">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* Right - About Me + Stats */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 ">About me</h2>
          <p className="text-gray-300 mb-10 leading-relaxed text-[15px] md:text-base">
            I am a frontend developer with a strong passion for building
            interactive and performant web applications using modern tools like
            <span className="font-bold text-red-500">
              {" "}
              React, Next.js, Tailwind CSS
            </span>
            , and more. I've been programming since{" "}
            <span className="font-bold text-red-500">2020</span>, starting with
            backend development using
            <span className="font-semibold text-red-300">
              {" "}
              PHP, Laravel, and Symfony
            </span>
            , and later transitioning to frontend development. I have experience
            working at{" "}
            <span className="font-bold text-red-500">
              Ramzinex <small className="font-thin">(2024)</small>
            </span>
            . I love turning ideas into real digital experiences, and I
            constantly seek out new ways to improve my craft.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-red-500">20+</p>
              <p className="text-sm text-gray-400 mt-1">Completed Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-red-500">95%</p>
              <p className="text-sm text-gray-400 mt-1">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-red-500">5+</p>
              <p className="text-sm text-gray-400 mt-1">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
