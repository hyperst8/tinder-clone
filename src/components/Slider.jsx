/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

export default function Slider({ data, onContact }) {
  const { name, description, image, phone, liked } = data;

  const [isLiked, setIsLiked] = useState(liked);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handleContact = () => {
    onContact({ name, phone, openModal: true });
  };

  return (
    <div className="slide min-w-[21rem] md:min-w-[25rem]">
      <div className="h-[20rem] md:h-[25rem]">
        <img
          className="w-full h-full object-cover pointer-events-none"
          src={image}
          alt={name}
        />
      </div>
      <div className="bg-indigo-500 text-white h-full flex flex-col items-center pt-3 px-4 text-center relative">
        <h2 className="font-bold text-xl text-yellow-400 drop-shadow-md">
          {name}
        </h2>
        <p className="my-2 px-4">{description}</p>
        <button
          onClick={handleContact}
          id="call"
          className="bg-green-400 font-semibold p-2 rounded-lg w-36 flex justify-between items-center cursor-pointer hover:opacity-80"
        >
          {phone} <FaPhone />
        </button>
        <button
          id="like"
          className="absolute right-4"
          onClick={handleLikeClick}
        >
          {isLiked ? (
            <FaHeart className="fill-yellow-400 drop-shadow-md" />
          ) : (
            <FaRegHeart />
          )}
        </button>
      </div>
    </div>
  );
}
