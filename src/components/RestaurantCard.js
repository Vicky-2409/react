import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  const { id, name, cloudinaryImageId, avgRating, cuisines, costForTwo } =
    restaurant?.info;
  return (
    <div className="restaurant-card">
      <img src={CDN_URL + cloudinaryImageId} alt="restaurant-image" />
      <h3>{name}</h3>
      <p>Rating:{avgRating}</p>
      <p>{cuisines.join(", ")}</p>
      <p>costForTwo:{costForTwo}</p>
      <Link to={"/restaurants/"+id}><button>Order Now</button></Link>
    </div>
  );
};

export default RestaurantCard;
