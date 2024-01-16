/* eslint-disable react/prop-types */

export default function Slider({ data }) {
  const { name, description, image, phone } = data;
  return (
    <div className="min-w-[25rem]">
      <div className="h-[25rem]">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={name}
        />
      </div>
      <div className="bg-indigo-500 text-white h-full flex flex-col items-center pt-6 px-4 text-center">
        <h2 className="font-semibold text-xl">{name}</h2>
        <p className="my-2 px-4">{description}</p>
        <button className="bg-green-400 font-semibold p-2 rounded-lg cursor-pointer hover:opacity-80">
          {phone}
        </button>
      </div>
    </div>
  );
}
