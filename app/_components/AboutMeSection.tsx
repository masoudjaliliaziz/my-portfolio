import { Code2, Smartphone, Server } from "lucide-react";

export default function AboutMeSection() {
  return (
    <section
      id="about"
      className="w-full bg-[#0D1B2A] text-white py-16 px-4 md:px-20"
    >
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left - Services */}
        <div className="flex flex-col gap-12 border-l-2 border-dashed border-red-500 pl-6">
          <div className="flex items-center gap-4">
            <Code2 size={40} />
            <span className="text-xl font-semibold">Website Development</span>
          </div>
          <div className="flex items-center gap-4">
            <Smartphone size={40} />
            <span className="text-xl font-semibold">App Development</span>
          </div>
          <div className="flex items-center gap-4">
            <Server size={40} />
            <span className="text-xl font-semibold">Website Hosting</span>
          </div>
        </div>

        {/* Right - About Me + Stats */}
        <div>
          <h2 className="text-3xl font-bold mb-6">About me</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            I am a frontend developer with a strong passion for building
            interactive and performant web applications using modern tools like
            <span className="font-bold text-red-500">
              {" "}
              React, Next.js, Tailwind CSS{" "}
            </span>
            , and more. I&apos;ve been programming since{" "}
            <span className="font-bold text-red-500">2020</span>, starting with
            backend development using{" "}
            <span className="font-semibold text-red-300">
              PHP, Laravel, and Symfony{" "}
            </span>
            , and later transitioning to frontend development. I have experience
            working at{" "}
            <span className="font-bold text-red-500">
              Ramzinex <small className="font-thin">(2024)</small>
            </span>
            . I love turning ideas into real digital experiences, and I
            constantly seek out new ways to improve my craft. From animations to
            API integrations, I enjoy every step of the frontend workflow
          </p>

          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-red-500">120 +</p>
              <p className="text-sm text-gray-400 mt-1">Completed Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-red-500">95 %</p>
              <p className="text-sm text-gray-400 mt-1">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-red-500">5 +</p>
              <p className="text-sm text-gray-400 mt-1">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
