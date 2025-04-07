"use client";

import Image from "next/image";
import React from "react";
import me from "@/public/meme.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
function Info() {
  return (
    <div className="w-full  shadow-md flex flex-col sm:flex-row pr-20 pt-20 relative ">
      <ChevronRight
        className="text-[#d76352] absolute  bottom-0 right-[-40px]"
        width={150}
        height={150}
      />
      <ChevronLeft
        className="text-[#d76352] absolute  top-20 right-90"
        width={150}
        height={150}
      />
      <div className="w-full  sm:w-3/4 h-[450px] flex flex-col gap-6   ">
        <div className="flex items-baseline gap-1 px-20">
          {" "}
          <h1 className="text-white text-[3rem] font-[600]">Hello</h1>
          <div className="w-2 h-2 rounded-full bg-[#d76352]"></div>
        </div>
        <div className="flex items-baseline gap-1 ">
          {" "}
          <div className="w-20 h-[4px]   bg-[#d76352] "></div>
          <h1 className="text-white text-[2.5rem] font-[400]">
            I&apos;m Masoud
          </h1>
        </div>
        <h1 className="text-white font-[700] text-[3.5rem] px-20">
          Frontend Developer
        </h1>
      </div>
      <div className="w-full  sm:w-1/4  relative ">
        <div className="absolute w-[350px] aspect-square border-20 border-[#d76352] rounded-full top-20 right-[-15px] shadow-[#d76352] shadow-2xl"></div>
        <Image
          placeholder="blur"
          src={me}
          alt="me"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default Info;
