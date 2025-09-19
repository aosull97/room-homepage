const SliderButton = ({ slideRight, slideLeft }) => {
    
  return (
    <div className="flex">
      <div>
        <button onClick={slideLeft} className="bg-black p-4 hover:bg-grey-800">
          <img
            src="/images/icon-angle-left.svg"
            alt="arrow icon"
            height={20}
            width={20}
          />
        </button>
      </div>
      <div>
        <button onClick={slideRight} className="bg-black p-4 hover:bg-grey-800">
          <img
            src="/images/icon-angle-right.svg"
            alt="arrow icon"
            height={20}
            width={20}
          />
        </button>
      </div>
    </div>
  );
};

export default SliderButton;
