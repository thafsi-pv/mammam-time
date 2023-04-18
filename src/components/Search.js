import { useContext, useEffect, useState } from "react";
import { IMAGE_URL, SEARCH_URL } from "../utils/constants";
import { GeoContext } from "../contexts/GeoContext";

const Search = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [serchResult, setSearchResult] = useState([]);
  const { geoData } = useContext(GeoContext);

  useEffect(() => {
    if (searchTxt.length > 1) getSearchResult();
  }, [searchTxt]);

  const url = `${SEARCH_URL}lat=${geoData.lat}&lng=${geoData.lng}&str=${searchTxt}&trackingId=undefined`;
  const getSearchResult = async () => {
    const data = await fetch(url);
    const json = await data.json();
    setSearchResult(json.data.suggestions);
  };

  return (
    <div className="mt-20 container w-2/3 mx-auto min-h-screen">
      <div className=" pt-10 pb-5 mx-auto flex justify-center mb-5 sticky top-20 bg-white">
        <input
          type="text"
          placeholder="Search for restaurant and food"
          className="input input-bordered w-full"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
      </div>
      <div className="mx-5 ">
        {serchResult.map((item, index) => (
          <div
            key={index}
            className="flex space-x-4 hover:bg-gray-100 py-4  items-center"
          >
            <img
              className="rounded-md w-16 h-16 object-cover"
              src={IMAGE_URL + item.cloudinaryId}
              alt=""
            />
            <div>
              <p className="text-sm">{item.text}</p>
              <p className="text-sm text-gray-400">{item.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
