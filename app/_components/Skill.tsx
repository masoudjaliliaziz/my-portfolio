"use client";
import React from "react";
import Image from "next/image";

import redux from "@/public/logo/icons8-redux-48.png";
import figma from "@/public/logo/icons8-figma-48.png";
import typescript from "@/public/logo/icons8-typescript-48.png";
import javascript from "@/public/logo/icons8-javascript-48.png";
import linux from "@/public/logo/icons8-linux-48.png";
import react from "@/public/logo/icons8-react-48.png";
import tailwind from "@/public/logo/icons8-tailwind-css-48.png";
import nextjs from "@/public/logo/icons8-nextjs-48.png";
import git from "@/public/logo/icons8-git-48.png";
import github from "@/public/logo/icons8-git-64.png";
import supabase from "@/public/logo/icons8-supabase-48.png";
import docker from "@/public/logo/icons8-docker-48.png";
import api from "@/public/logo/icons8-rest-api-48.png";
import postman from "@/public/logo/icons8-postman-inc-48.png";
import auth from "@/public/logo/auth.png";
import zod from "@/public/logo/zod-seeklogo.png";
import reactQuery from "@/public/logo/react-query-seeklogo.png";
import reactRouter from "@/public/logo/react-router-seeklogo.png";
import styledc from "@/public/logo/styled-components-1.png";

const skills = [
  javascript,
  typescript,
  react,
  nextjs,
  reactQuery,
  redux,
  figma,
  linux,
  tailwind,
  git,
  github,
  supabase,
  docker,
  api,
  postman,
  auth,
  zod,
  reactRouter,
  styledc,
];

function Skill() {
  return (
    <div className="w-full bg-[#0e0e0e] py-4 px-4">
      <div className="w-full overflow-x-auto custom-scroll">
        <div className="flex justify-start md:justify-center gap-6 px-4 min-w-max pb-4">
          {skills.map((skill, idx) => (
            <Image
              key={idx}
              src={skill}
              alt="logo"
              width={48}
              height={48}
              className={`transition-transform duration-300 hover:scale-110 ${
                skill === github ? "invert" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
