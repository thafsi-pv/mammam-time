import React from "react";

const ShimmerCard = () => {
  return (
    <div className=" w-full sm:w-1/2 md:w-1/4 md:p-2 xl:p-6">
      <div className="card w-100 bg-base-100 shadow-xl ">
        <figure className="h-36 bg-gray-300 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400"></figure>
        <div className="card-body px-3 gap-0 pt-4">
          <h2 className="card-title h-4 bg-gray-300"></h2>
          <p className="text-xs font-semibold text-gray-500 h-2 m-3 bg-gray-300"></p>
          <div className="flex justify-between mt-10 h-4 bg-gray-300">
            <div className="bg-gray-300 h-4"></div>
            <div className="h-4">
              <p className="text-xs font-semibold h-4 text-gray-500 bg-gray-300"></p>
            </div>
            <div>
              <p className="text-xs font-semibold h-2 text-gray-500 bg-gray-300"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function HomeShimmer() {
  return (
    <div className="mt-20">
      <div className="mt-20">
        {/* <Slider carousal={carousal} /> */}
        <div className="px-20  min-w-fit bg-[#181a29]">
          <div className="flex justify-center items-center max-w-[1300px] h-[250px]  mx-auto">
            <div className="flex flex-col items-center">
              <button className="btn btn-square  bg-[#181a29] border-none loading h-10 w-10"></button>
              <p className="text-gray-300 text-[30px]">
                Looking for great food near you...
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex flex-wrap items-start w-[1300px] m-auto justify-between md:columns-4 sm:columns-2"
          id="product-container"
        >
          {Array(8)
            .fill(null)
            .map((_, index) => (
              <ShimmerCard key={index} />
            ))}
        </div>
        <div className="flex justify-center m-4"></div>
      </div>
    </div>
  );
}

export default HomeShimmer;
