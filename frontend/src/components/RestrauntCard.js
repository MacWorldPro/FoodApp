import { IMG_CDN_URL } from "../utils/constants";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  costForTwo,


}) => {
  return (

    <div className="w-64 m-4  rounded-xl  hover:scale-110  flex-wrap justify-start">
      <div>
        <img src={IMG_CDN_URL+cloudinaryImageId} className="w-full rounded-lg"></img>
      </div>
      <div>
        <p className="font-bold text-clip truncate">{name}</p>
      </div>
      <div className="grid grid-cols-2">
        <p className="font-bold"><i className="fa-regular fa-star" style={{ color: "#125e03" }} />{avgRating}</p>
        <p className="font-bold">{costForTwo}</p>
      </div>
      <div>
        <p className="text-clip truncate text-slate-500">{cuisines.join(", ")}</p>
      </div>
    </div>


  )
}
export default RestrauntCard;


//w-60  m-6 p-20 border-r-6 inline-grid hover:scale-110 transition duration-500 align-baseline shadow