import ShopNow from "./ShopNow";
import SliderButton from "./SliderButton";

const Slide2 = ({slideRight, slideLeft}) => {
  return (
    <div className="">
      <div className="md:hidden relative">
        <img
          src="/images/mobile-image-hero-2.jpg"
          alt="Image of white chairs seated by a wooden table with a bonsai tree ontop"
          className="w-full"
        />
        <div className="absolute bottom-0 right-0">
          <SliderButton slideRight={slideRight} slideLeft={slideLeft} />
        </div>
      </div>
      <div className="w-2/3 contain-content hidden">
        <img
          src="/images/desktop-image-hero-2.jpg"
          alt="Image of white chairs seated by a wooden table with a bonsai tree ontop"
          className="w-full"
        />
      </div>
      <div>
        <div className="px-6 pt-10">
          <p className="font-semibold text-4xl">
            We are available all across the globe
          </p>
          <p className="text-grey-500 py-4">
            With stores all over the world, it's easy for you to find furniture
            for your home or place of business. Locally, we’re in most major
            cities throughout the country. Find the branch nearest you using our
            store locator. Any questions? Don't hesitate to contact us today.
          </p>
          <div className="pt-4 pb-16">
          <ShopNow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide2;



