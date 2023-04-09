import React, { useContext, useEffect, useState } from "react";
import { BsSearch, BsFillStarFill } from "react-icons/bs";
import { BiRestaurant } from "react-icons/bi";
import {
  MdOutlineDeliveryDining,
  MdTimelapse,
  MdOutlineCurrencyRupee,
} from "react-icons/md";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { useParams } from "react-router";
import vegIcon from "../assets/img/iconVeg.png";
import NonvegIcon from "../assets/img/iconNonVeg.png";
import { OFFER_CARD_IMG, RES_DETAILS_URL } from "../utils/constants";
import HomeShimmer from "./HomeShimmer";
import { TbDiscount2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { GeoContext } from "../contexts/GeoContext";

const OfferCard = (props) => {
  const { couponCode, description, header, logoBottom } = props.offers.info;
  return (
    <div className="carousel-item object-cover transform transition duration-500 hover:scale-105 cursor-pointer">
      <div className="flex flex-col border rounded-md p-3">
        <div className="font-bold text-sm flex">
          {logoBottom != null ? (
            <img
              className="w-5 h-5 mr-3"
              src={OFFER_CARD_IMG + logoBottom}
              alt=""
            />
          ) : (
            <TbDiscount2 className="h-5 w-5 text-orange-800 mr-3" />
          )}
          <p>{header} </p>
        </div>
        <div className="font-bod text-xs">
          {couponCode} | {description}
        </div>
      </div>
    </div>
  );
};

const GroupedMenuDetails = (props) => {
  if (props?.menu?.card?.card.itemCards != undefined) {
    var { itemCards } = props?.menu?.card?.card;
    console.log(
      "🚀 ~ file: ResMenu.js:39 ~ GroupedMenuDetails ~ itemCards:",
      itemCards
    );
  }
  return itemCards != undefined ? (
    <div tabIndex={0} className="collapse p-0 m-0 collapse-arrow bg-base-100">
      <div className="collapse-title text-xl font-medium px-0">
        <p className="font-bold text-[18px]">
          {itemCards[0]?.card?.info?.category} ({itemCards.length})
        </p>
      </div>
      <div className="collapse-content px-0">
        {itemCards.map((item, index) => (
          <div key={index} className="flex justify-between border-b py-3">
            <div className="flex-1">
              <img
                className="w-4 h-4"
                src={
                  item?.card?.info?.itemAttribute?.vegClassifier == "NONVEG"
                    ? NonvegIcon
                    : vegIcon
                }
                alt=""
              />
              <p className="text-md font-semibold text-gray-900">
                {item.card.info.name}
              </p>
              <p className="flex items-center text-sm text-gray-900">
                <MdOutlineCurrencyRupee />
                {item.card.info.price / 100}
              </p>
              <p className="text-xs text-gray-400">
                {item.card.info.description}
              </p>
            </div>
            <div className="flex-0 ">
              <img
                className="rounded "
                src={
                  `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/` +
                  item.card.info.imageId
                }
                alt=""
              />
              <label
                htmlFor="my-modal-3"
                className="btn bg-white text-green-500 border-gray-300 w-full hover:shadow-lg hover:bg-white"
              >
                Add
              </label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h3 className="text-lg font-bold">
                    Congratulations random Internet user!
                  </h3>
                  <p className="py-4">
                    You've been selected for a chance to get one year of
                    subscription to use Wikipedia for free!
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    ""
  );
};

function ResMenu() {
  var { geoData } = useContext(GeoContext);
  const { id } = useParams();
  const [resDetails, setResDetails] = useState([]);
  //console.log("🚀 ~ file: ResMenu.js:23 ~ ResMenu ~ resDetails:", resDetails);

  if (resDetails && resDetails.length != 0) {
    var {
      name,
      cuisines,
      areaName,
      costForTwoMessage,
      expectationNotifiers,
      avgRating,
      totalRatingsString,
      sla,
      city,
      areaName,
    } = resDetails?.cards[0]?.card?.card?.info;
    var { text, enrichedText } = expectationNotifiers[0];
    var { deliveryTime } = sla;
    var { offers } =
      resDetails?.cards[1]?.card?.card?.gridElements?.infoWithStyle;

    var { cards } = resDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
    //console.log("🚀 ~ file: ResMenu.js:118 ~ ResMenu ~ cards:", cards);
  }

  useEffect(() => {
    getResData();
  }, []);
  const url =
    RES_DETAILS_URL +
    "lat=" +
    geoData.lat +
    "&" +
    "lng=" +
    geoData.lng +
    "&restaurantId=" +
    id;
  console.log("🚀 ~ file: ResMenu.js:160 ~ ResMenu ~ url:", url);
  const getResData = async () => {
    let data = await fetch(url);
    let json = await data.json();
    setResDetails(json.data);
  };
  return resDetails?.length === 0 ? (
    <HomeShimmer />
  ) : (
    <div className="mt-20 md:w-3/8 sm:w-1/2 pt-5 mx-auto min-h-screen">
      <div className="flex justify-between items-center">
        <div className="text-xs breadcrumbs">
          <ul>
            <li>
              <Link to="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <a>{city}</a>
            </li>
            <li>{areaName}</li>
            <li>{name}</li>
          </ul>
        </div>
        <div>
          <BsSearch />
        </div>
      </div>
      <div className="flex justify-between items-center p-3 border-b-2 border-dotted mb-2">
        <div className="flex flex-col">
          <p className="text-[20px] font-bold">{name}</p>
          <div>
            <p className="text-xs">{cuisines.join(", ")}</p>
            <p className="text-xs">{areaName}</p>
            <p className="flex items-center text-xs pt-3">
              <MdOutlineDeliveryDining className="w-5 h-5 mr-2" /> {text}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center border p-2 rounded-md">
          <div className="p-0 flex items-center text-green-700">
            <BsFillStarFill className="mr-1" />{" "}
            <p className="font-bold">{avgRating}</p>
          </div>
          <div className="divider p-0 m-0"></div>
          <div className="text-xs">{totalRatingsString}</div>
        </div>
      </div>
      <div className="flex  space-x-4 p-3 w-full">
        <div className="flex items-center text-sm font-bold">
          <MdTimelapse className="w-5 h-5 mr-2" />
          <p>{deliveryTime} MINS</p>
        </div>
        <div className="flex items-center text-sm font-bold">
          <HiOutlineCurrencyRupee className="w-5 h-5 mr-2" />
          <p>{costForTwoMessage}</p>
        </div>
      </div>
      <div>
        <div className="carousel carousel-center space-x-3 mt-3 mx-auto">
          {offers.map((off, index) => (
            <OfferCard offers={off} key={index} />
          ))}
        </div>
      </div>
      <div className="border-b mb-3">
        <div className="form-control inline-block mt-3 ">
          <label className="label cursor-pointer space-x-3">
            <span className="label-text font-bold text-sm">Veg Only</span>
            <input type="checkbox" className="toggle toggle-sm" />
          </label>
        </div>
      </div>
      {cards.map((itm, index) => (
        <GroupedMenuDetails menu={itm} key={index} />
      ))}

      <div className="sticky bottom-5 flex justify-center ">
        <button className="btn rounded-3xl py-2 px-5 text-xs bg-[#5d8ed5] border-none shadow-2xl hover:bg-[#5d8ed5]">
          <BiRestaurant className="mr-3" />
          Browse Menu
        </button>
      </div>
    </div>
  );
}

export default ResMenu;
