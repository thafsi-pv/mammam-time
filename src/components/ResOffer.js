import ResCard from '../components/ResCard';

const ResOffer = (prop) => {
  console.log("🚀 ~ file: ResOffer.js:2 ~ ResOffer ~ prop:", prop)
  const { offerRes } = prop;
  console.log("🚀 ~ ResOffer ~ offerRes:", offerRes)
  return (
    <div className="my-6">
      <div className="">
        {/* <p className="text-2xl font-bold">{offerRes[0]?.data?.data?.message}</p> */}
        <p className="text-sm text-gray-500">
          All offers and deals, from restaurants near you
        </p>
      </div>

      <div className="flex flex-wrap items-start  m-auto justify-between md:columns-4 sm:columns-2">
        {offerRes?.map((i, index) => (
            <ResCard key={index} resData={i.info} />
          ))}
      </div>
    </div>
  );
};

export default ResOffer;