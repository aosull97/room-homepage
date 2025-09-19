import { useState, useEffect } from "react";

const Footer = ({navOpened}) => {

      const [style, setStyle] = useState("");
    
      useEffect(() => {

      if(navOpened) {
        setStyle("brightness-40 backdrop-brightness-90")
      } else {
        setStyle("")
      }
      }, [navOpened])
  return (
    <div className={style}>
      <div className="">
        <img
          src="/images/image-about-dark.jpg"
          alt="Image of dark furniture including a bed, two chairs and a table"
          className=""
        />
      </div>
      <div className="self-center px-6 pt-10 pb-10">
        <div className="">
          <p className="font-semibold text-md tracking-[0.2rem]">ABOUT OUR FURNITURE</p>
          <p className="py-4 text-grey-500">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
      </div>
      <div className="">
        <img
          src="/images/image-about-light.jpg"
          alt="Image of a white plastic chair in a light white room"
          className=""
        />
      </div>
    </div>
  );
};

export default Footer;
