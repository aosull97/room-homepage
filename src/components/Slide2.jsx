import ShopNow from "./ShopNow";
import SliderButton from "./SliderButton";
import mobileHero2 from "/images/mobile-image-hero-2.jpg";
import desktopHero2 from "/images/desktop-image-hero-2.jpg";

const Slide2 = ({ slideRight, slideLeft}) => {
  return (
    <div className="lg:flex h-full">
      <div className="lg:hidden relative">
        <img
          src={mobileHero2}
          alt="Image of three chairs, one yellow, one grey and one pink"
          className="w-full"
        />
        <div className="absolute bottom-0 right-0">
          <SliderButton slideRight={slideRight} slideLeft={slideLeft} />
        </div>
      </div>
      <div className="w-3/5 hidden lg:block">
        <img
          src={desktopHero2}
          alt="Image of three chairs, one yellow, one grey and one pink"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="lg:w-2/5 lg:place-self-center relative h-100%">
        <div className="px-10 py-12 xlg:py-16 xl:px-18">
          <p className="font-semibold text-3xl lg:text-4xl xl:text-5xl">
            We are available all across the globe
          </p>
          <p className="text-grey-500 py-4 lg:text-xs xl:text-sm">
            With stores all over the world, it's easy for you to find furniture
            for your home or place of business. Locally, we’re in most major
            cities throughout the country. Find the branch nearest you using our
            store locator. Any questions? Don't hesitate to contact us today.
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

export default Slide2;
