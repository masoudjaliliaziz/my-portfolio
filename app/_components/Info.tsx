"use client";

import Image from "next/image";
import React from "react";
import me from "@/public/meme.png";
import { Download, ChevronLeft, ChevronRight } from "lucide-react";

function Info() {
  return (
    <div className="w-full py-16 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden">
      {/* Chevron Icons */}
      <ChevronRight
        className="text-[#d76352] absolute bottom-[-20px] right-[-30px] opacity-40 hidden md:block"
        width={120}
        height={120}
      />
      <ChevronLeft
        className="text-[#d76352] absolute top-10 left-[-30px] opacity-40 hidden md:block"
        width={120}
        height={120}
      />

      {/* Text Section */}
      <div className="flex-1 flex flex-col gap-6 text-center lg:text-left z-10">
        <div className="flex items-center justify-center lg:justify-start gap-2">
          <h1 className="text-white text-4xl sm:text-5xl font-semibold">
            Hello
          </h1>
          <div className="w-2 h-2 rounded-full bg-[#d76352]"></div>
        </div>

        <div className="flex items-center justify-center lg:justify-start gap-3">
          <div className="w-16 h-[4px] bg-[#d76352]"></div>
          <h1 className="text-white text-3xl sm:text-4xl font-light">
            I&apos;m Masoud
          </h1>
        </div>

        <h2 className="text-white font-bold text-4xl sm:text-5xl">
          Frontend Developer
        </h2>

        {/* Download Resume Button */}
        <div className="mt-6">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-[#d76352] hover:bg-[#b85041] transition-colors duration-300 text-white font-semibold py-2 px-6 rounded-xl shadow-lg shadow-[#d76352]/30"
          >
            <Download size={20} />
            Download CV
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 relative mt-12 lg:mt-0 flex justify-center items-center">
        <div className="relative w-[230px] sm:w-[280px] lg:w-[320px] aspect-square">
          <div className="absolute inset-[-8px] translate-y-4 rounded-full border-[8px] border-[#d76352] shadow-xl shadow-[#d76352] z-0"></div>
          <div className="absolute inset-0 flex justify-center items-center z-10">
            <Image
              placeholder="blur"
              src={me}
              alt="me"
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
