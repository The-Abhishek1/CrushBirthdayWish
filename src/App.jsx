import { useState } from "react";
import Header from "./Components/Heading";
import Images from "./Components/Image";
import Wish from "./Components/Wish";
import ImageSlider from "./Components/ImageSlider";
import VideoPlayer from "./Components/VideoPlayer";
import Slider from "./Components/Slider";
import Form from "./Components/Form";
import BirthdayWishes from "./Components/BirthdayWishes";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="md:p-10 m-0 sm:p-3 min-h-[100vh] bg-gradient-to-b from-pink-200 from-10% via-rose-200 via-30% to-rose-500 to-100% ...">
        <Header />
        <Images />
        <Wish />
        <ImageSlider />
        <VideoPlayer />
        <Slider />
        <Form />
        <BirthdayWishes />
        <Footer />
      </div>
    </>
  );
}

export default App;
