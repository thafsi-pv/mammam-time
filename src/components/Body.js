import { useState, useEffect, useCallback, useContext } from "react";
import Slider from "./Slider";
import ResCard from "./ResCard";
import { API, API_AFTER_GEO, API_BEFORE_GEO } from "../utils/constants";
import HomeShimmer from "./HomeShimmer";
import ResMenuShimmer from "./ResMenuShimmer"
import { GeoContext } from "../contexts/GeoContext";
import WhatsOnMind from "./WhatsOnMind";

const Body = () => {
  const { geoData } = useContext(GeoContext);

  const openRes = "";
  let [restList, setResList] = useState([]);
  let [whatsOnMind, setWhatsOnMind] = useState([]);
  console.log("🚀 ~ Body ~ whatsOnMind:", whatsOnMind)
  let [moreList, setmoreList] = useState([{}])
  console.log("🚀 ~ file: Body.js:8 ~ Body ~ restList:", restList);
  let [carousal, setCarousal] = useState([]);
  let [searchText, setSearchText] = useState([]);

  useEffect(() => {
    getResList();
    console.log("fethc useEffect");

  }, [geoData]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  })

  const url =
    API_BEFORE_GEO +
    "lat=" +
    geoData.lat +
    "&lng=" +
    geoData.lng +
    API_AFTER_GEO;

  const getResList = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("🚀 ~ getResList ~ data:", data)
      setResList(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      setWhatsOnMind(data.data.cards[0].card.card.imageGridCards.info)
      // setCarousal(data.data.cards[0]);
    } catch (error) { }
  };

  const handleSearch = (res, serchtxt) => {
    let filterData = res.filter((restu) => {
      return restu.data.name.includes(serchtxt);
    });
    return filterData;
  };

  // Fetch more data when user scrolls to the bottom of the page
  // useEffect(() => {
  //   console.log("fethc useEffect");
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // });

  const handleScroll = () => {
    setmoreList = [{}]
    if (
      Math.round(window.innerHeight + document.documentElement.scrollTop) ===
      document.documentElement.offsetHeight
    ) {
      getMoreResList();

      console.log("fetch more...");
    }
  };

  var offset = 15
  //var murl=`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${geoData.lat}&lng=${geoData.lng}&offset=${offset}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`
  var murl = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9312328&lng=76.26730409999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
  const getMoreResList = async () => {
    try {
      const response = await fetch(murl);
      const data = await response.json();

      const curdt = restList;
      console.log("🚀 ~ file: Body.js:74 ~ getMoreResList ~ curdt:", curdt);

      const newdt = data.data.cards;
      console.log("🚀 ~ file: Body.js:77 ~ getMoreResList ~ newdt:", newdt);


      const updatedData = {
        ...curdt,
        cards: [...curdt.cards, ...newdt.map((item) => item.data)]
      };
      console.log("🚀 ~ file: Body.js:81 ~ getMoreResList ~ updatedData:", updatedData)
      offset = offset + 16;
      setResList(updatedData);
    } catch (error) { }
  };

  return restList.length === 0 ? (
    <HomeShimmer />
  ) : (
    <div className="mt-[8rem] w-[1300px] m-auto">
      {/* <Slider carousal={carousal} /> */}
      <WhatsOnMind items={whatsOnMind} />
      <div className="flex justify-end w-[1300px] m-auto p-4">
        <div className="px-3 pt-4">
          <div className="input-group ">
            <input
              type="text"
              placeholder="Search Restaurant"
              className="input input-bordered"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="btn btn-square bg-orange-500 border-orange-500 hover:bg-orange-300"
              onClick={() => {
                let data = handleSearch(restList.cards, searchText);
                setResList(data);
              }}
            >
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
      <div className=" w-[1300px] m-auto sticky top-0 z-20 bg-white h-16 pt-4">
        <div className="flex justify-between w-[1300px]">
          <div>
            <p className="text-[25px] font-semibold">
              {restList.totalOpenRestaurants} restaurants
            </p>
          </div>
          <div className="flex justify-between text-sm space-x-6 mx-6 text-gray-400">
            <div className="hover:border-b-2 border-black">
              <p>Relevance</p>
            </div>
            <div className="hover:border-b-2 border-black">
              <p>Delivery Time</p>
            </div>
            <div className="hover:border-b-2 border-black">
              <p>Rating</p>
            </div>
            <div className="hover:border-b-2 border-black">
              <p>Cost: Low To High</p>
            </div>
            <div className="hover:border-b-2 border-black">
              <p>Cost: High To Low</p>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div
        className="flex flex-wrap items-start w-[1300px] m-auto justify-between md:columns-4 sm:columns-2"
        id="product-container"
      >
        {restList?.map((i) => (
          <ResCard key={i.info.id} resData={i.info} />
        ))}
      </div>
      <div className="flex justify-center m-4">
        <button className="btn loading">loading</button>
      </div>

    </div>
  );
};

export default Body;
