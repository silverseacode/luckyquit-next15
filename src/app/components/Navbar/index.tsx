import React from "react";
import Image from "next/image";
import NavbarItems from "../NavbarItems";
export default function Navbar() {
  return (
    <nav className="flex flex-row items-center mt-5">
      <div className="cursor-pointer flex-row flex items-center">
        <Image width={60} height={60} alt="Lucky Quit Logo" src={"/logo.png"} />
        <span className={"w-[15rem]  font-bold text-[1.5rem]"}>Lucky Quit</span>
      </div>
      <NavbarItems/>
    </nav>
  );
}
