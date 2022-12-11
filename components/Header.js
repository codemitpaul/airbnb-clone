import Image from "next/image";
import React from "react";
import {
  Bars3Icon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="py-5 px-5 bg-white flex items-center justify-between">
      <Image
        src="/images/logo.png"
        width={80}
        height={80}
        alt="Airbnb"
        className="object-contain"
      />
      <div className="hidden border border-gray-300 rounded-full py-1 px-3 divide-x divide-gray-300 md:flex items-center space-x-3">
        <p className="text-xs font-semibold pl-5">Irgendwo</p>
        <p className="text-xs font-semibold pl-5">Eine Woche</p>
        <input
          type="text"
          className="pl-5 h-full placeholder:text-sm placeholder:font-extralight outline-none text-sm"
          placeholder="Gäste hinzufügen"
        />
        <button className="rounded-full bg-rose-600 text-white p-2">
          <i>
            <MagnifyingGlassIcon className="icons" />
          </i>
        </button>
      </div>
      <div className="flex items-center space-x-5">
        <p className="hidden lg:inline-flex">Als Gastgeber:in loslegen</p>
        <i>
          <GlobeAltIcon className="icons" />
        </i>
        <div className="p-3 rounded-full border border-gray-300 flex items-center space-x-3">
          <i>
            <Bars3Icon className="icons" />
          </i>
          <i className="relative">
            <UserIcon className="icons" />
            <span className="absolute -top-1 right-0 bg-rose-600 rounded-full p-1"></span>
          </i>
        </div>
      </div>
    </header>
  );
};

export default Header;
