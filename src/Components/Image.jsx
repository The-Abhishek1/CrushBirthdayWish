import React from "react";
import photo from "../bindu/images/IMG-20240215-WA0013.jpg";
import vid from "../bindu/videos/vinu_konchem-03-04-2024-0001.mp4";
function Images() {
  return (
    <div className="flex flex-col justify-center items-center align-middle px-4">
      <video
        controls
        src={vid}
        autoPlay
        className="m-2  h-[250px] w-auto sm:w-[800px] "
      ></video>
      <img
        src={photo}
        alt="Picture of the Birthday Queen"
        className="m-2 rounded-[20px] h-auto w-auto sm:w-[800px] "
      />
    </div>
  );
}

export default Images;
