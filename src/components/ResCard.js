import React from "react";
import { HiStar } from "react-icons/hi";
import { TbDiscount2 } from "react-icons/tb";

function ResCard() {
  return (
    <div className="bg-white  w-full sm:w-1/2 md:w-1/4 md:p-2 xl:p-6 ">
      <div className="card w-100 bg-base-100 hover:shadow-xl hover:cursor-pointer">
        <figure>
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/mkevcwbgxz9kzq7himtu"
            alt="Shoes"
          />
        </figure>
        <div className="card-body px-3 gap-0 pt-4">
          <h2 className="card-title">Chicking</h2>
          <p className="text-xs font-semibold text-gray-500">
            Snacks, Grill, Fast Food, American, Pizzas, Mexican, Beverages
          </p>
          <div className="flex justify-between pt-3">
            <div className="badge rounded-none badge-ghost p-2 bg-success text-white">
              <HiStar />
              3.7
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500">29 MINS</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500">500 FOR TWO</p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex items-center space-x-2 text-[#8a584b]">
            <TbDiscount2 className="h-5 w-5" />{" "}
            <p className="text-sm font-semibold">20% off | Use TRYNEW</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResCard;
