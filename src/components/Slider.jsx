/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function Slider({ images }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(images[slideIndex]);

  const setSlider = (number) => {
    // Avoid getting negative index number
    if (slideIndex === 0 && number === -1) {
      setSlideIndex(images.length - 1);
      return;
    }

    if (slideIndex === images.length - 1 && number === 1) {
      setSlideIndex(0);
      return;
    }

    let newNumber = slideIndex + number;
    setSlideIndex(newNumber);
    return;
  };

  useEffect(() => {
    setActiveSlide(images[slideIndex]);
  }, [images, slideIndex]);

  return (
    <div
      id="slider"
      className="flex flex-col items-center justify-center bg-red-100 py-8"
    >
      {images && (
        <div className="slider-container relative flex flex-col justify-center items-center w-[20rem] md:w-[25rem] h-[37.5rem]">
          <div className="slider-image max-w-screen-md rounded-xl overflow-hidden shadow-xl">
            <img
              className="object-cover h-full w-full"
              src={activeSlide}
              alt="slider"
            />
          </div>
          <button
            onClick={() => setSlider(-1)}
            className="btn-prev absolute -left-8 md:-left-12 bg-white p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer shadow-lg"
          >
            &lt;
          </button>
          <button
            onClick={() => setSlider(1)}
            className="btn-next absolute -right-8 md:-right-12 bg-white p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer shadow-lg"
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
}
