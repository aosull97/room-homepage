import ShopNow from "./ShopNow";
import SliderButton from "./SliderButton";

const Slide3 = ({slideRight, slideLeft}) => {
  return (
    <div className="">
      <div className="md:hidden relative">
        <img
          src="/images/mobile-image-hero-3.jpg"
          alt="Image of white chairs seated by a wooden table with a bonsai tree ontop"
          className="w-full"
        />
        <div className="absolute bottom-0 right-0">
          <SliderButton slideRight={slideRight} slideLeft={slideLeft} />
        </div>
      </div>
      <div className="w-2/3 contain-content hidden">
        <img
          src="/images/desktop-image-hero-3.jpg"
          alt="Image of white chairs seated by a wooden table with a bonsai tree ontop"
          className="w-full"
        />
      </div>
      <div>
        <div className="px-6 pt-10">
          <p className="font-semibold text-4xl">
            Manufactured with the best materials
          </p>
          <p className="text-grey-500 py-4">
            Our modern furniture store provide a high level of quality. Our
            company has invested in advanced technology to ensure that every
            product is made as perfect and as consistent as possible. With three
            decades of experience in this industry, we understand what customers
            want for their home and office.
          </p>
          <div className="pt-4 pb-16">
          <ShopNow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide3;

