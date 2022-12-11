import React from "react";
import data from "../constants/sample.json";
import AppartementItem from "./AppartementItem";

const Appartements = () => {
  return (
    <div className="flex flex-col items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-10 px-4 py-5 sm:px-8 sm:py-10">
      {data.map((appartement, index) => (
        <AppartementItem key={index} {...appartement} />
      ))}
    </div>
  );
};

export default Appartements;
