import Slider from "./Slider";

import ResCard from "./ResCard";

const Body = () => (
  <div className="mt-20">
    <Slider />
    <div className="flex justify-end w-[1300px] m-auto p-4">
      <div className="px-3 pt-4">
        <div className="input-group ">
          <input
            type="text"
            placeholder="Search Restaurant"
            className="input input-bordered"
          />
          <button className="btn btn-square bg-orange-500 border-orange-500 hover:bg-orange-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div className="flex flex-wrap items-center w-[1300px] m-auto justify-between columns-4">
      {Array.from({ length: 10 }, (_, index) => (
        <ResCard key={index}/>
      ))}
     
    </div>
  </div>
);

export default Body;
