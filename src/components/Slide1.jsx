import ShopNow from "./ShopNow";
import SliderButton from "./SliderButton";

const Slide1 = ({ slideRight, slideLeft }) => {
  return (
    <div className="lg:flex">
      <div className="lg:hidden relative">
        <img
          src="/images/mobile-image-hero-1.jpg"
          alt="Image of white chairs seated by a wooden table with a bonsai tree ontop"
          className="w-full"
        />
        <div className="absolute bottom-0 right-0">
          <SliderButton slideRight={slideRight} slideLeft={slideLeft} />
        </div>
      </div>
      <div className="w-3/5 contain-content hidden lg:block">
        <img
          src="/images/desktop-image-hero-1.jpg"
          alt="Image of white chairs seated by a wooden table with a bonsai tree ontop"
          className="w-full"
        />
      </div>
      <div className="lg:w-2/5 lg:place-self-center relative h-100%">
        <div className="px-6 pt-10 md:px-14 ">
          <p className="font-semibold text-4xl">
            Discover innovative ways to decorate
          </p>
          <p className="text-grey-500 py-4 md:text-xl lg:text-sm">
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p>
          <div className="pt-4 pb-16">
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

export default Slide1;
