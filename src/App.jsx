// Import components
// import SliderImages from "./components/SliderImages";
import Carousel from "./components/Carousel";
import Slider from "./components/Slider";

// Import content
import handiCrafts from "./content/data.js";

function App() {
  return (
    <div className="app">
      {/* <SliderImages images={images} /> */}
      <div className="max-w-lg h-dvh flex flex-col items-center justify-evenly mx-auto">
        <div>
          <h1 className="font-bold text-2xl">Tinder Clone</h1>
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
    </div>
  );
}

export default App;
