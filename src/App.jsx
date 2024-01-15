import image01 from "./assets/01.jpg";
import image02 from "./assets/02.jpg";
import image03 from "./assets/03.jpg";
import image04 from "./assets/04.jpg";
import image05 from "./assets/05.jpg";
import image06 from "./assets/06.jpg";

import Slider from "./components/Slider";

function App() {
  const images = [image01, image02, image03, image04, image05, image06];

  return (
    <div className="app">
      <Slider images={images} />
    </div>
  );
}

export default App;
