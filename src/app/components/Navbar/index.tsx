"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import NavbarItems from "../NavbarItems";
import {  FaMoon } from 'react-icons/fa';
import { useTheme } from "@/app/context/ThemeProvider";
export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const {toggleTheme} = useTheme();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      toggleTheme()
    } else {
      document.documentElement.classList.remove('dark');
      toggleTheme()
    }
  }, [isDarkMode]);

  return (
    <nav className="flex flex-row items-center mt-5">
      <div className="cursor-pointer flex-row flex items-center">
        <Image width={60} height={60} alt="Lucky Quit Logo" src={isDarkMode ? "/logo-dark.png":"/logo.png"} />
        <span className={"w-[15rem]  font-bold text-[1.5rem] dark:text-white"}>Lucky Quit</span>
      </div>
      <NavbarItems/>
      <div className="ml-auto flex items-center">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`relative inline-flex items-center h-8 rounded-full w-16 transition-colors focus:outline-none ${
            isDarkMode ? 'bg-gray-700' : 'bg-gray-400'
          }`}
        >
          <span className="sr-only">Toggle Dark Mode</span>
          <span
            className={`${
              isDarkMode ? 'translate-x-8' : 'translate-x-1'
            } inline-block w-6 h-6 transform bg-white rounded-full transition-transform flex items-center justify-center`}
          >
            <FaMoon className="h-5 w-5 text-gray-800" />
          </span>
        </button>
      </div>
    </nav>
  );
}
