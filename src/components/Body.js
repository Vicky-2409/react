import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { DATA_URL } from "../utils/constants";
import useCheckStatus from "../utils/useCheckStatus";
import isOpen from "./IsOpen";

const Body = () => {
  let [Restaurants, setRestaurants] = useState([]);
  let [filteredRestaurants, setFilteredRestaurants] = useState([]);
  let [searchText, setSearchText] = useState("");
  console.log(searchText);
  const status = useCheckStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(DATA_URL);
    const json = await data.json();

    setRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
  };

  if (status === false)
    return (
      <h1>Look's Like you are Offline . Check your internet Connection</h1>
    );

    const IsOpenRestaurentCard = isOpen(RestaurantCard);

  return Restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-center ">
        <div className="search">
          <input
          className="border border-solid border-black w-60 m-4 px-2"
            type="text"
            placeholder="Search by restaurant name"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            className="bg-gray-400 px-4 mr-4 border border-black rounded-md"
            onClick={() => {
              filteredRestaurants = Restaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
          <button
          className="bg-green-600 px-4 mr-4 border border-black rounded-md"
          onClick={() => {
            filteredRestaurants = Restaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurants(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>

      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => {
          return restaurant.info.isOpen ? <IsOpenRestaurentCard restaurant={restaurant} key={restaurant.info.id}/> : (
            <RestaurantCard restaurant={restaurant} key={restaurant.info.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
