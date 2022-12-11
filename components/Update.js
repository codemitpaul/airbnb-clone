import Image from "next/image";
import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

const Update = () => {
  const [modal, setModal] = useRecoilState(modalState);
  return (
    <div className="flex items-center justify-between bg-gray-100 text-slate-900 font-light px-5 py-3">
      <h3 className="text-sm text-center w-full sm:text-start md:text-xl font-medium">
        Hier kommt das Airbnb 2022: Winter-Update
      </h3>
      <div className="hidden md:flex items-center divide-x divide-gray-300 space-x-5 text-sm">
        <div
          onClick={() => setModal(true)}
          className="flex items-center space-x-5 cursor-pointer"
        >
          <Image
            src="/images/bild1.jpeg"
            width={35}
            alt="Film"
            height={35}
            className="object-contain rounded"
          />
          <p className="pr-5 hover:underline text-xs">Film abspielen</p>
        </div>
        <div className="pl-5 text-xs">
          <p>Alle Neuigkeiten entdecken</p>
        </div>
      </div>
    </div>
  );
};

export default Update;
