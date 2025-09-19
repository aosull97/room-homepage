import ShopNow from "./ShopNow";
import SliderButton from "./SliderButton";

const Slide3 = ({slideRight, slideLeft}) => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <img
          src="/images/desktop-image-hero-3.jpg"
          alt="Image of a black fold out chair"
          className="w-full"
        />
      </div>
      <div className="w-1/2 flex relative">
        <div className="w-1/2 m-auto ">
          <p className="font-semibold text-5xl">
            Manufactured with the best materials
          </p>
          <p className="text-grey-500 py-4">
            Our modern furniture store provide a high level of quality. Our
            company has invested in advanced technology to ensure that every
            product is made as perfect and as consistent as possible. With three
            decades of experience in this industry, we understand what customers
            want for their home and office.
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

export default Slide3;

