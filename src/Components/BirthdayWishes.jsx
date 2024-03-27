import React, { useState, useEffect } from "react";
import photo from "../Emojis/teddy.jpg";
import { getDocs, collection } from "firebase/firestore";
import { db, storage } from "../FireBase/FireBase";

function BirthdayWishes({ reload }) {
  //State for wishes
  const [wishes, setWishes] = useState([]);

  //Collection Ref
  const wishesCollectionRef = collection(db, "Wishes");

  useEffect(() => {
    //Function
    const getWishes = async () => {
      const data = await getDocs(wishesCollectionRef);
      setWishes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(wishes);
    };
    getWishes();
  });

  return (
    <div className="relative w-full grid place-content-center p-10 pt-2">
      <h3 className="text-center m-2 text-white text-[20px] italic">
        Birthday Wishes🎉✨🍻
      </h3>
      <div
        style={{
          borderWidth: "1px",
          padding: "10px",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          fontStyle: "italic",
        }}
      >
        {wishes.map((wish, index) => {
          return (
            <div key={index}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img
                  src={wish.imageUrl}
                  alt=""
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "20px",
                  }}
                />
                <p className="text-white">{wish.Name}</p>
              </div>
              <p className="text-white text-[13px] italic text-center mt-2 pb-2">
                "{wish.Wish}".
              </p>
              <hr />
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default BirthdayWishes;
