import Image from "next/image";
import React from "react";

const IconItem = ({ name, path }) => {
  return (
    <div className="flex flex-col space-x-2 items-center opacity-90">
      <Image width={24} height={24} src={name} className="object-contain" />
      <p className="text-xs text-gray-400 text-center w-24">{path}</p>
    </div>
  );
};

export default IconItem;
