import {
  AdjustmentsHorizontalIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import React, { useRef, useState } from "react";
import { iconLinks } from "../constants/iconLinks";
import IconItem from "./IconItem";

const Icons = () => {
  const iconsRowRef = useRef();
  const [scrollLeftOrRight, setScrollLeftOrRight] = useState(false);

  const scrollHandler = (wayTo) => {
    if (iconsRowRef.current) {
      const { scrollLeft, clientWidth } = iconsRowRef.current;
      const scrollTo =
        wayTo === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      iconsRowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex items-center justify-between">
      <i
        onClick={() => scrollHandler("left")}
        className={`absolute left-4 top-0 z-10 bg-gray-100 rounded-full p-1 hover:scale-105`}
      >
        <ChevronLeftIcon className="icons" />
      </i>
      <div
        ref={iconsRowRef}
        className="flex items-center space-x-5 overflow-x-scroll scrollbar-hide z-0 px-5 w-full md:w-10/12"
      >
        {iconLinks.map((link, index) => (
          <IconItem key={index} {...link} />
        ))}
      </div>
      <i
        onClick={() => scrollHandler("right")}
        className="absolute right-4 md:right-[17%] top-0 z-10 bg-gray-100 rounded-full p-1 hover:scale-105"
      >
        <ChevronRightIcon className="icons" />
      </i>
      <div className="hidden md:w-2/12 md:flex justify-center">
        <button className="px-3 py-2 rounded-xl bg-white text-sm text-gray-700 hover:bg-gray-100 flex items-center border border-gray-300">
          <i>
            <AdjustmentsHorizontalIcon className="icons" />
          </i>
          <span className="pl-3">Filter</span>
        </button>
      </div>
    </div>
  );
};

export default Icons;
