import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  const { id, name, cloudinaryImageId, avgRating, cuisines, costForTwo } =
    restaurant?.info;
  return (
    <div className="w-[271px] bg-violet-200 m-4 p-4 hover:bg-amber-100">
      <img
        className="h-48 w-60"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant-image"
      />
      <h3 className="text-xl font-bold mt-4">{name}</h3>
      <p>Rating:{avgRating}</p>
      <p>{cuisines.join(", ")}</p>
      <p>costForTwo:{costForTwo}</p>
      <Link to={"/restaurants/" + id}>
        <button className="bg-green-500 px-4 rounded-lg mt-4">Order Now</button>
      </Link>
    </div>
  );
};

export default RestaurantCard;
