import React from "react";
import photo from "../bindu/images/IMG-20240215-WA0013.jpg";
function Images() {
  return (
    <div className="flex justify-center align-middle">
      <img
        src={photo}
        alt="Picture of the Birthday Queen"
        className="m-2 rounded-[20px] md:h:[300px] w:[450px]"
        style={{ height: "250px", width: "250px" }}
      />
    </div>
  );
}

export default Images;
