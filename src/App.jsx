// Import components
// import SliderImages from "./components/SliderImages";
import { useState } from "react";
import Carousel from "./components/Carousel";
import Modal from "./components/Modal.jsx";
import Slider from "./components/Slider";

// Import content
import handiCrafts from "./content/data.js";
// import foodImages from "./content/foody.js";

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [showModal, setShowModal] = useState(false);

  const fetchSliderData = (data) => {
    const { name, phone, openModal } = data;
    setName(name);
    setPhone(phone);
    setShowModal(openModal);
  };

  const closingModal = (data) => {
    const { openModal } = data;
    setShowModal(openModal);
  };

  return (
    <div className="app">
      {/* <SliderImages images={foodImages} /> */}
      <div className="max-w-lg h-dvh flex flex-col items-center justify-evenly mx-auto">
        <div>
          <h1 className="font-bold text-2xl drop-shadow-lg">Tinder Clone</h1>
        </div>
        <Carousel>
          {handiCrafts.map((slider, index) => (
            <Slider
              key={index}
              data={slider}
              onContact={fetchSliderData}
            />
          ))}
        </Carousel>
      </div>
      {showModal && (
        <Modal
          name={name}
          phone={phone}
          closeModal={closingModal}
        />
      )}
    </div>
  );
}

export default App;
