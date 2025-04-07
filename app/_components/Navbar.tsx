import Link from "next/link";

import React from "react";

function Navbar() {
  return (
    <div className="w-full p-6 text-white flex items-center justify-between">
      <h1 className="text-2xl font-[700] ">Masoud Jalili</h1>
      <ul className="flex items-center gap-6">
        <li className="font-bold text-xl">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="font-[300] text-xl">
          <Link href={"/#about"}>About</Link>
        </li>
        <li className="font-[300] text-xl">
          <Link href={"/#project"}>Project</Link>
        </li>
        <li className="font-[300] text-xl">
          <Link href={"/#contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
