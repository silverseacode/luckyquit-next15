"use client"
import Image from "next/image";
import React from "react";
import Video from "../Video";
import { useTheme } from "@/app/context/ThemeProvider";

export default function Main() {
  const { isDarkMode } = useTheme();

  return (
    <div className="lg:h-screen w-full flex flex-row justify-between px-4 md:px-0  -mb-[450px] md:m-0 -mt-[4rem]">
      <div className="flex flex-col lg:w-1/2 md:w-2/2 md:px-6 lg:px-6 lg:pt-20 xl:px-0">
        <div className="mt-[100px] lg:text-[1.3rem] xl:text-[3rem] md:text-[2rem] text-[1.5rem] flex flex-col  font-bold w-full">
          <h1 className="dark:text-white">Embrace your Lucky Quit</h1>
          <h1 className="dark:text-white">
            Empowering you to live{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              smoke-free!
            </span>
          </h1>
        </div>
        <div className="text-gray1 dark:text-white">
          <p className="leading-relaxed md:pr-20 lg:pr-0 lg:text-[0.9rem] xl:text-[1rem]">
            Unlock a healthier future and break free from smoking addiction with
            Lucky Quit – your comprehensive and personalized companion for a
            smoke-free life.
          </p>
        </div>
        <div className="mt-[20px] flex flex-row lg:flex-col xl:flex-row lg:items-start xl:items-center items-center">
          <Image
            width={230}
            height={75}
            alt="appstore"
            src={"/appstore.png"}
            className={
              "object-contain xl:w-[230px] xl:h-[75px] w-[140px] h-[80px] md:w-[200px] md:h-[80px] cursor-pointer md:mr-6 mr-2 dark:border-gray-200 dark:border dark:rounded-lg"
            }
          />

          <Image
            width={230}
            height={75}
            alt="playstore"
            src={"/playstore.png"}
            className={"object-contain cursor-pointer  xl:w-[230px] xl:h-[75px] w-[140px] h-[80px] md:w-[200px] md:h-[80px]"}
          />
        </div>
      </div>
      <div className="relative hidden lg:flex">
        
        {isDarkMode &&(
          <Video />
        )}

        {!isDarkMode && window.innerWidth >= 1400 && (
          <Image
            src="/video-dark.png"
            width={900}
            height={900}
            alt="Dark Image Home holding phone showing app"
          />
        )}
      </div>
    </div>
  );
}
