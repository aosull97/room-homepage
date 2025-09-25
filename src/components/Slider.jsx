import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Slider = ({ navOpened, toggleNav }) => {
  const [slideNumber, setSlideNumber] = useState(1);
  const [style, setStyle] = useState("");

  useEffect(() => {
    if (navOpened) {
      setStyle("brightness-40 backdrop-brightness-90 pointer-events-none");
    } else {
      setStyle("");
    }
  }, [navOpened]);

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
      <div className="h-2/3 relative">
        <div className="absolute z-2 top-0 left-0 right-0 lg:hidden">
          <MobileNav navOpened={navOpened} toggleNav={toggleNav} />
        </div>
        <div className="absolute z-2 top-0 left-0 right-0 hidden lg:block">
          <DesktopNav />
        </div>
        <div className={style}>
          <Slide1 slideRight={slideRight} slideLeft={slideLeft} />
        </div>
      </div>
    );
  } else if (slideNumber === 2) {
    return (
      <div className="h-2/3 relative">
        <div className="absolute z-2 top-0 left-0 right-0 lg:hidden">
          <MobileNav navOpened={navOpened} toggleNav={toggleNav} />
        </div>
        <div className="absolute z-2 top-0 left-0 right-0 hidden lg:block">
          <DesktopNav />
        </div>
        <div className={style}>
          <Slide2 slideRight={slideRight} slideLeft={slideLeft} />
        </div>
      </div>
    );
  } else if (slideNumber === 3) {
    return (
      <div className="h-2/3 relative">
        <div className="absolute z-2 top-0 left-0 right-0 lg:hidden">
          <MobileNav navOpened={navOpened} toggleNav={toggleNav} />
        </div>
        <div className="absolute z-2 top-0 left-0 right-0 hidden lg:block">
          <DesktopNav />
        </div>
        <div className={style}>
          <Slide3 slideRight={slideRight} slideLeft={slideLeft} />
        </div>
      </div>
    );
  }
};

export default Slider;
