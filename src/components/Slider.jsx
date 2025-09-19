import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import { useState } from "react";

const Slider = () => {
  const [slideNumber, setSlideNumber] = useState(1);

  const slideRight = () => {
    if (slideNumber === 3) {
      setSlideNumber(1);
    } else {
      setSlideNumber(slideNumber + 1);
    }
  };

  const slideLeft = () => {
    if (slideNumber === 1) {
      setSlideNumber(3);
    } else {
      setSlideNumber(slideNumber - 1);
    }
  };


  if (slideNumber === 1) {
    return (
      <div>
        <Slide1 slideRight={slideRight} slideLeft={slideLeft}  />
      </div>
    );
  } else if (slideNumber === 2) {
    return (
      <div>
        <Slide2  slideRight={slideRight} slideLeft={slideLeft} />
      </div>
    );
  } else if (slideNumber === 3) {
    return (
      <div>
        <Slide3  slideRight={slideRight} slideLeft={slideLeft} />
      </div>
    );
  }
};

export default Slider;
