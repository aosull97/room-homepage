import dark from "/images/image-about-dark.jpg";
import light from "/images/image-about-light.jpg";

import { useState, useEffect } from "react";

const Footer = ({navOpened}) => {

      const [style, setStyle] = useState("");
    
      useEffect(() => {

      if(navOpened) {
        setStyle("brightness-40 backdrop-brightness-90 lg:justify-between lg:flex lg:h-1/3")
      } else {
        setStyle("lg:flex lg:gap-x-10 lg:justify-between lg:h-1/3")
      }
      }, [navOpened])

  return (
    <div className={style}>
      <div className="">
        <img
          src={dark}
          alt="Image of dark furniture including a bed, two chairs and a table"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-10 lg:px-2 py-10 lg:py-2 lg:w-2/5 self-center max-h-full">
          <p className="font-semibold text-md tracking-[0.4rem] md:text-xl lg:text-sm">ABOUT OUR FURNITURE</p>
          <p className="pt-4 text-grey-500 lg:text-xs xl:text-sm">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        
      </div>
      <div className="">
        <img
          src={light}
          alt="Image of a white plastic chair in a light white room"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Footer;
