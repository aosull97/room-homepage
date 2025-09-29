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
          src="/images/image-about-dark.jpg"
          alt="Image of dark furniture including a bed, two chairs and a table"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-12 pt-10 pb-10 lg:w-2/5 self-center overflow-scroll max-h-full">
          <p className="font-semibold text-md tracking-[0.4rem] md:text-2xl">ABOUT OUR FURNITURE</p>
          <p className="py-4 text-grey-500 lg:text-lg">
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
          src="/images/image-about-light.jpg"
          alt="Image of a white plastic chair in a light white room"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Footer;
