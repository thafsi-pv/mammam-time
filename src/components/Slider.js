import React from "react";
import { CAROUSAL_URL } from "../utils/constants";

function Slider(props) {
  const { carousal } = props;
  const { data } = carousal;
  console.log("🚀 ~ file: Slider.js:7 ~ Slider ~ data:", data);
  return (
    <div className="px-20  min-w-fit bg-[#181a29]">
      <div className="carousel carousel-center max-w-[1300px] mx-auto">
        {data?.data?.cards?.map((i) => (
          <div className="carousel-item  p-8 object-cover transform transition duration-500 hover:scale-105 cursor-pointer">
            <img src={CAROUSAL_URL + i.data.creativeId} className="h-64" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
