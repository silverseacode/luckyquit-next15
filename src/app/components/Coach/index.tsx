import React from 'react'
import Image from 'next/image'
export default function Coach() {
  return (
    <div>
          <div className="flex justify-between">
            <div className="w-1/3 flex flex-col items-center px-8">
              <Image
                className={"w-[180px] h-[180px] rounded-[24px] object-cover mb-8"}
                src={"/icon-money-coach.png"}
                width={250}
                height={250}
                alt="icon money"
              />
              <p className={"text-[1.3rem] text-center text-gray1"}>
                Share your expertise and provide personalized guidance to
                empower others to break free from the habit and improve their
                well-being. Make a positive impact and earn money by helping
                people lead healthier lives.
              </p>
            </div>
            <div className="w-1/3  flex flex-col items-center px-8">
            <Image
                className={"w-[180px] h-[180px] rounded-[24px] object-cover mb-8"}
                src={"/icon-homework-coach.png"}
                width={250}
                height={250}
                alt="icon homework"
              />
              <p className={"text-[1.3rem] text-center text-gray1"}>
                As a Quit Smoking Coach, you will offer customized modules and
                exercises to individuals who are quitting smoking. These
                resources will be specifically designed to address their unique
                needs, challenges, and motivations.
              </p>
            </div>
            <div className="w-1/3  flex flex-col items-center px-8">
              <Image
                className={"w-[180px] h-[180px] rounded-[24px] object-cover mb-8"}
                src={"/videocall-icon-coach.png"}
                width={200}
                height={200}
                alt="icon videocall"
              />
              <p className={"text-[1.3rem]  text-center text-gray1"}>
                Facilitate direct and convenient communication between the Quit
                Smoking Coach and individuals through video calls and chat. This
                feature allows for real-time discussions, providing a personal
                touch to the coaching experience.
              </p>
            </div>
          </div>
        </div>
  )
}
