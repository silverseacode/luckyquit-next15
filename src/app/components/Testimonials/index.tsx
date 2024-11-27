"use client";
import React, { useState } from "react";
export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "John",
      text: "I've tried several methods to quit smoking over the years, but this app truly stands out! The personalized approach, combined with motivational tools, made the process much more manageable.",
    },
    {
      id: 2,
      name: "Sarah",
      text: "The app's daily progress tracking kept me motivated, and the community support feature made me feel less alone in this journey. The guided exercises and reminders were perfectly timed, helping me manage cravings effectively.",
    },
    {
      id: 3,
      name: "Mike",
      text: "The daily reminders and supportive community kept me on track every step of the way. If you’re serious about quitting, this app is a must-have. Life-changing! ",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <>
      <div className="relative w-full max-w-lg mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="min-w-full p-4">
                <div className="bg-white rounded-md shadow-md p-6 h-[250px]">
                  <h3 className="testimonial-font md:text-[1.3rem]">{testimonial.text}</h3>
                  <div className="text-left mt-4">
                  <p className="text-gray-800 font-bold testimonial-font">- {testimonial.name}</p>
                </div>
                </div>
               
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-4 items-center">
          <div className=" transform -translate-y-1/2  mr-4 top-5 relative ">
            <button
              onClick={prevSlide}
              className="bg-white text-black  w-[2.5rem] h-[2.5rem] rounded-full"
            >
              &lt;
            </button>
          </div>
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 mx-1 rounded-full ${
                index === currentIndex ? "bg-gray-800" : "bg-white"
              }`}
            ></div>
          ))}
          <div className=" transform -translate-y-1/2 ml-4 top-5 relative">
            <button
              onClick={nextSlide}
              className="bg-white text-black w-[2.5rem] h-[2.5rem] rounded-full"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
