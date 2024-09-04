import { useParams } from "react-router-dom";
import { REST_DATA } from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantPage = () => {
  const { ResId } = useParams();
  const [resdata, setResdata] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(REST_DATA + ResId);
    const json = await data.json();
    setResdata(json);
    console.log(json);
  };

  if (resdata === null) return <Shimmer />;

  const { name, avgRating, costForTwoMessage, cuisines,  locality } =
    resdata?.data?.cards[2]?.card?.card?.info;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{costForTwoMessage} </h2>
      <h3>{cuisines}</h3>
      <h3>{avgRating}</h3>
      <h3>{locality}</h3>
      </div>
  );
};

export default RestaurantPage;
