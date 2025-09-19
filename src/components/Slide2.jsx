import ShopNow from "./ShopNow";
import SliderButton from "./SliderButton";

const Slide2 = ({slideRight, slideLeft}) => {
  return (
    <div className="flex">
      <div className="w-3/5">
        <img
          src="/images/desktop-image-hero-2.jpg"
          alt="Image of three chairs, one yellow, one pink, and one grey"
          className="w-full"
        />
      </div>
      <div className="w-2/5 flex relative">
        <div className="w-3/5 m-auto ">
          <p className="font-semibold text-5xl">
            We are available all across the globe
          </p>
          <p className="text-grey-500 py-4">
            With stores all over the world, it's easy for you to find furniture
            for your home or place of business. Locally, we’re in most major
            cities throughout the country. Find the branch nearest you using our
            store locator. Any questions? Don't hesitate to contact us today.
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

export default Slide2;



