"use client"
import Image from "next/image";
import React from "react";
import Video from "../Video";
import { useTheme } from "@/app/context/ThemeProvider";

export default function Main() {
  const { isDarkMode } = useTheme();
  return (
    <div className="h-screen w-full flex flex-row justify-between">
      <div className="flex flex-col w-1/2">
        <div className="mt-[100px] text-[3rem] font-bold">
          <h1 className="dark:text-white">Embrace your Lucky Quit</h1>
          <h1 className="dark:text-white">
            Empowering you to live{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              smoke-free!
            </span>
          </h1>
        </div>
        <div className="text-gray1 dark:text-white">
          <p className="leading-relaxed">
            Unlock a healthier future and break free from smoking addiction with
            Lucky Quit – your comprehensive and personalized companion for a
            smoke-free life.
          </p>
        </div>
        <div className="mt-[20px] flex flex-row items-center">
          <Image
            width={230}
            height={75}
            alt="appstore"
            src={"/appstore.png"}
            className={
              "object-contain cursor-pointer mr-6 dark:border-gray-200 dark:border dark:rounded-lg"
            }
          />

          <Image
            width={230}
            height={75}
            alt="playstore"
            src={"/playstore.png"}
            className={"object-contain cursor-pointer"}
          />
        </div>
      </div>
      <div className="relative">
        {!isDarkMode ? (
          <Image
            src="/video-dark.png"
            width={900}
            height={900}
            alt="Dark Image Home holding phone showing app"
          />
        ) : (
          <Video />
        )}
      </div>
    </div>
  );
}
