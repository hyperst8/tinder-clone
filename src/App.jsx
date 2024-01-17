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
  const [showModal, setShowModal] = useState(false);
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
            />
          ))}
        </Carousel>
      </div>
      {showModal && (
        <Modal
          name={"Mr Test"}
          phone={"12345678"}
        />
      )}
    </div>
  );
}

export default App;
