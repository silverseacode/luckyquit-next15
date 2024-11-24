import React from "react";
import { FaFacebook, FaInstagram } from 'react-icons/fa';
export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div className={"mt-[100px] w-full bg-black1 h-[220px]"}>
      <div className={"flex justify-center items-center  w-full"}>
        <div className={"w-1/2 flex flex-col items-center justify-center pt-14"}>
          <h1 className="font-bold text-white text-[1.5rem]">Lucky Quit</h1>

          <div className={" flex flex-row mt-5 mb-5 gap-x-5"}>
           
             <FaFacebook size={35} color={"#FFF"} />
            
             <FaInstagram size={35} color={"#FFF"} />
          </div>

          <h5 className={"text-[0.9rem] text-white"}>
            © {currentYear} - All rights reserved
          </h5>
        </div>
      </div>
    </div>
  );
}
