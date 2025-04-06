"use client";
import React from "react";
import redux from "@/public/logo/icons8-redux-48.png";
import figma from "@/public/logo/icons8-figma-48.png";
import typescript from "@/public/logo/icons8-typescript-48.png";
import javascript from "@/public/logo/icons8-javascript-48.png";
import linux from "@/public/logo/icons8-linux-48.png";
import react from "@/public/logo/icons8-react-48.png";
import tailwind from "@/public/logo/icons8-tailwind-css-48.png";
import nextjs from "@/public/logo/icons8-nextjs-48.png";
import git from "@/public/logo/icons8-git-48.png";
import supabase from "@/public/logo/icons8-supabase-48.png";
import docker from "@/public/logo/icons8-docker-48.png";
import api from "@/public/logo/icons8-rest-api-48.png";
import postman from "@/public/logo/icons8-postman-inc-48.png";

import Image from "next/image";
const skills = [
  nextjs,
  redux,
  figma,
  typescript,
  javascript,
  linux,
  react,
  tailwind,
  git,
  supabase,
  docker,
  api,
  postman,
];
function Skill() {
  return (
    <div className="w-full p-6 bg-[#0e0e0e] z-20 overflow-hidden">
      <div className=" w-full text-white text-xl font-semibold px-10 flex justify-around">
        {/* استفاده از concat برای نمایش آیکون‌ها به صورت پیوسته */}
        {skills.map((skill, idx) => (
          <Image key={idx} src={skill} alt="logo" />
        ))}
      </div>
    </div>
  );
}

export default Skill;
