// Import components
// import SliderImages from "./components/SliderImages";
import Carousel from "./components/Carousel";

// Import content
import images from "./content/data";

function App() {
  return (
    <div className="app">
      {/* <SliderImages images={images} /> */}
      <div className="max-w-lg h-dvh flex flex-col items-center justify-evenly mx-auto">
        <div>
          <h1>Slideshow</h1>
          <div>
            <p>Button container here</p>
          </div>
        </div>
        <Carousel>
          {images.map((image, index) => (
            <img
              key={index}
              className="object-cover h-full w-full rounded-xl shadow-xl"
              src={image}
              alt={`Slide ${index + 1}`}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default App;
