import ShopNow from "./ShopNow";

const Slide3 = () => {
  return (
    <div>
      <div className="flex items-center">
        <div className="">
          <img
            src="/images/desktop-image-hero-3.jpg"
            alt="Image of a black fold out chair"
            width={1000}
          />
        </div>
        <div className="w-1/4 place-self-center m-auto">
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
        </div>
      </div>
    </div>
  );
};

export default Slide3;
