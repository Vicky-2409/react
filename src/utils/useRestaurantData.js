import { REST_DATA } from "../utils/constants";
import { useState, useEffect } from "react";

const useRestaurantData = (ResId) => {
  const [ResData, setResData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(REST_DATA + ResId);
    const json = await data.json();
    setResData(json);
  };

  return ResData;
};

export default useRestaurantData;
