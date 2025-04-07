import Image from "next/image";
import React from "react";
import oasisc from "@/public/projects/oasisc.png";
import oasisa from "@/public/projects/oasisa.png";

import redux from "@/public/logo/icons8-redux-48.png";
import typescript from "@/public/logo/icons8-typescript-48.png";
import javascript from "@/public/logo/icons8-javascript-48.png";
import react from "@/public/logo/icons8-react-48.png";
import tailwind from "@/public/logo/icons8-tailwind-css-48.png";
import nextjs from "@/public/logo/icons8-nextjs-48.png";
import supabase from "@/public/logo/icons8-supabase-48.png";
import docker from "@/public/logo/icons8-docker-48.png";
import api from "@/public/logo/icons8-rest-api-48.png";
import postman from "@/public/logo/icons8-postman-inc-48.png";
import Link from "next/link";
import zod from "@/public/logo/zod-seeklogo.png";
import reactQuery from "@/public/logo/react-query-seeklogo.png";
import reactRouter from "@/public/logo/react-router-seeklogo.png";
import styledc from "@/public/logo/styled-components-1.png";

const cardData = [
  {
    domain: "https://the-wild-oasis-customer-panel-next.vercel.app",
    framework: { label: "NEXT.js", logo: nextjs },
    uiStateManagement: { label: "Context API", logo: react },
    DB: { label: "supabase", logo: supabase },
    styling: { label: "tailwindcss", logo: tailwind },
    demo: oasisc,
  },
  {
    domain: "https://the-wild-oasis-admin-panel-react.vercel.app",
    framework: { label: "React.js", logo: react },
    uiStateManagement: { label: "React Query", logo: reactQuery },
    DB: { label: "supabase", logo: supabase },
    styling: { label: "styled-components", logo: styledc },
    protection: { label: "ZOD", logo: zod },
    router: { label: "React Router", logo: reactRouter },

    demo: oasisa,
  },
];

function Projects() {
  return (
    <div className="flex flex-col justify-center items-center py-6 bg-black w-full gap-12">
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="w-[4px] h-20   bg-[#d76352] "></div>
        <div className="w-2 h-2 rounded-full bg-[#d76352]"></div>
        <h1 className="text-4xl text-white font-black">Projects</h1>
      </div>

      <div className="w-full flex justify-around items-center   px-6 py-6">
        {cardData.map((project) => (
          <a
            href={project.domain}
            target="_blank"
            rel="noopener noreferrer"
            key={project.domain}
            className="group w-1/3 h-[250px] cursor-pointer"
          >
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute w-full h-full flex items-center justify-center rounded-md overflow-hidden [backface-visibility:hidden]">
                <Image
                  src={project.demo}
                  alt="oasisc"
                  fill
                  className="object-cover"
                  placeholder="blur"
                />
              </div>

              <div className="absolute w-full h-full flex flex-col justify-between items-center border-2 border-[#d76352] rounded-md [backface-visibility:hidden] [transform:rotateY(180deg)] p-6  ">
                <p className="text-lg font-bold text-white bg-[#d76352] py-0.5 px-1.5 rounded-md">
                  Technology Desicion
                </p>

                <div className=" w-full flex flex-wrap justify-center items-center gap-6">
                  <div className=" flex flex-col-reverse gap-3 items-center justify-center">
                    <p className="text-sm font-bold text-white">
                      {project.framework.label}
                    </p>

                    <Image
                      src={project.framework.logo}
                      alt={project.framework.label}
                      width={30}
                      height={30}
                      placeholder="blur"
                    />
                  </div>

                  <div className=" flex flex-col-reverse gap-3 items-center justify-center">
                    <p className="text-sm font-bold text-white">
                      {project.uiStateManagement.label}
                    </p>

                    <Image
                      src={project.uiStateManagement.logo}
                      alt={project.uiStateManagement.label}
                      placeholder="blur"
                      width={30}
                      height={30}
                    />
                  </div>

                  <div className=" flex flex-col-reverse gap-3 items-center justify-center">
                    <p className="text-sm font-bold text-white">
                      {project.styling.label}
                    </p>

                    <Image
                      src={project.styling.logo}
                      alt={project.styling.label}
                      placeholder="blur"
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className=" flex flex-col-reverse gap-3 items-center justify-center">
                    <p className="text-sm font-bold text-white">
                      {project.DB.label}
                    </p>

                    <Image
                      src={project.DB.logo}
                      alt={project.DB.label}
                      placeholder="blur"
                      width={30}
                      height={30}
                    />
                  </div>

                  {project.protection && (
                    <div className=" flex flex-col-reverse gap-3 items-center justify-center">
                      <p className="text-sm font-bold text-white">
                        {project.protection.label}
                      </p>

                      <Image
                        src={project.protection.logo}
                        alt={project.protection.label}
                        placeholder="blur"
                        width={30}
                        height={30}
                      />
                    </div>
                  )}

                  {project.router && (
                    <div className=" flex flex-col-reverse gap-3 items-center justify-center">
                      <p className="text-sm font-bold text-white">
                        {project.router.label}
                      </p>

                      <Image
                        src={project.router.logo}
                        alt={project.router.label}
                        placeholder="blur"
                        width={30}
                        height={30}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
