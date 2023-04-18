const ResMenuShimmer = () => {
  return (
    <div className="mt-20 md:w-3/8 sm:w-1/2 pt-5 mx-auto min-h-screen">
      <div className="flex justify-between items-center">
        <div className=" h-5 w-72 bg-gray-300 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400">
        </div>
      </div>
      <div className="flex justify-between items-center p-3 border-b-2 border-dotted mb-2">
        <div className="flex flex-col  h-4 w-32 bg-gray-300 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400">
        </div>
        <div className="flex flex-col items-center border p-2 rounded-md h-24 w-32 bg-gray-300 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400">
        </div>
      </div>
      <div>
        <div className="carousel carousel-center space-x-3 mt-3 mx-auto h-14 bg-gray-300 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400"></div>
      </div>
      <div className="border-b mb-3">
        <div className="form-control inline-block mt-3 ">
        </div>
      </div>
      <div className="h-10 w-full bg-gray-300 mb-3 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400"></div>
      <div className="h-10 w-full bg-gray-300 mb-3 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400"></div>
      <div className="h-10 w-full bg-gray-300 mb-3 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400"></div>
      <div className="h-10 w-full bg-gray-300 mb-3 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400"></div>
    </div>
  );
};

export default ResMenuShimmer;
