import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <div className="relative h-[35rem] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center xl:bg-fixed"
        style={{
          backgroundImage: "url('mardelplata.avif')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 flex items-center justify-center h-full flex-col">
        <h1 className="text-white  lg:text-[2.2rem] text-[1.5rem]  md:text-[1.8rem] font-bold pt-12">About Us</h1>
        <div className="flex justify-center items-center h-full">
          <div className="bg-white shadow-md rounded-lg p-6 text-center max-w-sm">
            <Image
              src="/profile.jpeg"
              width={128}
              height={128}
              alt="Franco Nicolas Coronel"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold">Franco Nicolas Coronel</h2>
            <p className="text-gray-600">CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
}
