"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Features() {
  const [isVisibleHome, setIsVisibleHome] = useState(false);
  const [isVisibleHealth, setIsVisibleHealth] = useState(false);
  const [isVisibleMoney, setIsVisibleMoney] = useState(false);
  const [isVisibleCommunities, setIsVisibleCommunities] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsVisibleHome(true);
    }
  }, []);

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
      <div
        id="home"
        className="flex flex-col-reverse mt-0 md:flex-row md:justify-center items-start px-4 lg:px-0"
      >
        <div className="mr-[0px] lg:w-[500px] w-[27rem] md:text-[1.3rem]">
          <h2 className="font-bold lg:text-[2rem] md:text-[1.5rem] text-[1.2rem] mb-5 dark:text-white text-left w-full">
            Home
          </h2>
          <p className="leading-relaxed text-gray2 dark:text-white pr-[10rem] md:pr-0 lg:text-[1.3rem] md:text-[1rem]">
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
          className={`animation-container ${isVisibleHome ? "animate" : ""}`}
        >
          <Image
            className="max-w-[300px] rounded-[24px] md:ml-20  mb-4 md:mt-0"
            src={"/icon-home.png"}
            width={200}
            height={200}
            alt="Animated Image"
          />
        </div>
      </div>

      <div
        id="health"
        className="flex flex-col md:flex-row md:justify-center items-start mt-[5rem] lg:mt-[250px] md:mt-[150px] px-4 lg:px-0"
      >
        <div
          className={`animation-container-reverse ${
            isVisibleHealth ? "animate" : ""
          }`}
        >
          <Image
            className="max-w-[300px] rounded-[24px]  mb-4 md:mt-0"
            src={"/icon-health.png"}
            width={200}
            height={200}
            alt="Animated Image"
          />
        </div>
        <div className="md:ml-[50px] lg:w-[500px] w-[27rem] md:text-[1.3rem] ">
          <h2 className="font-bold mb-5 text-[1.3rem] lg:text-[2rem] md:text-[1.3rem] dark:text-white">
            Health
          </h2>
          <p className="leading-relaxed text-gray2 dark:text-white pr-[10rem] md:pr-0 lg:text-[1.3rem] md:text-[1rem]">
            In the &ldquo;Health&rdquo; section, you can monitor the percentage
            improvements in various aspects of your health as you continue to
            stay smoke-free. These aspects include blood pressure, blood oxygen
            levels, nicotine levels in the blood, the risk of heart attack, and
            more.
          </p>
        </div>
      </div>

      <div
        id="money"
        className="flex flex-col-reverse md:mt-0 md:flex-row md:justify-center mt-[5rem] items-start px-4 lg:px-0"
      >
        <div className="mr-[0px] lg:w-[500px] w-[27rem] md:text-[1.3rem]">
          <h2 className="font-bold md:text-[1.3rem] lg:text-[2rem] text-[1.2rem] mb-5 dark:text-white text-left w-full lg:mt-[15rem] md:mt-[150px]">
            Money
          </h2>
          <p className="leading-relaxed text-gray2 dark:text-white pr-[10rem] md:pr-0 lg:text-[1.3rem] md:text-[1rem]">
            Here, you can visualize your weekly cigarette expenses through Line
            and Pie graphs. Additionally, you&apos;ll have the ability to track
            your total spending for the month and overall duration.
          </p>
        </div>
        <div
          className={`animation-container ${isVisibleMoney ? "animate" : ""}`}
        >
          <Image
            className="max-w-[300px] rounded-[24px] md:ml-20 mb-4 lg:mt-[15rem] md:mt-[150px]"
            src={"/icon-money.png"}
            width={200}
            height={200}
            alt="Animated Image"
          />
        </div>
      </div>

      <div
        id="communities"
        className="flex flex-col md:flex-row md:justify-center items-start mt-[5rem] lg:mt-[250px] md:mt-[150px] px-4 lg:px-0"
      >
        <div
          className={`animation-container-reverse ${
            isVisibleCommunities ? "animate" : ""
          }`}
        >
          <Image
            className="max-w-[300px] rounded-[24px] mr-20  mb-4 md:mt-0"
            src={"/icon-communities.png"}
            width={200}
            height={200}
            alt="Animated Image"
          />
        </div>
        <div className="md:ml-[50px] lg:w-[500px] w-[27rem] md:text-[1.3rem] ">
          <h2 className="font-bold mb-5 text-[1.2rem] lg:text-[2rem] md:text-[1.3rem] dark:text-white">
            Commnunities
          </h2>
          <p className="leading-relaxed text-gray2 dark:text-white pr-[10rem] md:pr-0 lg:text-[1.3rem] md:text-[1rem]">
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
