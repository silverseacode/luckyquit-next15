import Image from "next/image";
import React from "react";
import Video from "../Video";

export default function Main() {
  return (
    <div className="h-screen w-full flex flex-row justify-between">
      <div className="flex flex-col w-1/2">
        <div className="mt-[100px] text-[3rem] font-bold">
          <h1>Embrace your Lucky Quit</h1>
          <h1>Empowering you to live smoke-free!</h1>
        </div>
        <div className="text-gray1">
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
            className={"object-contain cursor-pointer mr-6"}
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
        <Video />
      </div>
    </div>
  );
}
