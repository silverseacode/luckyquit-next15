import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div className={" w-full h-[20rem] relative bottom-0 bg-black1 dark:bg-black md:h-[260px] pt-[2rem] md:pt-0"}>
      <div className={"flex justify-center items-center  w-full"}>
        <div
          className={"flex flex-col items-center justify-center mt-6"}
        >
          <h1 className="font-bold text-white text-[1.5rem] mb-4">Lucky Quit</h1>

          <div className="flex flex-col justify-center items-center">
            <div className="gap-x-3 flex cursor-pointer text-[0.9rem]">
              <span className="text-white">Contact</span>
              <span className="text-white">Community</span>
              <span className="text-white">Free Trial</span>
            </div>
            <div className="gap-x-3 flex cursor-pointer text-[0.9rem]">
              <span className="text-white">Terms & Privacy</span>
              <span className="text-white">Accessibility</span>
              <span className="text-white">Jobs</span>
              <span className="text-white">Help</span>
            </div>
            <div className="gap-x-3 flex cursor-pointer text-[0.9rem]">
              <span className="text-white">What&apos;s New</span>
              <span className="text-white">News & Press</span>
              <span className="text-white">Pricing </span>
            </div>
          </div>

          <div className={" flex flex-row mt-5 mb-5 gap-x-5 cursor-pointer"}>
            <FaFacebook size={35} color={"#FFF"} />

            <FaInstagram size={35} color={"#FFF"} />
            <FaLinkedin size={35} color="#FFF" />
        <FaYoutube size={35} color="#FFF" />
          </div>

          <h5 className={"text-[0.9rem] text-white"}>
            © {currentYear} - All rights reserved
          </h5>
        </div>
      </div>
    </div>
  );
}
