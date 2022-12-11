import { HeartIcon, StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

const AppartementItem = ({
  name,
  street,
  date,
  city,
  image,
  price,
  privat,
  rating,
}) => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full h-64">
        <Image src={image} alt="" fill className="object-cover rounded-xl" />
        <i className="absolute top-3 right-3">
          <HeartIcon className="h-6 w-6" fill="gray" />
        </i>
      </div>
      <div className="flex items-center justify-between pt-2">
        <h3 className="font-semibold text-sm">{name}</h3>
        <span className="flex items-center space-x-1">
          <i>
            <StarIcon className="h-4 w-4" />
          </i>
          <span className="text-sm">{rating.toFixed(1)}</span>
        </span>
      </div>
      <p className="font-light text-sm text-gray-500">{street}</p>
      <p className="font-light text-sm text-gray-500">
        {date} ‧{" "}
        {privat ? "Private:r Gastgeber:in" : "Gewerbliche:r Vermieter:in"}
      </p>
      <p className="text-sm">
        <span className="font-semibold">{price}€</span>
        <span className="pl-2 font-light text-gray-700">/ Nacht</span>
      </p>
    </div>
  );
};

export default AppartementItem;
