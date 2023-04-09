import React from "react";
import { HiStar } from "react-icons/hi";
import { TbDiscount2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { IMAGE_URL } from "../utils/constants";

function ResCard(prop) {
  let {
    cloudinaryImageId,
    name,
    costForTwoString,
    cuisines,
    avgRating,
    aggregatedDiscountInfo,
    deliveryTime,
    id,
  } = prop.resData;
  // let {header="",shortDescriptionList}=aggregatedDiscountInfo??[];
  // let[meta]=shortDescriptionList;

  return (
    <div className="bg-white  w-full sm:w-1/2 md:w-1/4 md:p-2 xl:p-6">
      <Link to={`/resmenu/${id}`}>
        <div className="card w-100 bg-base-100 hover:shadow-xl hover:cursor-pointer">
          <figure>
            <img src={IMAGE_URL + cloudinaryImageId} alt="Shoes" />
          </figure>
          <div className="card-body px-3 gap-0 pt-4">
            <h2 className="card-title">{name}</h2>
            <p className="text-xs font-semibold text-gray-500">
              {cuisines.join(", ")}
            </p>
            <div className="flex justify-between pt-3">
              <div
                className={
                  avgRating >= 4
                    ? "badge rounded-none badge-ghost p-2 bg-success text-white"
                    : "badge rounded-none badge-ghost p-2 bg-error text-white"
                }
              >
                <HiStar />
                {avgRating}
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500">
                  {deliveryTime} MINS
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500">
                  {costForTwoString}
                </p>
              </div>
            </div>
            {aggregatedDiscountInfo != undefined ? (
              <>
                <div className="divider"></div>
                <div className="flex items-center space-x-2 text-[#8a584b]">
                  <TbDiscount2 className="h-5 w-5" />{" "}
                  <p className="text-sm font-semibold">
                    {aggregatedDiscountInfo?.shortDescriptionList[0]?.meta}
                  </p>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ResCard;
