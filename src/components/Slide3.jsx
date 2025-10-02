import ShopNow from "./ShopNow";
import SliderButton from "./SliderButton";
import mobileHero3 from "/images/mobile-image-hero-3.jpg";
import desktopHero3 from "/images/desktop-image-hero-3.jpg";

const Slide3 = ({ slideRight, slideLeft}) => {
  return (
    <div className="lg:flex h-full">
      <div className="lg:hidden relative">
        <img
          src={mobileHero3}
          alt="Image of white chairs seated by a wooden table with a bonsai tree ontop"
          className="w-full"
        />
        <div className="absolute bottom-0 right-0">
          <SliderButton slideRight={slideRight} slideLeft={slideLeft} />
        </div>
      </div>
      <div className="w-3/5 hidden lg:block">
        <img
          src={desktopHero3}
          alt="Image of white chairs seated by a wooden table with a bonsai tree ontop"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="lg:w-2/5 lg:place-self-center relative h-100%">
        <div className="px-12 py-16 md:px-20">
          <p className="font-semibold text-4xl lg:text-6xl">
            Manufactured with the best materials
          </p>
          <p className="text-grey-500 py-4 md:text-xl lg:text-lg">
            Our modern furniture store provide a high level of quality. Our
            company has invested in advanced technology to ensure that every
            product is made as perfect and as consistent as possible. With three
            decades of experience in this industry, we understand what customers
            want for their home and office.
          </p>
          <div className="pt-4">
            <ShopNow />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-3/5 hidden lg:block">
        <SliderButton slideRight={slideRight} slideLeft={slideLeft} />
      </div>
    </div>
  );
};

export default Slide3;


