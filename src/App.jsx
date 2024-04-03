import { useEffect, useState } from "react";
import Header from "./Components/Heading";
import Images from "./Components/Image";
import Wish from "./Components/Wish";
import ImageSlider from "./Components/ImageSlider";
import VideoPlayer from "./Components/VideoPlayer";
import Slider from "./Components/Slider";
import Form from "./Components/Form";
import BirthdayWishes from "./Components/BirthdayWishes";
import Footer from "./Components/Footer";
import Confetti from "react-confetti";

function App() {
  const [welcome, setWelcome] = useState(true);
  const [confetti, setConfetti] = useState(false);
  useEffect(() => {
    setConfetti(true);
  }, [welcome]);
  return (
    <>
      {welcome ? (
        <div className="grid place-content-center p-4 items-center  h-[100vh] w-full bg-gradient-to-b from-pink-200 from-10% via-rose-200 via-30% to-rose-500 to-100% ...">
          <div className="px-3 py-6 flex flex-col rounded-[40px] gap-6 items-center relative top-[-100px] bg-gradient-to-b from-rose-300 from-10% via-rose-400 via-30% to-rose-500 to-100% ...">
            <div className="flex flex-col items-center justify-center text-white">
              <h1 className="text-center text-[1.5rem] font-bold">
                Welcome to Your Birthday Embrace of Code!
              </h1>
              <p className="text-center text-[.9rem] underline">
                Prepare your heart for a surge of joy as you click the "Initiate
                Festivities" button below!
              </p>
            </div>
            <button
              onClick={() => setWelcome(false)}
              className="border-none text-red-500 uppercase bg-white px-2 py-2 rounded-md"
            >
              Initiate Festivities✨🎉
            </button>
          </div>
        </div>
      ) : (
        <div className="md:p-10 m-0 sm:p-3 min-h-[100vh] bg-gradient-to-b from-pink-200 from-10% via-rose-200 via-30% to-rose-500 to-100% ...">
          {confetti ? (
            <Confetti
              tweenDuration={110000}
              recycle={false}
              className="h-[100vh] w-[100%]"
              numberOfPieces={1500}
            />
          ) : null}
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
      )}
    </>
  );
}

export default App;
