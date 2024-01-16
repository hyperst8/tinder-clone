/* eslint-disable react/prop-types */
import { FaPhone } from "react-icons/fa";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

export default function Slider({ data }) {
  const { name, description, image, phone, liked } = data;

  return (
    <div className="min-w-[25rem]">
      <div className="h-[25rem]">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={name}
        />
      </div>
      <div className="bg-indigo-500 text-white h-full flex flex-col items-center pt-3 px-4 text-center relative">
        <h2 className="font-semibold text-xl">{name}</h2>
        <p className="my-2 px-4">{description}</p>
        <button
          onClick={() => alert("Hello")}
          id="call"
          className="bg-green-400 font-semibold p-2 rounded-lg w-36 flex justify-between items-center cursor-pointer hover:opacity-80"
        >
          {phone} <FaPhone />
        </button>
        <button
          id="like"
          className="absolute right-4"
        >
          {liked ? <FaHeart className="fill-yellow-400" /> : <FaRegHeart />}
        </button>
      </div>
    </div>
  );
}
