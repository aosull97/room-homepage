import Slider from "./components/Slider"
import Footer from "./components/Footer"
import { useState } from "react";

function App() {

  const [navOpened, setNavOpened] = useState(false);

  const toggleNav = () => {
    setNavOpened(!navOpened);
    console.log(navOpened);
  };

  return (
    <div className="font-spartan lg:h-screen">
      <Slider navOpened={navOpened} toggleNav={toggleNav} /> 
      <Footer navOpened={navOpened} toggleNav={toggleNav} />
    </div>
  )
}

export default App
