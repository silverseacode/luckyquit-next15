"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Features() {
  const [isVisibleHome, setIsVisibleHome] = useState(false);
  const [isVisibleHealth, setIsVisibleHealth] = useState(false);
  const [isVisibleMoney, setIsVisibleMoney] = useState(false);
  const [isVisibleCommunities, setIsVisibleCommunities] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsetHome = document.getElementById("home")?.offsetTop;
      if (scrollY > (sectionOffsetHome ?? 0) - 1000) {
        setIsVisibleHome(true);
      }

      const sectionOffsetHealth = document.getElementById("health")?.offsetTop;
      if (scrollY > (sectionOffsetHealth ?? 0) - 500) {
        setIsVisibleHealth(true);
      }

      const sectionOffsetMoney = document.getElementById("money")?.offsetTop;
      if (scrollY > (sectionOffsetMoney ?? 0) - 500) {
        setIsVisibleMoney(true);
      }

      const sectionOffsetCommunities =
        document.getElementById("communities")?.offsetTop;
      if (scrollY > (sectionOffsetCommunities ?? 0) - 1000) {
        setIsVisibleCommunities(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="features">
      <div id="home" className="flex mt-0 flex-row justify-center">
        <div className="mr-[0px] w-[500px] text-[1.3rem]">
          <h2 className="font-bold text-[2rem] mb-5">Home</h2>
          <p className="leading-relaxed text-gray2">
            In the &lsquo;Home&rsquo; section, you&apos;ll find a cigarette
            counter and a timer to track your smoke-free time. At the bottom,
            there&apos;s a timeline that logs your smoked cigarettes, including
            location and timestamp. This timeline allows you to filter by
            different parameters such as the current day, yesterday, or the
            entire week, offering insights into your smoking patterns and
            progress on your smoke-free journey.
          </p>
        </div>
        <div
          className={`animation-container ${
            isVisibleHome ? "animate" : ""
          }`}
        >
          <Image
            className="max-w-[300px] rounded-[24px] ml-20"
            src={"/icon-home.png"}
            width={200}
            height={200}
            alt="Animated Image"
          />
        </div>
      </div>

      <div id="health" className="flex flex-row justify-center mt-[250px]">
        <div
          className={`animation-container-reverse ${
            isVisibleHealth ? "animate" : ""
          }`}
        >
          <Image
            className="max-w-[300px] rounded-[24px]"
            src={"/icon-health.png"}
            width={200}
            height={200}
            alt="Animated Image"
          />
        </div>
        <div className="ml-[50px] w-[500px] text-[1.3rem] ">
          <h2 className="font-bold mb-5 text-[2rem]">Health</h2>
          <p className="leading-relaxed text-gray2">
            In the &ldquo;Health&rdquo; section, you can monitor the percentage
            improvements in various aspects of your health as you continue to
            stay smoke-free. These aspects include blood pressure, blood oxygen
            levels, nicotine levels in the blood, the risk of heart attack, and
            more.
          </p>
        </div>
      </div>

      <div id="money" className="flex flex-row justify-center mt-[250px]">
        <div className="mr-[0px] w-[500px] text-[1.3rem]">
          <h2 className="font-bold text-[2rem] mb-5">Money</h2>
          <p className="leading-relaxed text-gray2">
            Here, you can visualize your weekly cigarette expenses through Line
            and Pie graphs. Additionally, you&apos;ll have the ability to track
            your total spending for the month and overall duration.
          </p>
        </div>
        <div
          className={`animation-container ${isVisibleMoney ? "animate" : ""}`}
        >
          <Image
            className="max-w-[300px] rounded-[24px] ml-20"
            src={"/icon-money.png"}
            width={200}
            height={200}
            alt="Animated Image"
          />
        </div>
      </div>

      <div id="communities" className="flex flex-row justify-center mt-[250px]">
        <div
          className={`animation-container-reverse ${
            isVisibleCommunities ? "animate" : ""
          }`}
        >
          <Image
            className="max-w-[300px] rounded-[24px] mr-20"
            src={"/icon-communities.png"}
            width={200}
            height={200}
            alt="Animated Image"
          />
        </div>
        <div className="mr-[0px] w-[500px] text-[1.3rem]">
          <h2 className="font-bold text-[2rem] mb-5">Communities</h2>
          <p className="leading-relaxed text-gray2">
            Discover a dynamic &ldquo;Communities&rdquo; section designed for
            both quitters and coaches. Connect with others who understand your
            journey, engage in private chats, and share your progress through
            posts. Find profiles of coaches and access their services directly
            in the app. For coaches, this section offers tailored tools to
            interact, share insights, and connect with potential clients.
          </p>
        </div>
      </div>
    </div>
  );
}
