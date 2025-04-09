import Image from "next/image";
import React from "react";
import oasisc from "@/public/projects/oasisc.png";
import oasisa from "@/public/projects/oasisa.png";
import coffee from "@/public/projects/coffee.png";
import redux from "@/public/logo/icons8-redux-48.png";
import react from "@/public/logo/icons8-react-48.png";
import auth from "@/public/logo/auth.png";
import tailwind from "@/public/logo/icons8-tailwind-css-48.png";
import nextjs from "@/public/logo/icons8-nextjs-48.png";
import supabase from "@/public/logo/icons8-supabase-48.png";
import docker from "@/public/logo/icons8-docker-48.png";
import api from "@/public/logo/icons8-rest-api-48.png";
import postman from "@/public/logo/icons8-postman-inc-48.png";
import Link from "next/link";
import typescript from "@/public/logo/icons8-typescript-48.png";
import javascript from "@/public/logo/icons8-javascript-48.png";
import zod from "@/public/logo/zod-seeklogo.png";
import reactQuery from "@/public/logo/react-query-seeklogo.png";
import reactRouter from "@/public/logo/react-router-seeklogo.png";
import styledc from "@/public/logo/styled-components-1.png";
import worldwise from "@/public/projects/worldwise.png";
import pizza from "@/public/projects/fastpizza.png";
import popcorn from "@/public/projects/popcorn.png";
import quiz from "@/public/projects/quiz.png";

const cardData = [
  {
    title: "Hotel reservation (Customer panel)",
    domain: "https://the-wild-oasis-customer-panel-next.vercel.app",
    framework: { label: "NEXT.js", logo: nextjs },
    uiStateManagement: { label: "Context API", logo: react },
    DB: { label: "supabase", logo: supabase },
    styling: { label: "tailwindcss", logo: tailwind },
    demo: oasisc,
  },
  {
    title: "Hotel reservation (Admin panel)",
    domain: "https://the-wild-oasis-admin-panel-react.vercel.app",
    framework: { label: "React.js", logo: react },
    uiStateManagement: { label: "React Query", logo: reactQuery },
    DB: { label: "supabase", logo: supabase },
    styling: { label: "styled-components", logo: styledc },
    protection: { label: "ZOD", logo: zod },
    router: { label: "React Router", logo: reactRouter },

    demo: oasisa,
  },
  {
    title: "Coffe Shop (Real world Project)-mobile app",
    domain: "https://final-shop-gjhc.vercel.app",
    framework: { label: "NEXT.js", logo: nextjs },
    uiStateManagement: { label: "Redux", logo: redux },
    DB: { label: "supabase", logo: supabase },
    styling: { label: "tailwindcss", logo: tailwind },
    protection: { label: "Next-auth", logo: auth },

    demo: coffee,
  },
  {
    title: "World-wise",
    domain: "https://world-wise-seven-xi.vercel.app",
    framework: { label: "React.js", logo: react },
    uiStateManagement: { label: "Redux", logo: redux },

    styling: { label: "tailwindcss", logo: tailwind },
    router: { label: "React Router", logo: reactRouter },

    demo: worldwise,
  },
  {
    title: "Watch movie",
    domain: "https://use-popcorn-roan-sigma.vercel.app",
    framework: { label: "React.js", logo: react },
    uiStateManagement: { label: "Redux", logo: redux },

    styling: { label: "tailwindcss", logo: tailwind },
    router: { label: "React Router", logo: reactRouter },

    demo: popcorn,
  },
  {
    title: "order pizza",
    domain: "https://fastpizza-sable.vercel.app/",
    framework: { label: "React.js", logo: react },
    uiStateManagement: { label: "Redux", logo: redux },

    styling: { label: "tailwindcss", logo: tailwind },
    router: { label: "React Router", logo: reactRouter },

    demo: pizza,
  },
  {
    title: "react quiz",
    domain: "https://react-quiz-livid-gamma.vercel.app",
    framework: { label: "React.js", logo: react },
    uiStateManagement: { label: "Redux", logo: redux },

    styling: { label: "tailwindcss", logo: tailwind },
    router: { label: "React Router", logo: reactRouter },

    demo: quiz,
  },
];

function Projects() {
  return (
    <div
      id="project"
      className=" flex flex-col justify-center items-center py-6 bg-black w-full gap-12 "
    >
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="w-[4px] h-20   bg-[#d76352] "></div>
        <div className="w-2 h-2 rounded-full bg-[#d76352]"></div>
        <h1 className="text-4xl text-white font-black">Projects</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-6 py-12 max-w-[1440px]">
        {cardData.map((project) => (
          <div
            key={project.domain}
            className="relative group bg-[#111] border border-[#d76352]/40 rounded-xl shadow-lg overflow-hidden"
          >
            <a
              href={project.domain}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-[250px] relative"
            >
              <Image
                src={project.demo}
                alt={project.title}
                fill
                className="object-cover transition duration-500 group-hover:blur-sm"
                placeholder="blur"
              />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/50">
                <button className="bg-[#d76352] text-white text-sm font-bold py-2 px-4 rounded-full shadow-md hover:bg-[#c45645] transition cursor-pointer">
                  Click to view project
                </button>
              </div>
            </a>

            <div className="p-4 space-y-4">
              <h1 className="text-white font-semibold text-lg">
                {project.title}
              </h1>

              <div className="flex flex-wrap gap-4 items-center justify-start">
                {[
                  project.framework,
                  project.uiStateManagement,
                  project.styling,
                  project.DB,
                  project.protection,
                  project.router,
                ]
                  .filter(Boolean)
                  .map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center justify-center text-white text-sm"
                    >
                      <Image
                        src={tech.logo}
                        alt={tech.label}
                        width={28}
                        height={28}
                        placeholder="blur"
                      />
                      <span className="mt-1 text-xs">{tech.label}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
