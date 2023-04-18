const Coupons = (prop) => {
  const { payment } = prop;
  console.log("🚀 ~ file: Coupons.js:3 ~ Coupons ~ payment:", payment);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4">
      {payment?.slice(1).map((payc, index) => (
        <>
          {payc.cardType == "messageCard" ? (
            <div key={index} className="col-start-1 col-span-3 py-5">
              <p className="font-bold text-xl">{payc.data.data.message}</p>
            </div>
          ) : (
            <div key={index} className="">
              <div className="bg-white border p-4">
                <div className="flex">
                  <div className="flex border items-center space-x-3 bg-[#fffae6]">
                    <img
                      className="px-2 w-10 h-10 rounded-full p-2"
                      src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/${payc.data.data.logo}`}
                      alt=""
                    />
                    <p className="font-semibold px-4">
                      {payc.data.data.couponCode}
                    </p>
                  </div>
                </div>
                <div className="py-1 font-semibold">
                  <p>{payc.data.data.title}</p>
                </div>
                <div className="py-1 text-sm">{payc.data.data.description}</div>
                <div className="py-1">
                  <a href="" className="text-blue-500 text-xs font-bold">
                    + MORE
                  </a>
                </div>
                <div className="py-1">
                  {payc.cardType == "couponCardV2" ? (
                    <button className="border py-2 font-bold text-orange-500 border-orange-500 px-5">
                      COPY CODE
                    </button>
                  ) : (
                    <p className="text-xs text-red-500">{payc.data.data.couponPreValidationStatus.message}</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default Coupons;
