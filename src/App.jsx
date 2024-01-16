// Import components
import SliderImages from "./components/SliderImages";

// Import content
import images from "./content/data";

function App() {
  return (
    <div className="app">
      <SliderImages images={images} />
    </div>
  );
}

export default App;
