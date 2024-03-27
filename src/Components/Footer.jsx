import React, { useState } from "react";
import { db, storage } from "../FireBase/FireBase";
import { collection, addDoc } from "firebase/firestore";
import video1 from "../bindu/videos/7.93_lyrics-26-03-2024-0001.mp4";
import video2 from "../bindu/videos/_chandu._.creation_-26-03-2024-0001.mp4";
import video3 from "../bindu/videos/_love__factory_-26-03-2024-0001.mp4";
import video4 from "../bindu/videos/dn_editz_d56_-26-03-2024-0001.mp4";
import video5 from "../bindu/videos/radha_krishn8496-26-03-2024-0001.mp4";

function Footer() {
  const [show, setShow] = useState(false);
  const [firstNo, setFirstNo] = useState(false);
  const [secondNo, setSecond] = useState(false);
  const [yes, setYes] = useState(false);

  const submitYes = async () => {
    const Yes = true;
    try {
      const docRef = await addDoc(collection(db, "Accepted"), {
        Accecpted: Yes,
      });
      console.log("Document written with ID: ", docRef.id);
      reset();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const submitNo = async () => {
    const No = false;
    try {
      const docRef = await addDoc(collection(db, "Rejected"), {
        Accecpted: No,
      });
      console.log("Document written with ID: ", docRef.id);
      reset();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <div className="p-2">
        <div>
          <h3 className="text-center italic text-white text-[20px]">
            Wanna Play a Game?🎮🕹️
          </h3>
          <h4 className="text-white text-[13px] text-center italic">
            <p className="text-[15px] text-cyan-400">Warning!!</p>
            "Before you play: Remember, it's all in good fun! Don't blame me for
            any butterflies in your stomach or smiles on your face afterward
            😉💖"
          </h4>
          <p className="text-center">
            <button
              onClick={() => {
                if (secondNo == false && firstNo == false && yes == false) {
                  setShow(!show);
                  console.log("Showing Propose Dialog");
                }
              }}
              className="px-[10px] text-center text-white italic bg-lime-500 border-none rounded-[10px] py-[8px] m-4 cursor-pointer"
            >
              Click here to start
            </button>
          </p>
        </div>
        <div className="p-2">
          {show ? (
            <div className="flex flex-col items-center italic gap-2">
              <h3 className="text-center text-white">
                I Love You, Do You Love Me😜❤️
              </h3>
              <video
                src={video2}
                controls
                className="h-[250px] w-[250px] cursor-pointer"
              ></video>

              <div className="flex flex-row justify-around gap-10 mt-[10px] ">
                <button
                  onClick={() => {
                    setShow(false);
                    setFirstNo(true);
                  }}
                  className="italic py-1 px-8 bg-red-600 rounded-[10px] text-center text-white cursor-pointer "
                >
                  No
                </button>
                <button
                  onClick={() => {
                    setShow(false);
                    setYes(true);
                    submitYes();
                  }}
                  className="italic py-1 px-8 bg-lime-500 rounded-[10px] text-center text-white cursor-pointer"
                >
                  Yes
                </button>
              </div>
            </div>
          ) : null}
        </div>
        {firstNo ? (
          <div className="flex flex-col items-center italic gap-2 mt-[-20px]">
            <h3 className="text-center text-white">
              "Hey!😊 Think again? Feelings can be tricky.💭💖"
            </h3>
            <video
              src={video1}
              controls
              className="h-[250px] w-[250px] cursor-pointer"
            ></video>
            <div className="flex flex-row gap-10 justify-around mt-[10px] ">
              <button
                onClick={() => {
                  setFirstNo(false);
                  setSecond(true);
                }}
                className="italic py-1 px-8 bg-red-600 rounded-[10px] text-center text-white cursor-pointer "
              >
                No
              </button>
              <button
                onClick={() => {
                  setFirstNo(false);
                  setYes(true);
                  submitYes();
                }}
                className="italic py-1 px-8 bg-lime-500 rounded-[10px] text-center text-white cursor-pointer"
              >
                Yes
              </button>
            </div>
          </div>
        ) : null}

        {secondNo ? (
          <div className="flex flex-col items-center italic gap-2 mt-[-20px]">
            <h3 className="text-center text-white">
              {" "}
              "Hey!😊 Give it another thought? Feelings can surprise us.💭💖"
            </h3>
            <video
              src={video3}
              controls
              className="h-[250px] w-[250px] cursor-pointer"
            ></video>
            <div className="flex flex-row gap-10 justify-around mt-[10px] ">
              <button
                onClick={() => {
                  setSecond(false);
                  alert(
                    "Oh, looks like you found the secret button! 😉 Let's focus on creating awesome memories together, regardless of labels. Sound good? 😄🎉. Yay! Your answer warms my heart. Thank you for making me the happiest person alive! 🥰"
                  );
                  submitNo();
                }}
                className="italic py-1 px-8 bg-red-600 rounded-[10px] text-center text-white cursor-pointer "
              >
                No
              </button>
              <button
                onClick={() => {
                  setSecond(false);
                  setYes(true);
                  submitYes();
                }}
                className="italic py-1 px-8 bg-lime-500 rounded-[10px] text-center text-white cursor-pointer"
              >
                Yes
              </button>
            </div>
          </div>
        ) : null}
      </div>
      {yes ? (
        <div className="flex flex-col gap-4 items-center italic mt-[-30px] pb-6">
          <h3 className="text-center text-white italic">
            "Yay! Your answer warms my heart. Thank you for making me the
            happiest person alive! 🥰💕"
          </h3>
          <video
            src={video4}
            controls
            className="h-[250px] w-[250px] cursor-pointer"
          ></video>
        </div>
      ) : null}
    </>
  );
}

export default Footer;
