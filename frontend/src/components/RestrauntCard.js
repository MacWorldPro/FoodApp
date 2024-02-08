import { IMG_CDN_URL } from "../utils/constants";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  costForTwo,


}) => {
  return (

<div className="w-full sm:w-64 m-4 rounded-xl hover:scale-110 flex flex-col justify-start items-center sm:items-start">
  <div className="overflow-hidden rounded-lg w-full">
    <img src={IMG_CDN_URL + cloudinaryImageId} className="w-full h-auto" alt="Restaurant" />
  </div>
  <div className="mt-2">
    <p className="font-bold text-clip truncate">{name}</p>
  </div>
  <div className="grid grid-cols-2 sm:grid-cols-1 mt-1 w-full">
    <p className="flex items-center font-bold text-green-600">
      <i className="far fa-star mr-1" style={{ color: "#125e03" }} />{avgRating}
    </p>
    <p className="font-bold">{costForTwo}</p>
  </div>
  <div className="mt-1 w-full">
    <p className="text-sm text-clip truncate text-gray-500">{cuisines.join(", ")}</p>
  </div>
</div>



  )
}
export default RestrauntCard;


//w-60  m-6 p-20 border-r-6 inline-grid hover:scale-110 transition duration-500 align-baseline shadow