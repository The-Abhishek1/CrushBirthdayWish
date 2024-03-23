import React from "react";
import emoji1 from "../Emojis/happybirthday1.jpg";
import emoji2 from "../Emojis/petcat.jpg";
function Header() {
  return (
    <div className="m-0 p-2 relative grid place-content-center ">
      <img
        src={emoji1}
        alt=""
        style={{
          borderRadius: "10%",
          height: "250px",
          width: "250px",
          marginTop: "20px",
        }}
      />
      <h4 className="text-center text-[24px] italic text-white font-bold uppercase mt-2">
        Coffee😊😆🤦‍♂️
      </h4>
    </div>
  );
}

export default Header;
