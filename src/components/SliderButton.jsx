const SliderButton = ({ slideRight, slideLeft }) => {
    
  return (
    <div className="flex gap-4 bg-black">
      <div>
        <button onClick={slideLeft} className="bg-black p-4 hover:bg-grey-800 hover:cursor-pointer">
          <img
            src="/images/icon-angle-left.svg"
            alt="arrow icon"
            height={14}
            width={14}
          />
        </button>
      </div>
      <div>
        <button onClick={slideRight} className="bg-black p-4 hover:bg-grey-800 hover:cursor-pointer">
          <img
            src="/images/icon-angle-right.svg"
            alt="arrow icon"
            height={14}
            width={14}
          />
        </button>
      </div>
    </div>
  );
};

export default SliderButton;
