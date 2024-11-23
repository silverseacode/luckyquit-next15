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
    <ul className="flex flex-row  w-full ml-12">
      <li className="text-base " >Home</li>
      <li className="text-base ml-12" onClick={() => scrollToSection("features-section")}>Features</li>
      <li className="text-base ml-12" onClick={() => scrollToSection("coach-section")}>Are you a Coach?</li>
      <li className="text-base ml-12" onClick={() => scrollToSection("faq-section")}>FAQ</li>
    </ul>
  );
}
