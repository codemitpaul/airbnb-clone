import React from "react";
import ReactPlayer from "react-player";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

const PopupPlayer = () => {
  const [modal, setModal] = useRecoilState(modalState);
  return (
    <div
      className="absolute inset-0 z-20 bg-gray-900 bg-opacity-80"
      onClick={() => setModal(false)}
    >
      <div className="relative h-full w-full">
        <div className="top-28 bottom-28 left-5 right-5 sm:left-14 sm:right-14 absolute z-50 shadow-lg">
          <ReactPlayer
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=dvhDW3CRgj8&ab_channel=sportstudiofu%C3%9Fball"
          />
        </div>
      </div>
    </div>
  );
};

export default PopupPlayer;
