import React, { useState } from "react";

const Xsvg = () => {
  const [isXShape, setIsXShape] = useState(true);

  const toggleShape = () => {
    setIsXShape(!isXShape);
  };

  return (
    <div onClick={toggleShape}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <g
          className={`origin-center transition-all ease-in-out duration-100 ${
            isXShape ? "rotate-0" : "rotate-45"
          }`}
        >
          <line
            className="stroke-text stroke-[8]"
            x1="20"
            y1="20"
            x2="80"
            y2="80"
          />
          <line
            className="stroke-text stroke-[8]"
            x1="80"
            y1="20"
            x2="20"
            y2="80"
          />
        </g>
        {/* <line
          className={
            isXShape
              ? "stroke-black stroke-[8] transition-all ease-in-out duration-300"
              : "stroke-black stroke-[8] origin center rotate-45 transition-all ease-in-out duration-300"
          }
          x1="20"
          y1="20"
          x2="80"
          y2="80"
        />
        <line
          className={
            isXShape
              ? "stroke-black stroke-[8] transition-all ease-in-out duration-300"
              : "stroke-black stroke-[8] origin center rotate-45 transition-all ease-in-out duration-300"
          }
          x1="80"
          y1="20"
          x2="20"
          y2="80"
        /> */}
      </svg>
    </div>
  );
};

export default Xsvg;
