import ShopNow from "./ShopNow";
import SliderButton from "./SliderButton";

const Slide1 = ({slideRight, slideLeft}) => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <img
          src="/images/desktop-image-hero-1.jpg"
          alt="Image of white chairs seated by a wooden table with a bonsai tree ontop"
          className="w-full"
        />
      </div>
      <div className="w-1/2 flex relative">
        <div className="w-1/2 m-auto ">
          <p className="font-semibold text-5xl">
            Discover innovative ways to decorate
          </p>
          <p className="text-grey-500 py-4">
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p>
          <ShopNow />
          <div className="absolute bottom-0 left-0 ">
            <SliderButton slideRight={slideRight} slideLeft={slideLeft} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
