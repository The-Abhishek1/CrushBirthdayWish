import React, { useState } from "react";
import Propose from "./Propose";
import photo from "../Emojis/teddy.jpg";
function Footer() {
  const [show, setShow] = useState(false);
  const [firstNo, setFirstNo] = useState(false);

  return (
    <div className="p-2">
      <div>
        <h3 className="text-center italic text-white text-[20px]">
          Wanna Play a Game?🎮🕹️
        </h3>
        <h4 className="text-white text-[13px] text-center italic">
          <p className="text-[15px] text-cyan-400">Warning!!</p>
          "Before you play: Remember, it's all in good fun! Don't blame me for
          any butterflies in your stomach or smiles on your face afterward 😉💖"
        </h4>
        <p className="text-center">
          <button
            onClick={() => {
              setShow(!show);
              console.log("Showing Propose Dialog");
            }}
            className="px-[10px] text-center text-white italic bg-lime-500 border-none rounded-[10px] py-[8px] m-4 cursor-pointer"
          >
            Click here to start
          </button>
        </p>
      </div>
      <div className="p-4">
        {show ? (
          <div className="grid place-content-center items-center italic gap-2">
            <h3 className="text-center text-white">
              I Love You, Do You Love Me😜❤️
            </h3>
            <img
              src={photo}
              alt=""
              style={{
                height: "150px",
                width: "250px",
                borderRadius: "20px",
              }}
            />
            <div className="flex flex-row justify-around mt-[10px] ">
              <button
                onClick={() => {
                  setShow(false);
                  setFirstNo(true);
                }}
                className="italic py-1 px-8 bg-red-600 rounded-[10px] text-center text-white cursor-pointer "
              >
                No
              </button>
              <button className="italic py-1 px-8 bg-lime-500 rounded-[10px] text-center text-white cursor-pointer">
                Yes
              </button>
            </div>
          </div>
        ) : null}
      </div>

      {firstNo ? (
        <div className="grid place-content-center items-center italic gap-2 mt-[-20px]">
          <h3 className="text-center text-white">Think once again🤔❤️</h3>
          <img
            src={photo}
            alt=""
            style={{
              height: "150px",
              width: "250px",
              borderRadius: "20px",
            }}
          />
          <div className="flex flex-row justify-around mt-[10px] ">
            <button
              onClick={() => {
                setFirstNo(false);
              }}
              className="italic py-1 px-8 bg-red-600 rounded-[10px] text-center text-white cursor-pointer "
            >
              No
            </button>
            <button
              onClick={() => console.log("Clicked")}
              className="italic py-1 px-8 bg-lime-500 rounded-[10px] text-center text-white cursor-pointer"
            >
              Yes
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Footer;
