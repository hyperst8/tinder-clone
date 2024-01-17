/* eslint-disable react/prop-types */
import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const DRAG_BUFFER = 50;
const DRAG_ANIMATION = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export default function Carousel({ children: data }) {
  const [current, setCurrent] = useState(0);
  const [dragging, setDragging] = useState(false);

  const dragX = useMotionValue(0);

  const previous = () =>
    setCurrent((current) => (current === 0 ? data.length - 1 : current - 1));

  const next = () =>
    setCurrent((current) => (current === data.length - 1 ? 0 : current + 1));

  const goTo = (index) => setCurrent(index);

  const goToFirst = () => setCurrent(0);

  const goToLast = () => setCurrent(data.length - 1);

  const onDragStart = () => {
    setDragging(true);
  };

  const onDragEnd = () => {
    setDragging(false);

    const x = dragX.get();

    if (x <= -DRAG_BUFFER && current < data.length - 1) {
      setCurrent((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  return (
    <div className="carousel-container">
      <div className="flex justify-between items-center py-2 px-4 mb-4 mx-auto">
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

      <div className="carousel overflow-hidden relative w-[25rem] h-[37.5rem] md:mx-auto rounded-xl shadow-xl">
        <motion.div
          className="element flex cursor-grab active:cursor-grabbing transition-transform ease-out duration-500 object-cover h-full w-full"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{ x: dragX }}
          animate={{ translateX: `-${current * 100}%` }}
          transition={DRAG_ANIMATION}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
        >
          {data}
        </motion.div>

        <div className="buttons-container absolute top-1/2 -translate-y-[55%] inset-0 flex items-center justify-between p-4 h-[10%]">
          <button
            onClick={previous}
            className="btn-prev"
          >
            <MdArrowBackIos />
          </button>
          <button
            onClick={next}
            className="btn-next"
          >
            <MdArrowForwardIos />
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
