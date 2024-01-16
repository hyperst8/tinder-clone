/* eslint-disable react/prop-types */
import React from "react";

export default function Carousel({ children: data }) {
  const [current, setCurrent] = React.useState(0);

  const previous = () =>
    setCurrent((current) => (current === 0 ? data.length - 1 : current - 1));

  const next = () =>
    setCurrent((current) => (current === data.length - 1 ? 0 : current + 1));

  const goTo = (index) => setCurrent(index);

  const goToFirst = () => setCurrent(0);

  const goToLast = () => setCurrent(data.length - 1);

  return (
    <div>
      <div className="flex justify-between items-center py-2 px-4 mb-4">
        <button
          onClick={goToFirst}
          className="btn-slider"
        >
          First
        </button>
        <button
          onClick={goToLast}
          className="btn-slider"
        >
          Last
        </button>
      </div>

      <div className="overflow-hidden relative w-[96%] md:w-[25rem] h-[37.5rem] mx-auto rounded-xl shadow-xl">
        <div
          className="element flex transition-transform ease-out duration-500 object-cover h-full w-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {data}
        </div>

        <div className="buttons-container absolute top-1/2 -translate-y-[55%] inset-0 flex items-center justify-between p-4 h-[40%]">
          <button
            onClick={previous}
            className="btn-prev"
          >
            &lt;
          </button>
          <button
            onClick={next}
            className="btn-next"
          >
            &gt;
          </button>
        </div>

        <div className="indicators absolute bottom-4 left-0 right-0">
          <div className="flex items-center justify-center gap-2">
            {data.map((_, index) => (
              <div
                key={index}
                onClick={() => goTo(index)}
                className={`transition-all w-3 h-3 bg-white shadow-lg rounded-full cursor-pointer ${
                  current === index ? "p-2" : "bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
