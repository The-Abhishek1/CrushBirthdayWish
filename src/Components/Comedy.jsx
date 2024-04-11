import React from "react";
import video1 from "../bindu/videos/sanitydotcom-11-04-2024-0001.mp4";
import video2 from "../bindu/videos/david0ff_01-17-03-2024-0001.mp4";

//Main Function
export default function Comedy() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-center font-bold italic text-white text-[20px]">
          HER SMILE😁🐕💝
        </h1>
        <video
          className="h-[250px] w-[250px] cursor-pointer"
          src={video2}
          controls
        ></video>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-center font-bold italic text-white text-[20px]">
          HER CUTENESS🤔💖💤
        </h1>
        <video
          className="h-[250px] w-[250px] cursor-pointer"
          src={video1}
          controls
        ></video>
      </div>
    </div>
  );
}
