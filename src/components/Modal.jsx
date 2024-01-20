/* eslint-disable react/prop-types */
import { FaPhoneSlash } from "react-icons/fa";

export default function Modal({ name, phone, closeModal }) {
  const handleClose = () => {
    closeModal({ openModal: false });
  };

  return (
    <div className="fixed top-0 inset-0 opacity-90 flex items-center justify-center p-4 w-dvw h-dvh">
      <div className="bg-gray-800 rounded-lg p-6 text-center w-full h-full flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Calling ...</h2>
        <p className="text-lg mb-4">{name}</p>
        <p className="text-lg mb-8">Phone: {phone}</p>
        <button
          className="bg-red-600 w-32 flex justify-center items-center mx-auto font-bold py-2 px-4 rounded hover:opacity-80"
          onClick={handleClose}
        >
          End call
          <FaPhoneSlash className="ml-2" />
        </button>
      </div>
    </div>
  );
}
