"use client";
import React from "react";

export default function NavbarItems() {
  const scrollToSection = (section: string) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      const { top } = sectionElement.getBoundingClientRect();
      window.scrollTo({
        top: window.pageYOffset + top,
        behavior: "smooth",
      });
    }
  };
  return (
    <ul className="flex flex-row  w-full md:ml-4 lg:ml-12">
      <li className="cursor-pointer transform transition-transform hover:scale-110 text-base dark:text-white" >Home</li>
      <li className="cursor-pointer text-base md:ml-4 lg:ml-12 dark:text-white transform transition-transform hover:scale-110" onClick={() => scrollToSection("features-section")}>Features</li>
      <li className="cursor-pointer text-base md:ml-4 lg:ml-12 dark:text-white transform transition-transform hover:scale-110" onClick={() => scrollToSection("coach-section")}>Are you a Coach?</li>
      <li className="cursor-pointer text-base md:ml-4 lg:ml-12 dark:text-white transform transition-transform hover:scale-110" onClick={() => scrollToSection("faq-section")}>FAQ</li>
    </ul>
  );
}
