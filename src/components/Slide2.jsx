import ShopNow from "./ShopNow";

const Slide2 = () => {
  return (
    <div>
      <div className="flex items-center">
        <div className="">
          <img
            src="/images/desktop-image-hero-2.jpg"
            alt="Image of three chairs, one yellow, one pink, and one grey"
            width={1000}
          />
        </div>
        <div className="w-1/4 place-self-center m-auto">
          <p className="font-semibold text-5xl">
            We are available all across the globe</p>
          <p className="text-grey-500 py-4">
            With stores all over the world, it's easy for you to find furniture
            for your home or place of business. Locally, we’re in most major
            cities throughout the country. Find the branch nearest you using our
            store locator. Any questions? Don't hesitate to contact us today.
          </p>
          <ShopNow />
        </div>
      </div>
    </div>
  );
};

export default Slide2;
