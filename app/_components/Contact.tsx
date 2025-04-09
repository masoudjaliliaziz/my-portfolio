"use client";

import { Mail, Phone, Github, Linkedin } from "lucide-react";
import React from "react";

const contacts = [
  {
    icon: <Phone size={22} />,
    label: "Phone",
    value: "+98 933 977 3919",
    href: "tel:+989339773919",
  },
  {
    icon: <Mail size={22} />,
    label: "Email",
    value: "masoudjalili0781@gmail.com",
    href: "mailto:masoudjalili0781@gmail.com",
  },
  {
    icon: <Github size={22} />,
    label: "GitHub",
    value: "github.com/masoudjaliliaziz",
    href: "https://github.com/masoudjaliliaziz",
  },
  {
    icon: <Linkedin size={22} />,
    label: "LinkedIn",
    value: "linkedin.com/in/masoudjaliliaziz",
    href: "https://www.linkedin.com/in/masoudjaliliaziz",
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-black text-white py-16 px-4 md:px-20"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Contact <span className="text-[#d76352]">Me</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {contacts.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-colors duration-300 p-5 rounded-xl border border-[#333] shadow-md hover:shadow-[#d76352]/40"
            >
              <div className="text-[#d76352]">{item.icon}</div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">{item.label}</span>
                <span className="text-base font-medium">{item.value}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
