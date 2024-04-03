import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import photo1 from "../bindu/images/IMG-20240215-WA0003.jpg";
import photo2 from "../bindu/images/IMG-20240215-WA0004.jpg";
import photo3 from "../bindu/images/IMG-20240215-WA0005.jpg";
import photo4 from "../bindu/images/IMG-20240215-WA0006.jpg";
import photo5 from "../bindu/images/IMG-20240215-WA0007.jpg";
import photo6 from "../bindu/images/IMG-20240215-WA0008.jpg";
import photo7 from "../bindu/images/IMG-20240215-WA0010.jpg";
import photo8 from "../bindu/images/IMG-20240215-WA0012.jpg";
import photo9 from "../bindu/images/IMG-20240215-WA0013.jpg";
import photo10 from "../bindu/images/IMG_20240222_223813_747.jpg";

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      url: photo6,
    },
    {
      url: photo2,
    },
    {
      url: photo3,
    },
    {
      url: photo4,
    },
    {
      url: photo5,
    },
    {
      url: photo1,
    },
    {
      url: photo7,
    },
    {
      url: photo8,
    },
    {
      url: photo9,
    },
    {
      url: photo10,
    },
  ];
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="max-w-[300px] h-[400px] w-full m-auto px-4 relative py-4">
      <img
        src={slides[currentIndex].url}
        alt="Picture of the Birthday Queen"
        className="rounded-2xl bg-center bg-cover duration-500"
        style={{ height: "250px", width: "300px" }}
      />
      <div className="absolute top-[40%] cursor-pointer -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-1 bg-white">
        <BsChevronCompactLeft size={20} onClick={prevSlide} />
      </div>
      <div className="absolute top-[40%] cursor-pointer -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-1 bg-white">
        <BsChevronCompactRight size={20} onClick={nextSlide} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="cursor-pointer text-white text-[20px]"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
