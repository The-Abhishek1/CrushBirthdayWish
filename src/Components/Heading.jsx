import React from "react";
import emoji1 from "../Emojis/banner.png";
import emoji2 from "../Emojis/celebration.png";

function Header() {
  return (
    <div className="m-0 p-2 relative grid place-content-center ">
      <div className="flex flex-row px-2 gap-3 items-center justify-center">
        <img
          src={emoji2}
          alt=""
          className="msm:w-[70px] msm:h-[70px] sm:w-[150px]"
        />
        <img
          src={emoji1}
          alt=""
          className="msm:w-[100px] msm:h-[100px] sm:w-[200px]"
        />
        <img
          src={emoji2}
          alt=""
          className="msm:w-[70px] msm:h-[70px] sm:w-[150px]"
        />
      </div>
      <h4 className="text-center text-[24px] italic text-white font-bold uppercase mt-2">
        Coffee😊😆🤦‍♂️
      </h4>
    </div>
  );
}

export default Header;
