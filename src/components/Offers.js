import { useContext, useEffect, useState } from "react";
import { GeoContext } from "../contexts/GeoContext";
import { OFFER_URL, PAYMENT_OFFER_URL } from "../utils/constants";
import ResOffer from "../components/ResOffer";
import Coupons from "./Coupons";

const Offers = () => {
  const { geoData } = useContext(GeoContext);
  const [offerRes, setOfferRes] = useState([{}]);
  const[paymentOffer, setPaymentOffer]=useState([{}])
  console.log("🚀 ~ file: Offers.js:11 ~ Offers ~ paymentOffer:", paymentOffer)
  const [active, setActive] = useState(1);
  const handleActive = (a) => {
    setActive(a);
  };

  useEffect(() => {
    if(active==1)
    getRestaurantOffer();
    else
    getPaymentOffer();
  }, [active]);

  const urlres = `${OFFER_URL}lat=${geoData.lat}&lng=${geoData.lng}`;
  const getRestaurantOffer = async () => {
    const data = await fetch(urlres);
    const json = await data.json();
    setOfferRes(json?.data?.cards);
  };
  const urlpay=`${PAYMENT_OFFER_URL}lat=${geoData.lat}&lng=${geoData.lng}&offset=0`
  const getPaymentOffer=async()=>{
    const data=await fetch(urlpay);
    const json= await data.json();
    setPaymentOffer(json.data)
  }

  return (
    <div className="mt-20 min-h-screen">
      <div className="w-screen bg-[#005062]">
        <div className="bg-[#005062] w-[75%] flex justify-between mx-auto p-16">
          <div className="flex flex-col text-white ml-16  justify-center align-middle h-full">
            <p className="text-5xl font-bold">Offers for you</p>
            <p className="text-lg text-gray-300">
              Explore top deals and offers exclusively for you!
            </p>
          </div>
          <div className="flex flex-col text-white mr-16  justify-center align-middle h-full">
            <img
              className="w-56 h-46"
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/KHu24Gqw_md3ham"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" border-b w-[75%] mx-auto">
        <div className="flex px-0 space-x-7">
          <div
            className={`py-5  cursor-pointer ease-in duration-300 ${
              active === 1 ? "border-b-2 border-black " : "border-none"
            }`}
            onClick={() => handleActive(1)}
          >
            <p
              className={`text-lg ${
                active === 1 ? "font-semibold text-black" : "text-gray-500"
              }`}
            >
              Restaurant Offers
            </p>
          </div>
          <div
            className={`py-5 cursor-pointer ease-in duration-300 ${
              active === 2 ? " border-b-2 border-black" : ""
            }`}
            onClick={() => handleActive(2)}
          >
            <p
              className={`text-lg ${
                active === 2 ? "font-semibold text-black" : "text-gray-500"
              }`}
            >
              Pyment Offers/Coupons
            </p>
          </div>
        </div>
      </div>

      {offerRes?.length != 0 && active == 1 ? (
       <div className="w-[75%] mx-auto"> <ResOffer offerRes={offerRes} /></div>
      ) : active == 2 ? (
       <div className="w-[75%] mx-auto"> <Coupons payment={paymentOffer?.cards}/></div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Offers;
