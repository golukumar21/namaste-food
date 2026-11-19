import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, costForTwo, cuisines, avgRating, sla, cloudinaryImageId } =
    resData?.info || {};
  return (
    <div className="res-card m-4 p-4 w-[275] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="res-logo rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};

// Higher Order Component

// input - RestaurantCard => RestaurantCardVeg

export const withVegLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-600 text-white mt-2 mx-6 p-2 rounded-lg">
          Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
