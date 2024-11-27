"use client";
import { useState } from "react";

const AccordionItem = ({ title, content}: {title: string, content: string}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`border-b border-gray-200 accordion-item ${isOpen ? "active" : ""}  `}>
      <div className={`flex items-center justify-between p-[30px] cursor-pointer bg-purple-50 dark:bg-white`} onClick={toggleAccordion}>
        <h3 className={"text-[1rem] m-0"}>{title}</h3>
        <span className="accordion-icon ml-6 md:ml-0"></span>
      </div>
      {isOpen && (
        <>
          <div className="p-[30px] hidden accordion-content bg-gray-50">{content}</div>
        </>
      )}
    </div>
  );
};

export default AccordionItem;
