const isOpen = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2">Open Now </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default isOpen;
