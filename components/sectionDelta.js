import Link from "next/link";
import { useState } from "react";

export default () => {
  return (
    <>
      <div className="px-4 pt-32 md:pt-52 xl:pt-64 pb-20 bg-gamma relative">
        {/* Border - TR */}
        <img
          className="absolute w-full -top-4 right-0"
          src="/img/border-gamma-top.png"
          alt=""
        />
        <img className="mx-auto" src="/img/logo.png" alt="logo" />
        <ul className="font-medium font-ubuntu gap-x-5 flex flex-wrap justify-center mt-6">
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-all duration-300"
              aria-current="page"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-all duration-300"
            >
              COLLECTIBLES
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-all duration-300"
            >
              ROADMAP
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-all duration-300"
            >
              TEAM
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-all duration-300"
            >
              FAQ'S
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
