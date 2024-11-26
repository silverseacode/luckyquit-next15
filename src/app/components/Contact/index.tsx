"use client";
import React from "react";

export default function Contact() {
  const [isSent, setIsSent] = React.useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      setIsSent(true);
    }
  };
  return (
    <div className="mx-auto w-[40rem] h-[25rem] bg-gray-50 rounded-md shadow-md p-12">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="px-2 mt-1 block w-full rounded-md h-[2rem] border-gray-300 shadow-sm sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                required
                className="px-2 mt-1 block w-full rounded-md border-gray-300 h-[2rem] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className=" px-2 mt-1 block w-full rounded-md h-[2rem] border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="px-2 pt-2 mt-1 resize-none block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className={`${
                isSent ? "bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-green-400" : "bg-gradient-to-r from-purple-300 to-purple-500 hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-purple-400"
              } w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white  `}
            >
              {isSent ? "Successfully Sent!" : "Contact Us"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
