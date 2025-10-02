import left from "/images/icon-angle-left.svg";
import right from "/images/icon-angle-right.svg";


const SliderButton = ({ slideRight, slideLeft }) => {
    
  return (
    <div className="flex gap-4 bg-black">
      <div>
        <button onClick={slideLeft} className="bg-black p-4 hover:bg-grey-800 hover:cursor-pointer">
          <img
            src={left}
            alt="arrow icon"
            height={14}
            width={14}
          />
        </button>
      </div>
      <div>
        <button onClick={slideRight} className="bg-black p-4 hover:bg-grey-800 hover:cursor-pointer">
          <img
            src={right}
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
