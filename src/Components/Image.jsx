import React from "react";
import photo from "../bindu/images/IMG-20240215-WA0013.jpg";
function Images() {
  return (
    <div className="flex justify-center align-middle px-4">
      <img
        src={photo}
        alt="Picture of the Birthday Queen"
        className="m-2 rounded-[20px] h-auto w-auto sm:w-[800px] "
      />
    </div>
  );
}

export default Images;
